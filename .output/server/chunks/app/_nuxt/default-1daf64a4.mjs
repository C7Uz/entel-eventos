import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-691ee40a.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-edeb8654.mjs';
import { _ as _imports_2 } from './edit-c6270b53.mjs';
import { _ as _export_sfc, u as useSetting, b as useHead } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_1 = "" + buildAssetsURL("logo-color.6e30c63d.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const settingModule = useSetting();
    useHead({
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-4EQK5P5E6X",
          async: true
        },
        {
          src: "https://p.teads.tv/teads-fellow.js",
          async: true
        }
      ]
    });
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["w-full h-full", [unref(settingModule).settings.theme]]
      }, _attrs))} data-v-2e5655f5>`);
      if (unref(settingModule).settings.showHeader) {
        _push(`<header class="container-fluid absolute inset-x-0 top-0 left-0 z-50 h-header transition duration-3 fixed-header" data-v-2e5655f5><div class="h-full fondo-navbar" data-v-2e5655f5><nav class="flex items-center justify-between py-2 h-full" aria-label="Global" data-v-2e5655f5><div class="flex lg:flex-1" data-v-2e5655f5>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "-m-1.5 p-1.5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="h-8 w-auto logo-white"${ssrRenderAttr("src", _imports_0)} alt="" data-v-2e5655f5${_scopeId}><img class="h-8 w-auto logo-color"${ssrRenderAttr("src", _imports_1)} alt="" data-v-2e5655f5${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-8 w-auto logo-white",
                  src: _imports_0,
                  alt: ""
                }),
                createVNode("img", {
                  class: "h-8 w-auto logo-color",
                  src: _imports_1,
                  alt: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="hidden md:flex" data-v-2e5655f5>`);
        if (unref(settingModule).settings.eventId) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/event/" + unref(settingModule).settings.eventId + "/inscription",
            type: "button",
            class: "w-max bg-primary text-white text-center font-medium py-2 px-4 rounded-full text-base flex items-center justify-center hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img class="w-4 mr-2"${ssrRenderAttr("src", _imports_2)} alt="" data-v-2e5655f5${_scopeId}> Inscribirme `);
              } else {
                return [
                  createVNode("img", {
                    class: "w-4 mr-2",
                    src: _imports_2,
                    alt: ""
                  }),
                  createTextVNode(" Inscribirme ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></nav></div></header>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (unref(settingModule).settings.showFooter) {
        _push(`<footer class="container-fluid w-full h-footer bg-gray-light" data-v-2e5655f5><div class="container h-full" data-v-2e5655f5><div class="w-full h-full flex items-center justify-between my-auto" data-v-2e5655f5><span class="font-normal text-xs text-dark" data-v-2e5655f5>Copyright ${ssrInterpolate(unref(currentYear))}. Todos los derechos reservados.</span><a href="#" class="-m-1.5 p-1.5" data-v-2e5655f5><img class="h-8 w-auto"${ssrRenderAttr("src", _imports_1)} alt="" data-v-2e5655f5></a></div></div></footer>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2e5655f5"]]);

export { _default as default };
//# sourceMappingURL=default-1daf64a4.mjs.map
