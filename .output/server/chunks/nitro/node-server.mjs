globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  title: "Hello Nuxt"
});

const inlineAppConfig = {};

const appConfig = defuFn(appConfig0, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "apiBase": "https://api.larutaentelempresas.pe"
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/assets/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-itZWM34buyhSZB2pn59RSWCHVQI\"",
    "mtime": "2025-03-31T16:39:55.000Z",
    "size": 6148,
    "path": "../public/assets/.DS_Store"
  },
  "/_nuxt/alert.1b6de979.svg": {
    "type": "image/svg+xml",
    "etag": "\"778-sN28mX1vdEl/iTxRg5PblidDUVs\"",
    "mtime": "2025-06-20T12:32:46.572Z",
    "size": 1912,
    "path": "../public/_nuxt/alert.1b6de979.svg"
  },
  "/_nuxt/arrow_right.c2854c0d.svg": {
    "type": "image/svg+xml",
    "etag": "\"232-ebf7vJIg1qc82b+3n98l/tzld6g\"",
    "mtime": "2025-06-20T12:32:46.574Z",
    "size": 562,
    "path": "../public/_nuxt/arrow_right.c2854c0d.svg"
  },
  "/_nuxt/Barlow-Bold.984a0f81.ttf": {
    "type": "font/ttf",
    "etag": "\"1921c-lsOv6suPlewBUVdBmu2LMcz17UY\"",
    "mtime": "2025-06-20T12:32:46.573Z",
    "size": 102940,
    "path": "../public/_nuxt/Barlow-Bold.984a0f81.ttf"
  },
  "/_nuxt/Barlow-ExtraBold.3bbffb00.ttf": {
    "type": "font/ttf",
    "etag": "\"19990-Ma3RDKl/N/A7Mi2Q7/v3GEe9Lw0\"",
    "mtime": "2025-06-20T12:32:46.573Z",
    "size": 104848,
    "path": "../public/_nuxt/Barlow-ExtraBold.3bbffb00.ttf"
  },
  "/_nuxt/Barlow-Light.c9e9410b.ttf": {
    "type": "font/ttf",
    "etag": "\"17e90-OyNA7ZhxTXnC3df+6BIM1BmLlxo\"",
    "mtime": "2025-06-20T12:32:46.572Z",
    "size": 97936,
    "path": "../public/_nuxt/Barlow-Light.c9e9410b.ttf"
  },
  "/_nuxt/Barlow-Medium.f1f57edb.ttf": {
    "type": "font/ttf",
    "etag": "\"17fc4-RZHTkMNPFz559xv562gidrbYvyg\"",
    "mtime": "2025-06-20T12:32:46.572Z",
    "size": 98244,
    "path": "../public/_nuxt/Barlow-Medium.f1f57edb.ttf"
  },
  "/_nuxt/Barlow-Regular.77fb1ac5.ttf": {
    "type": "font/ttf",
    "etag": "\"181fc-dCbjh66hm0hqR/FYaaOoMo+sAFg\"",
    "mtime": "2025-06-20T12:32:46.573Z",
    "size": 98812,
    "path": "../public/_nuxt/Barlow-Regular.77fb1ac5.ttf"
  },
  "/_nuxt/Barlow-SemiBold.07ea3ff2.ttf": {
    "type": "font/ttf",
    "etag": "\"19268-POX1SxCVY+FzwesdzNPGliyRK2o\"",
    "mtime": "2025-06-20T12:32:46.572Z",
    "size": 103016,
    "path": "../public/_nuxt/Barlow-SemiBold.07ea3ff2.ttf"
  },
  "/_nuxt/calendar.9fdfbc4b.svg": {
    "type": "image/svg+xml",
    "etag": "\"3ab-YIfOJ6TAtSrKYcMTEeRehgiqvMg\"",
    "mtime": "2025-06-20T12:32:46.572Z",
    "size": 939,
    "path": "../public/_nuxt/calendar.9fdfbc4b.svg"
  },
  "/_nuxt/carrusel.b1b60b28.js": {
    "type": "application/javascript",
    "etag": "\"8df-AP62w9IW7QRgVoJlW/OJSP1K7Z8\"",
    "mtime": "2025-06-20T12:32:46.589Z",
    "size": 2271,
    "path": "../public/_nuxt/carrusel.b1b60b28.js"
  },
  "/_nuxt/carrusel.e2fff130.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"100e-i4n72hF5UskSWzMHGKxYyfY3Z3g\"",
    "mtime": "2025-06-20T12:32:46.582Z",
    "size": 4110,
    "path": "../public/_nuxt/carrusel.e2fff130.css"
  },
  "/_nuxt/default.661969cf.js": {
    "type": "application/javascript",
    "etag": "\"fbf-lDRfpgAetEBkTqhqxiS/xz7eukc\"",
    "mtime": "2025-06-20T12:32:46.589Z",
    "size": 4031,
    "path": "../public/_nuxt/default.661969cf.js"
  },
  "/_nuxt/default.f7988e06.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32ad-XJ9D0gjtizLIEeEO6u5JyxLNX6Y\"",
    "mtime": "2025-06-20T12:32:46.582Z",
    "size": 12973,
    "path": "../public/_nuxt/default.f7988e06.css"
  },
  "/_nuxt/edit.08e97833.svg": {
    "type": "image/svg+xml",
    "etag": "\"518-34aTq3OXL9O5ahM9iRq7uX9TAMo\"",
    "mtime": "2025-06-20T12:32:46.572Z",
    "size": 1304,
    "path": "../public/_nuxt/edit.08e97833.svg"
  },
  "/_nuxt/edit.0e9bb79d.js": {
    "type": "application/javascript",
    "etag": "\"69-aj9NiDdXjjr94ZohT3+L4tLq3ew\"",
    "mtime": "2025-06-20T12:32:46.582Z",
    "size": 105,
    "path": "../public/_nuxt/edit.0e9bb79d.js"
  },
  "/_nuxt/empower-logo.1c554ba2.js": {
    "type": "application/javascript",
    "etag": "\"71-TX2e3GGP7YDnGvJBck6fB1ME93I\"",
    "mtime": "2025-06-20T12:32:46.582Z",
    "size": 113,
    "path": "../public/_nuxt/empower-logo.1c554ba2.js"
  },
  "/_nuxt/empower-logo.d619dfcf.png": {
    "type": "image/png",
    "etag": "\"2b63-+Ty8ESprA68bzjdcAMwhMbxW0xk\"",
    "mtime": "2025-06-20T12:32:46.571Z",
    "size": 11107,
    "path": "../public/_nuxt/empower-logo.d619dfcf.png"
  },
  "/_nuxt/entel_fondo_2.04ea9a9f.png": {
    "type": "image/png",
    "etag": "\"57411-6htBrKFNe4Cc23KVaxm+7DvO2gI\"",
    "mtime": "2025-06-20T12:32:46.572Z",
    "size": 357393,
    "path": "../public/_nuxt/entel_fondo_2.04ea9a9f.png"
  },
  "/_nuxt/entry.7e54f9e5.js": {
    "type": "application/javascript",
    "etag": "\"2414d-JZ+xBQxhgtlz6JwgC4FIf9Kn70Y\"",
    "mtime": "2025-06-20T12:32:46.590Z",
    "size": 147789,
    "path": "../public/_nuxt/entry.7e54f9e5.js"
  },
  "/_nuxt/entry.d22153d6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4181-Qbm7fmgsYBzJe6Cjw4Q5+Ff1474\"",
    "mtime": "2025-06-20T12:32:46.574Z",
    "size": 16769,
    "path": "../public/_nuxt/entry.d22153d6.css"
  },
  "/_nuxt/error-404.8bdbaeb8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-jl7r/kE1FF0H+CLPNh+07RJXuFI\"",
    "mtime": "2025-06-20T12:32:46.582Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.8bdbaeb8.css"
  },
  "/_nuxt/error-404.ccae6b34.js": {
    "type": "application/javascript",
    "etag": "\"8d2-pdZc/qKvNwrKgkAIdAw6w7qGMDk\"",
    "mtime": "2025-06-20T12:32:46.589Z",
    "size": 2258,
    "path": "../public/_nuxt/error-404.ccae6b34.js"
  },
  "/_nuxt/error-500.600ef084.js": {
    "type": "application/javascript",
    "etag": "\"756-99JwVNO+JM2j8rSIthL0ilx6GPM\"",
    "mtime": "2025-06-20T12:32:46.589Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.600ef084.js"
  },
  "/_nuxt/error-500.b63a96f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-loEWA9n4Kq4UMBzJyT6hY9SSl00\"",
    "mtime": "2025-06-20T12:32:46.582Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.b63a96f5.css"
  },
  "/_nuxt/error-component.325c0bc5.js": {
    "type": "application/javascript",
    "etag": "\"478-FKuX5h/JwRecDiF46u0FO34sEHg\"",
    "mtime": "2025-06-20T12:32:46.582Z",
    "size": 1144,
    "path": "../public/_nuxt/error-component.325c0bc5.js"
  },
  "/_nuxt/event.module.71f448e0.js": {
    "type": "application/javascript",
    "etag": "\"43c-roZCvoHI0opyfBA8eiHd2EIUyMU\"",
    "mtime": "2025-06-20T12:32:46.582Z",
    "size": 1084,
    "path": "../public/_nuxt/event.module.71f448e0.js"
  },
  "/_nuxt/hero-eventos-entel.42088b0b.jpg": {
    "type": "image/jpeg",
    "etag": "\"85bc3-/nTrN30hqFGo8LGMcyPthrSH4HQ\"",
    "mtime": "2025-06-20T12:32:46.574Z",
    "size": 547779,
    "path": "../public/_nuxt/hero-eventos-entel.42088b0b.jpg"
  },
  "/_nuxt/home.module.a61fdb36.js": {
    "type": "application/javascript",
    "etag": "\"e810-t7QHbN2c80UOjwqJ8rzCMWeBkZ4\"",
    "mtime": "2025-06-20T12:32:46.589Z",
    "size": 59408,
    "path": "../public/_nuxt/home.module.a61fdb36.js"
  },
  "/_nuxt/index.056b81d1.js": {
    "type": "application/javascript",
    "etag": "\"3541-T240iDVn8o9PelmRKQpNK4hi+xk\"",
    "mtime": "2025-06-20T12:32:46.589Z",
    "size": 13633,
    "path": "../public/_nuxt/index.056b81d1.js"
  },
  "/_nuxt/index.124b0ecd.js": {
    "type": "application/javascript",
    "etag": "\"4585-YRvBAryiSRYZ3INLYcsTfprdymc\"",
    "mtime": "2025-06-20T12:32:46.589Z",
    "size": 17797,
    "path": "../public/_nuxt/index.124b0ecd.js"
  },
  "/_nuxt/index.23584f2d.js": {
    "type": "application/javascript",
    "etag": "\"18f0-XvPr/LckuFBJcXA7hmLq4WEQDnQ\"",
    "mtime": "2025-06-20T12:32:46.588Z",
    "size": 6384,
    "path": "../public/_nuxt/index.23584f2d.js"
  },
  "/_nuxt/index.25575edc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32ad-0J/Q4esnUZ/lbVtmLIzTk0aUbB8\"",
    "mtime": "2025-06-20T12:32:46.580Z",
    "size": 12973,
    "path": "../public/_nuxt/index.25575edc.css"
  },
  "/_nuxt/index.68e0124a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"70d2-GWfeKMTXbBIUL+swvIvp70o6bG4\"",
    "mtime": "2025-06-20T12:32:46.581Z",
    "size": 28882,
    "path": "../public/_nuxt/index.68e0124a.css"
  },
  "/_nuxt/index.93e18fe1.js": {
    "type": "application/javascript",
    "etag": "\"1fed-jVKYkipswJRR0cXxOv3utcVLqsg\"",
    "mtime": "2025-06-20T12:32:46.589Z",
    "size": 8173,
    "path": "../public/_nuxt/index.93e18fe1.js"
  },
  "/_nuxt/index.9ef32ab3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32ad-SLJHqYUKKynkAiHM2W+pSS0a2Sc\"",
    "mtime": "2025-06-20T12:32:46.576Z",
    "size": 12973,
    "path": "../public/_nuxt/index.9ef32ab3.css"
  },
  "/_nuxt/index.a1fd84c5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32ad-HdYMcQqDNYbxbHdZmvoQfsp/0aA\"",
    "mtime": "2025-06-20T12:32:46.573Z",
    "size": 12973,
    "path": "../public/_nuxt/index.a1fd84c5.css"
  },
  "/_nuxt/index.a4130393.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32ad-ky/oSUizLGhxGz8/nkPRIsf3v7k\"",
    "mtime": "2025-06-20T12:32:46.580Z",
    "size": 12973,
    "path": "../public/_nuxt/index.a4130393.css"
  },
  "/_nuxt/index.a5cd95ca.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"70d2-daF/GuRbZ31kKutb3BhaJCW0d5U\"",
    "mtime": "2025-06-20T12:32:46.581Z",
    "size": 28882,
    "path": "../public/_nuxt/index.a5cd95ca.css"
  },
  "/_nuxt/index.ccd801eb.js": {
    "type": "application/javascript",
    "etag": "\"210f-Lnmn3uNkQXsscyjgV1Z2C39OmEQ\"",
    "mtime": "2025-06-20T12:32:46.584Z",
    "size": 8463,
    "path": "../public/_nuxt/index.ccd801eb.js"
  },
  "/_nuxt/index.dfa4c00b.js": {
    "type": "application/javascript",
    "etag": "\"af5-tMQnyRgRaQ5/jMoG0QuebkaLCA4\"",
    "mtime": "2025-06-20T12:32:46.588Z",
    "size": 2805,
    "path": "../public/_nuxt/index.dfa4c00b.js"
  },
  "/_nuxt/index.esm.1768b303.js": {
    "type": "application/javascript",
    "etag": "\"7feb-tZh62iNoXpHBqRgMYoyMBu8iA/Y\"",
    "mtime": "2025-06-20T12:32:46.588Z",
    "size": 32747,
    "path": "../public/_nuxt/index.esm.1768b303.js"
  },
  "/_nuxt/index.f1d4bde5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6617-fKx33+GyI37aTAGUDgfN/gekq+U\"",
    "mtime": "2025-06-20T12:32:46.580Z",
    "size": 26135,
    "path": "../public/_nuxt/index.f1d4bde5.css"
  },
  "/_nuxt/index.fe6fb948.js": {
    "type": "application/javascript",
    "etag": "\"353c-zkvDfrkn9thUFOfj8xh0XqV2JGQ\"",
    "mtime": "2025-06-20T12:32:46.585Z",
    "size": 13628,
    "path": "../public/_nuxt/index.fe6fb948.js"
  },
  "/_nuxt/location.e1efa3c2.js": {
    "type": "application/javascript",
    "etag": "\"ea9e-G0pOzEk7/u1JCAnk0ivHmGe7tyg\"",
    "mtime": "2025-06-20T12:32:46.590Z",
    "size": 60062,
    "path": "../public/_nuxt/location.e1efa3c2.js"
  },
  "/_nuxt/location.fbe7f23a.svg": {
    "type": "image/svg+xml",
    "etag": "\"69e-rAAmLmjoHdQ0bKxcWspXbwmkJsU\"",
    "mtime": "2025-06-20T12:32:46.571Z",
    "size": 1694,
    "path": "../public/_nuxt/location.fbe7f23a.svg"
  },
  "/_nuxt/logo-color.6e30c63d.svg": {
    "type": "image/svg+xml",
    "etag": "\"40ea-N1WUVTitXReA/NfTmxu9ntjt2+I\"",
    "mtime": "2025-06-20T12:32:46.571Z",
    "size": 16618,
    "path": "../public/_nuxt/logo-color.6e30c63d.svg"
  },
  "/_nuxt/logo.2dbbcef4.svg": {
    "type": "image/svg+xml",
    "etag": "\"40c2-3/DgZgng1sxM6n6MAh6Q1P5kUhg\"",
    "mtime": "2025-06-20T12:32:46.564Z",
    "size": 16578,
    "path": "../public/_nuxt/logo.2dbbcef4.svg"
  },
  "/_nuxt/logo.5c6aafcc.js": {
    "type": "application/javascript",
    "etag": "\"69-/cVrfV+Uxi4VIgAyhpQkUN8lqEA\"",
    "mtime": "2025-06-20T12:32:46.582Z",
    "size": 105,
    "path": "../public/_nuxt/logo.5c6aafcc.js"
  },
  "/_nuxt/nuxt-link.7f470de4.js": {
    "type": "application/javascript",
    "etag": "\"10e1-jlWZCjVNQreZecz6O+923ZU0QR4\"",
    "mtime": "2025-06-20T12:32:46.582Z",
    "size": 4321,
    "path": "../public/_nuxt/nuxt-link.7f470de4.js"
  },
  "/_nuxt/ruta-entel.6ea6d2d5.jpg": {
    "type": "image/jpeg",
    "etag": "\"3bd29-S/e0k11+pvD8sRieZHxFHOsjBJQ\"",
    "mtime": "2025-06-20T12:32:46.572Z",
    "size": 245033,
    "path": "../public/_nuxt/ruta-entel.6ea6d2d5.jpg"
  },
  "/_nuxt/thanks.484696a2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32ad-Fo0gqbwACH1TEUdVd5K3jLSbCME\"",
    "mtime": "2025-06-20T12:32:46.581Z",
    "size": 12973,
    "path": "../public/_nuxt/thanks.484696a2.css"
  },
  "/_nuxt/thanks.56c6678b.js": {
    "type": "application/javascript",
    "etag": "\"b32-bv9mjFvsDaEaoFvBOhSEiFTKOeQ\"",
    "mtime": "2025-06-20T12:32:46.589Z",
    "size": 2866,
    "path": "../public/_nuxt/thanks.56c6678b.js"
  },
  "/_nuxt/time.7476fc15.svg": {
    "type": "image/svg+xml",
    "etag": "\"370-+xxQ1yoUn3zcWi+cbU4/MdoRQ9w\"",
    "mtime": "2025-06-20T12:32:46.572Z",
    "size": 880,
    "path": "../public/_nuxt/time.7476fc15.svg"
  },
  "/_nuxt/time.e9c4d563.js": {
    "type": "application/javascript",
    "etag": "\"374-jx9JmFkS6RmtKcOwtOfEw1Ii8Q8\"",
    "mtime": "2025-06-20T12:32:46.582Z",
    "size": 884,
    "path": "../public/_nuxt/time.e9c4d563.js"
  },
  "/_nuxt/useApi.0dfe68c4.js": {
    "type": "application/javascript",
    "etag": "\"7238-i1UQwVsDXYmgOLzKa0hs7z3a5aQ\"",
    "mtime": "2025-06-20T12:32:46.589Z",
    "size": 29240,
    "path": "../public/_nuxt/useApi.0dfe68c4.js"
  },
  "/_nuxt/useFormatDate.ef1b16ca.js": {
    "type": "application/javascript",
    "etag": "\"1cd-QYt3ON/WDAeSyhb5rEid+0b+MJY\"",
    "mtime": "2025-06-20T12:32:46.582Z",
    "size": 461,
    "path": "../public/_nuxt/useFormatDate.ef1b16ca.js"
  },
  "/assets/img/ai.png": {
    "type": "image/png",
    "etag": "\"355b7-6lyWJ1aYUFSOsfX+DVIrQ6vYrCs\"",
    "mtime": "2025-06-19T18:16:20.008Z",
    "size": 218551,
    "path": "../public/assets/img/ai.png"
  },
  "/assets/img/arrow_right.svg": {
    "type": "image/svg+xml",
    "etag": "\"232-ebf7vJIg1qc82b+3n98l/tzld6g\"",
    "mtime": "2025-06-19T19:31:06.587Z",
    "size": 562,
    "path": "../public/assets/img/arrow_right.svg"
  },
  "/assets/img/automatizacion.png": {
    "type": "image/png",
    "etag": "\"fc3d-vxKGFTKdleNFv0fFiU6OE6Xl7iw\"",
    "mtime": "2025-06-19T17:43:03.848Z",
    "size": 64573,
    "path": "../public/assets/img/automatizacion.png"
  },
  "/assets/img/ciberseguridad.png": {
    "type": "image/png",
    "etag": "\"f50c-vRiNgCrQGJXBdA1OqrvDQ7IxzBo\"",
    "mtime": "2025-06-19T18:10:10.795Z",
    "size": 62732,
    "path": "../public/assets/img/ciberseguridad.png"
  },
  "/assets/img/cloud.png": {
    "type": "image/png",
    "etag": "\"f857-CY1bxP0TFXZs2a+5vnKO4QinXnM\"",
    "mtime": "2025-06-19T18:10:12.398Z",
    "size": 63575,
    "path": "../public/assets/img/cloud.png"
  },
  "/assets/img/conectividad.png": {
    "type": "image/png",
    "etag": "\"f9ee-AraxaQ5v7mJNK+Jh4LKecEq5uHM\"",
    "mtime": "2025-06-19T18:10:14.936Z",
    "size": 63982,
    "path": "../public/assets/img/conectividad.png"
  },
  "/assets/img/eficiencia.png": {
    "type": "image/png",
    "etag": "\"f6a1-z69fVokgtnlP27uEJpncsuGqIe8\"",
    "mtime": "2025-06-19T18:10:47.188Z",
    "size": 63137,
    "path": "../public/assets/img/eficiencia.png"
  },
  "/assets/img/empower-logo.png": {
    "type": "image/png",
    "etag": "\"2b63-+Ty8ESprA68bzjdcAMwhMbxW0xk\"",
    "mtime": "2025-06-19T14:30:38.093Z",
    "size": 11107,
    "path": "../public/assets/img/empower-logo.png"
  },
  "/assets/img/entel_fondo_2.png": {
    "type": "image/png",
    "etag": "\"57411-6htBrKFNe4Cc23KVaxm+7DvO2gI\"",
    "mtime": "2025-06-19T23:56:35.994Z",
    "size": 357393,
    "path": "../public/assets/img/entel_fondo_2.png"
  },
  "/assets/img/hero-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"29e81-McIpNXeN/OOFFFS3djkau/m0X0A\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 171649,
    "path": "../public/assets/img/hero-1.jpg"
  },
  "/assets/img/hero-1.png": {
    "type": "image/png",
    "etag": "\"10c452-HH0Sr9lWrQhRF4LDlSz4Z2u7kPE\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 1098834,
    "path": "../public/assets/img/hero-1.png"
  },
  "/assets/img/hero-2.jfif": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"20670-onYEsqLRvSVhPq+WoO7pQVqnkj4\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 132720,
    "path": "../public/assets/img/hero-2.jfif"
  },
  "/assets/img/hero-eventos-entel.jpg": {
    "type": "image/jpeg",
    "etag": "\"85bc3-/nTrN30hqFGo8LGMcyPthrSH4HQ\"",
    "mtime": "2025-06-19T12:12:31.292Z",
    "size": 547779,
    "path": "../public/assets/img/hero-eventos-entel.jpg"
  },
  "/assets/img/logo-color.svg": {
    "type": "image/svg+xml",
    "etag": "\"40ea-N1WUVTitXReA/NfTmxu9ntjt2+I\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 16618,
    "path": "../public/assets/img/logo-color.svg"
  },
  "/assets/img/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"40c2-3/DgZgng1sxM6n6MAh6Q1P5kUhg\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 16578,
    "path": "../public/assets/img/logo.svg"
  },
  "/assets/img/logoempower.svg": {
    "type": "image/svg+xml",
    "etag": "\"4cc4-E1X3ffRxRK3PXQlTr7p5sTuNH9E\"",
    "mtime": "2025-06-19T00:26:49.628Z",
    "size": 19652,
    "path": "../public/assets/img/logoempower.svg"
  },
  "/assets/img/post-1.jfif": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"20670-onYEsqLRvSVhPq+WoO7pQVqnkj4\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 132720,
    "path": "../public/assets/img/post-1.jfif"
  },
  "/assets/img/post-1.png": {
    "type": "image/png",
    "etag": "\"16464-sQHPxFAa5lcfi7HCUketZoTNwfs\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 91236,
    "path": "../public/assets/img/post-1.png"
  },
  "/assets/img/ruta-entel.jpg": {
    "type": "image/jpeg",
    "etag": "\"3bd29-S/e0k11+pvD8sRieZHxFHOsjBJQ\"",
    "mtime": "2025-06-19T01:07:15.156Z",
    "size": 245033,
    "path": "../public/assets/img/ruta-entel.jpg"
  },
  "/assets/img/user-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"13f29-QLR50UwF4zyGyaBsdqcuC5xnK2I\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 81705,
    "path": "../public/assets/img/user-1.jpg"
  },
  "/assets/scss/app.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"40d8-TZIuu0fjrTwQIAcw0FTaPDu/0II\"",
    "mtime": "2025-06-20T12:04:10.264Z",
    "size": 16600,
    "path": "../public/assets/scss/app.scss"
  },
  "/assets/font/barlow/Barlow-Black.ttf": {
    "type": "font/ttf",
    "etag": "\"19da0-wTxgjVBbiPOVWeQG01dT+45oY14\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 105888,
    "path": "../public/assets/font/barlow/Barlow-Black.ttf"
  },
  "/assets/font/barlow/Barlow-BlackItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"1aaa8-C1+Z1qTPIvU2ZRC3QxMH0MQOnfU\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 109224,
    "path": "../public/assets/font/barlow/Barlow-BlackItalic.ttf"
  },
  "/assets/font/barlow/Barlow-Bold.ttf": {
    "type": "font/ttf",
    "etag": "\"1921c-lsOv6suPlewBUVdBmu2LMcz17UY\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 102940,
    "path": "../public/assets/font/barlow/Barlow-Bold.ttf"
  },
  "/assets/font/barlow/Barlow-BoldItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"1a02c-lEwsJuumXL5QadIFNF/jZUwZ4wk\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 106540,
    "path": "../public/assets/font/barlow/Barlow-BoldItalic.ttf"
  },
  "/assets/font/barlow/Barlow-ExtraBold.ttf": {
    "type": "font/ttf",
    "etag": "\"19990-Ma3RDKl/N/A7Mi2Q7/v3GEe9Lw0\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 104848,
    "path": "../public/assets/font/barlow/Barlow-ExtraBold.ttf"
  },
  "/assets/font/barlow/Barlow-ExtraBoldItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"1a464-ZXRmLHaDXr6guppgUdhrpWQxntY\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 107620,
    "path": "../public/assets/font/barlow/Barlow-ExtraBoldItalic.ttf"
  },
  "/assets/font/barlow/Barlow-ExtraLight.ttf": {
    "type": "font/ttf",
    "etag": "\"17b34-EjGty8NVK9ideEEGUJYcwjSHiGk\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 97076,
    "path": "../public/assets/font/barlow/Barlow-ExtraLight.ttf"
  },
  "/assets/font/barlow/Barlow-ExtraLightItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"19070-2QEW/o1DhptlotA194zAIiUVyUI\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 102512,
    "path": "../public/assets/font/barlow/Barlow-ExtraLightItalic.ttf"
  },
  "/assets/font/barlow/Barlow-Italic.ttf": {
    "type": "font/ttf",
    "etag": "\"1973c-8u3pmqqMkkSm3irlYzRCIMd4Xp8\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 104252,
    "path": "../public/assets/font/barlow/Barlow-Italic.ttf"
  },
  "/assets/font/barlow/Barlow-Light.ttf": {
    "type": "font/ttf",
    "etag": "\"17e90-OyNA7ZhxTXnC3df+6BIM1BmLlxo\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 97936,
    "path": "../public/assets/font/barlow/Barlow-Light.ttf"
  },
  "/assets/font/barlow/Barlow-LightItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"19470-MuChbEb3Ko/qCF4aAchIWjStIU4\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 103536,
    "path": "../public/assets/font/barlow/Barlow-LightItalic.ttf"
  },
  "/assets/font/barlow/Barlow-Medium.ttf": {
    "type": "font/ttf",
    "etag": "\"17fc4-RZHTkMNPFz559xv562gidrbYvyg\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 98244,
    "path": "../public/assets/font/barlow/Barlow-Medium.ttf"
  },
  "/assets/font/barlow/Barlow-MediumItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"195a8-Glsopd1TAbHqEX0AegOc5f81ciw\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 103848,
    "path": "../public/assets/font/barlow/Barlow-MediumItalic.ttf"
  },
  "/assets/font/barlow/Barlow-Regular.ttf": {
    "type": "font/ttf",
    "etag": "\"181fc-dCbjh66hm0hqR/FYaaOoMo+sAFg\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 98812,
    "path": "../public/assets/font/barlow/Barlow-Regular.ttf"
  },
  "/assets/font/barlow/Barlow-SemiBold.ttf": {
    "type": "font/ttf",
    "etag": "\"19268-POX1SxCVY+FzwesdzNPGliyRK2o\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 103016,
    "path": "../public/assets/font/barlow/Barlow-SemiBold.ttf"
  },
  "/assets/font/barlow/Barlow-SemiBoldItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"19f8c-4Jy8cnK5MsfKNk1FHovP2kVpCAw\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 106380,
    "path": "../public/assets/font/barlow/Barlow-SemiBoldItalic.ttf"
  },
  "/assets/font/barlow/Barlow-Thin.ttf": {
    "type": "font/ttf",
    "etag": "\"17824-dWd6z94CJ/i4oaOXE7MRZ0TVvew\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 96292,
    "path": "../public/assets/font/barlow/Barlow-Thin.ttf"
  },
  "/assets/font/barlow/Barlow-ThinItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"18da8-xVPOcO2AaiatNIET/uO94njGhrE\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 101800,
    "path": "../public/assets/font/barlow/Barlow-ThinItalic.ttf"
  },
  "/assets/font/barlow/OFL.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1119-0Nv26Iza0ItCcCIPDJL718n8HGs\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 4377,
    "path": "../public/assets/font/barlow/OFL.txt"
  },
  "/assets/img/icons/alert.svg": {
    "type": "image/svg+xml",
    "etag": "\"778-sN28mX1vdEl/iTxRg5PblidDUVs\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 1912,
    "path": "../public/assets/img/icons/alert.svg"
  },
  "/assets/img/icons/arrow-left.svg": {
    "type": "image/svg+xml",
    "etag": "\"95-4z8CfgZzvEN+kIq7facB4RYqkSg\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 149,
    "path": "../public/assets/img/icons/arrow-left.svg"
  },
  "/assets/img/icons/calendar.svg": {
    "type": "image/svg+xml",
    "etag": "\"3ab-YIfOJ6TAtSrKYcMTEeRehgiqvMg\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 939,
    "path": "../public/assets/img/icons/calendar.svg"
  },
  "/assets/img/icons/chart.svg": {
    "type": "image/svg+xml",
    "etag": "\"5f4-wE8QEYJnpYB7K42eWtRnEh1i2Sg\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 1524,
    "path": "../public/assets/img/icons/chart.svg"
  },
  "/assets/img/icons/coffee.png": {
    "type": "image/png",
    "etag": "\"216-gohXit1+nqV04ADM7UMZ4k9duqQ\"",
    "mtime": "2025-06-19T21:51:50.500Z",
    "size": 534,
    "path": "../public/assets/img/icons/coffee.png"
  },
  "/assets/img/icons/edit.png": {
    "type": "image/png",
    "etag": "\"27c-C1DHOBcpfIdUApapOEsZ6zqAw8g\"",
    "mtime": "2025-06-19T21:51:51.831Z",
    "size": 636,
    "path": "../public/assets/img/icons/edit.png"
  },
  "/assets/img/icons/edit.svg": {
    "type": "image/svg+xml",
    "etag": "\"518-34aTq3OXL9O5ahM9iRq7uX9TAMo\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 1304,
    "path": "../public/assets/img/icons/edit.svg"
  },
  "/assets/img/icons/entel.png": {
    "type": "image/png",
    "etag": "\"2ef-/LuCjMBYsMGEpUuuZs5JzQUQqLc\"",
    "mtime": "2025-06-19T21:51:55.874Z",
    "size": 751,
    "path": "../public/assets/img/icons/entel.png"
  },
  "/assets/img/icons/facebook.svg": {
    "type": "image/svg+xml",
    "etag": "\"463-VHNypjm/dOR2ffxDaYrltPjaUeo\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 1123,
    "path": "../public/assets/img/icons/facebook.svg"
  },
  "/assets/img/icons/favicon.svg": {
    "type": "image/svg+xml",
    "etag": "\"377-Wzzt4bqyDGqHCepzQwhxugRHaWk\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 887,
    "path": "../public/assets/img/icons/favicon.svg"
  },
  "/assets/img/icons/flag-peru.svg": {
    "type": "image/svg+xml",
    "etag": "\"13a-SB9en1xuXCLsCR0ajfAypP+jhBM\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 314,
    "path": "../public/assets/img/icons/flag-peru.svg"
  },
  "/assets/img/icons/handshake.png": {
    "type": "image/png",
    "etag": "\"300-XBb4dSO6hchnjvzWOf3yea5XERA\"",
    "mtime": "2025-06-19T21:51:57.290Z",
    "size": 768,
    "path": "../public/assets/img/icons/handshake.png"
  },
  "/assets/img/icons/heart.svg": {
    "type": "image/svg+xml",
    "etag": "\"83c-kxlDDPe01Jwt73sgy8ahqHyohn4\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 2108,
    "path": "../public/assets/img/icons/heart.svg"
  },
  "/assets/img/icons/icon_arrow.png": {
    "type": "image/png",
    "etag": "\"11d-Z76K4Rlni1/hijfRtwMr3eggOF8\"",
    "mtime": "2025-06-19T21:51:58.460Z",
    "size": 285,
    "path": "../public/assets/img/icons/icon_arrow.png"
  },
  "/assets/img/icons/instagram.svg": {
    "type": "image/svg+xml",
    "etag": "\"552-Di1FIzdVIVSMiqq5BfyvSym06AU\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 1362,
    "path": "../public/assets/img/icons/instagram.svg"
  },
  "/assets/img/icons/location.svg": {
    "type": "image/svg+xml",
    "etag": "\"69e-rAAmLmjoHdQ0bKxcWspXbwmkJsU\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 1694,
    "path": "../public/assets/img/icons/location.svg"
  },
  "/assets/img/icons/map.svg": {
    "type": "image/svg+xml",
    "etag": "\"440-rLPCbqqyrTmUnD4ff+unpkWMqx4\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 1088,
    "path": "../public/assets/img/icons/map.svg"
  },
  "/assets/img/icons/speaker.png": {
    "type": "image/png",
    "etag": "\"330-EHnh3h39KQsdRYvqJExkcdcD1SE\"",
    "mtime": "2025-06-19T21:51:59.516Z",
    "size": 816,
    "path": "../public/assets/img/icons/speaker.png"
  },
  "/assets/img/icons/time.svg": {
    "type": "image/svg+xml",
    "etag": "\"370-+xxQ1yoUn3zcWi+cbU4/MdoRQ9w\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 880,
    "path": "../public/assets/img/icons/time.svg"
  },
  "/assets/img/icons/twitter.svg": {
    "type": "image/svg+xml",
    "etag": "\"97d-uK7yzo6fduNZSL+SHlPexNA1N38\"",
    "mtime": "2025-03-31T16:39:43.000Z",
    "size": 2429,
    "path": "../public/assets/img/icons/twitter.svg"
  },
  "/assets/img/expositores/diego_silva.png": {
    "type": "image/png",
    "etag": "\"5764-RxGjuSvtCOGsRwrKEHXpbdSLjmA\"",
    "mtime": "2025-06-19T08:29:34.000Z",
    "size": 22372,
    "path": "../public/assets/img/expositores/diego_silva.png"
  },
  "/assets/img/expositores/guillermo_marquez.png": {
    "type": "image/png",
    "etag": "\"5d08-9Ri7ejsHm1+H1ihJ4xg0C+iLuDY\"",
    "mtime": "2025-06-19T08:29:34.000Z",
    "size": 23816,
    "path": "../public/assets/img/expositores/guillermo_marquez.png"
  },
  "/assets/img/expositores/ivan_portocarrero.png": {
    "type": "image/png",
    "etag": "\"5618-KIS//6BRFYFTlmI90p5N5gnhtcE\"",
    "mtime": "2025-06-19T08:29:34.000Z",
    "size": 22040,
    "path": "../public/assets/img/expositores/ivan_portocarrero.png"
  },
  "/assets/img/expositores/jose_antonio_martinez.png": {
    "type": "image/png",
    "etag": "\"5a74-owWyqsPIaZbG1NonYB7a6NSy5ho\"",
    "mtime": "2025-06-19T08:29:34.000Z",
    "size": 23156,
    "path": "../public/assets/img/expositores/jose_antonio_martinez.png"
  },
  "/assets/img/expositores/maurice_falcon.png": {
    "type": "image/png",
    "etag": "\"53ae-ScClEkDAqiKC6bmAZoAo3WJE4XI\"",
    "mtime": "2025-06-19T08:29:34.000Z",
    "size": 21422,
    "path": "../public/assets/img/expositores/maurice_falcon.png"
  },
  "/assets/img/expositores/raul_campos.png": {
    "type": "image/png",
    "etag": "\"5971-NRb2eazHjGU6F+lpRhXGSSCK58A\"",
    "mtime": "2025-06-19T08:29:34.000Z",
    "size": 22897,
    "path": "../public/assets/img/expositores/raul_campos.png"
  },
  "/assets/img/expositores/tomas_asmat.png": {
    "type": "image/png",
    "etag": "\"5384-go/rtk2ra/Ya9ahVV+6LO4BH8qo\"",
    "mtime": "2025-06-19T08:29:34.000Z",
    "size": 21380,
    "path": "../public/assets/img/expositores/tomas_asmat.png"
  },
  "/assets/img/marcas/acronis.png": {
    "type": "image/png",
    "etag": "\"5e4-yD/lDkEZb/OW9pTPcKGylRyZ/jo\"",
    "mtime": "2025-06-20T11:53:20.772Z",
    "size": 1508,
    "path": "../public/assets/img/marcas/acronis.png"
  },
  "/assets/img/marcas/aws.png": {
    "type": "image/png",
    "etag": "\"e24-SQ3Y6tb2EWf9BUodP9rXLt5mD6M\"",
    "mtime": "2025-06-20T11:53:22.764Z",
    "size": 3620,
    "path": "../public/assets/img/marcas/aws.png"
  },
  "/assets/img/marcas/fortinet.png": {
    "type": "image/png",
    "etag": "\"36a-n5VUAnF5g3r9KcSB7Rp3Tl2kGI4\"",
    "mtime": "2025-06-20T11:53:24.197Z",
    "size": 874,
    "path": "../public/assets/img/marcas/fortinet.png"
  },
  "/assets/img/marcas/honor.png": {
    "type": "image/png",
    "etag": "\"56a-luBWCLhTskXKW/itLFqzpgn/zqg\"",
    "mtime": "2025-06-20T11:53:25.103Z",
    "size": 1386,
    "path": "../public/assets/img/marcas/honor.png"
  },
  "/assets/img/marcas/infobip.png": {
    "type": "image/png",
    "etag": "\"127e-elUqlBvCRvOY/r8WXyWnWNGT24s\"",
    "mtime": "2025-06-20T11:53:26.498Z",
    "size": 4734,
    "path": "../public/assets/img/marcas/infobip.png"
  },
  "/assets/img/marcas/microsoft.png": {
    "type": "image/png",
    "etag": "\"1218-9s8hnRTswvmnn14X8CDNEElvEhs\"",
    "mtime": "2025-06-20T11:53:28.064Z",
    "size": 4632,
    "path": "../public/assets/img/marcas/microsoft.png"
  },
  "/assets/img/marcas/samsung.png": {
    "type": "image/png",
    "etag": "\"17a6-LnD6rmdnj5HLuuOo3vaSplCdDqI\"",
    "mtime": "2025-06-20T11:53:29.900Z",
    "size": 6054,
    "path": "../public/assets/img/marcas/samsung.png"
  },
  "/assets/img/marcas/soti.png": {
    "type": "image/png",
    "etag": "\"993-0JRrTCt5TDvogRuP1suuppwPgZI\"",
    "mtime": "2025-06-20T11:53:31.619Z",
    "size": 2451,
    "path": "../public/assets/img/marcas/soti.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_ONocuN = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_ONocuN, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_ONocuN, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
