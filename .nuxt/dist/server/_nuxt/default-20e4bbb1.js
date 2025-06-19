import { _ as __nuxt_component_0 } from "./nuxt-link-691ee40a.js";
import "./index-e12b288f.js";
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-edeb8654.js";
import { _ as _imports_2 } from "./edit-c6270b53.js";
import { u as useSetting, b as useHead, _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "h3";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "defu";
const _imports_1 = "" + __buildAssetsURL("logo-color.6e30c63d.svg");
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
      }, _attrs))} data-v-40bcb77d>`);
      if (unref(settingModule).settings.showHeader) {
        _push(`<header class="absolute inset-x-0 top-0 left-0 z-50 h-header transition duration-3 fixed-header" data-v-40bcb77d><div class="container-fluid h-full" data-v-40bcb77d><nav class="flex items-center justify-between py-2 h-full" aria-label="Global" data-v-40bcb77d><div class="flex lg:flex-1" data-v-40bcb77d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "-m-1.5 p-1.5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="h-8 w-auto logo-white"${ssrRenderAttr("src", _imports_0)} alt="" data-v-40bcb77d${_scopeId}><img class="h-8 w-auto logo-color"${ssrRenderAttr("src", _imports_1)} alt="" data-v-40bcb77d${_scopeId}>`);
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
        _push(`</div><div class="hidden md:flex" data-v-40bcb77d>`);
        if (unref(settingModule).settings.eventId) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/event/" + unref(settingModule).settings.eventId + "/inscription",
            type: "button",
            class: "w-max bg-primary text-white text-center font-medium py-2 px-4 rounded-full text-base flex items-center justify-center hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img class="w-4 mr-2"${ssrRenderAttr("src", _imports_2)} alt="" data-v-40bcb77d${_scopeId}> Inscribirme `);
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
        _push(`<footer class="w-full h-footer" data-v-40bcb77d><div class="container-fluid w-full h-full bg-gray-light" data-v-40bcb77d><div class="w-full h-full flex items-center justify-between my-auto" data-v-40bcb77d><span class="font-normal text-xs text-dark" data-v-40bcb77d>Copyright ${ssrInterpolate(unref(currentYear))}. Todos los derechos reservados.</span><a href="#" class="-m-1.5 p-1.5" data-v-40bcb77d><img class="h-8 w-auto"${ssrRenderAttr("src", _imports_1)} alt="" data-v-40bcb77d></a></div></div></footer>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const default_vue_vue_type_style_index_0_scoped_40bcb77d_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-40bcb77d"]]);
export {
  _default as default
};
//# sourceMappingURL=default-20e4bbb1.js.map
