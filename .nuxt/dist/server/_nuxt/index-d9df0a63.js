import { _ as __nuxt_component_0 } from "./nuxt-link-691ee40a.js";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import "hookable";
import { u as useSetting, a as useRoute, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { u as useEvent } from "./event.module-2dec8464.js";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "./useApi-f645acd5.js";
import "axios";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSetting();
    useEvent();
    useRoute();
    const contentPage = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))} data-v-cbf593c6>`);
      if (unref(contentPage)) {
        _push(`<section class="relative h-screen bg-thanks-empower" data-v-cbf593c6><div class="relative isolate pt-14 h-full w-full" data-v-cbf593c6><div class="container w-full h-full flex items-center pt-16" data-v-cbf593c6><div class="flex flex-col gap-x-4 md:flex-row items-end w-full" data-v-cbf593c6><div class="flex flex-col w-full md:w-1/4" data-v-cbf593c6><h1 class="text-white font-regular text-4-5xl" data-v-cbf593c6>¡Gracias por registrarte en Empower!</h1><p class="text-white font-regular text-1xl flex flex-col mt-5" data-v-cbf593c6>Síguenos en nuestras redes sociales para más información.</p><p class="text-white font-regular text-lg flex flex-col mt-5" data-v-cbf593c6> ¡Te esperamos! </p><p class="text-white font-regular text-1xl flex flex-col mt-5" data-v-cbf593c6></p><div class="w-full gap-x-4 flex justify-center md:justify-start mb-6" data-v-cbf593c6><!--[-->`);
        ssrRenderList(unref(contentPage).social, (social) => {
          _push(`<span data-v-cbf593c6><a class="w-12 h-12 bg-white/30 text-white text-center font-regular rounded-full text-l flex items-center justify-center"${ssrRenderAttr("href", social.url)} target="_blank"${ssrRenderAttr("title", social.network)} data-v-cbf593c6><img${ssrRenderAttr("src", social.icon)} alt="" class="w-7" data-v-cbf593c6></a></span>`);
        });
        _push(`<!--]--></div><p class="text-white font-regular text-1xl flex flex-col mt-5" data-v-cbf593c6></p><div class="w-full gap-x-4 flex justify-center md:justify-start mb-6" data-v-cbf593c6>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "w-max text-white text-center font-medium text-base py-2.5 px-16 hover:text-white rounded-full text-l flex items-center justify-center bg-primary hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-presse"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Volver al inicio `);
            } else {
              return [
                createTextVNode(" Volver al inicio ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_cbf593c6_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/event/empower/thanks/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cbf593c6"]]);
export {
  index as default
};
//# sourceMappingURL=index-d9df0a63.js.map
