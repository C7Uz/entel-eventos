import { _ as __nuxt_component_0 } from './nuxt-link-691ee40a.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { _ as _export_sfc, u as useSetting, a as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { u as useEvent } from './event.module-bd54a24e.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import './useApi-1052a4e0.mjs';
import 'axios';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "thanks",
  __ssrInlineRender: true,
  setup(__props) {
    useSetting();
    useEvent();
    useRoute();
    const contentPage = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))} data-v-0d2b7f6d>`);
      if (unref(contentPage)) {
        _push(`<section class="relative h-screen" style="${ssrRenderStyle([{ background: "linear-gradient(0deg, rgba(0, 17, 92, 0.5), rgba(0, 17, 92, 0.5)), url(" + unref(contentPage).page.background + ")" }, { "background-repeat": "no-repeat", "background-size": "cover", "background-position": "center" }])}" data-v-0d2b7f6d><div class="relative isolate pt-14 h-full w-full" data-v-0d2b7f6d><div class="container w-full h-full flex items-center pt-16" data-v-0d2b7f6d><div class="flex flex-col gap-x-4 md:flex-row items-end w-full" data-v-0d2b7f6d><div class="flex flex-col w-full md:w-1/3" data-v-0d2b7f6d><h1 class="text-white font-regular text-4-5xl" data-v-0d2b7f6d>${ssrInterpolate(unref(contentPage).page.title)}</h1><p class="text-white font-regular text-1xl flex flex-col mt-5" data-v-0d2b7f6d>${ssrInterpolate(unref(contentPage).page.subtitle)}</p></div><div class="flex flex-col items-center md:items-start md:justify-start w-full md:w-1/3 mt-8 md:mt-0" data-v-0d2b7f6d><div class="w-full gap-x-4 flex justify-center md:justify-start mb-6" data-v-0d2b7f6d><!--[-->`);
        ssrRenderList(unref(contentPage).social, (social) => {
          _push(`<span data-v-0d2b7f6d><a class="w-12 h-12 bg-white/30 text-white text-center font-regular rounded-full text-l flex items-center justify-center"${ssrRenderAttr("href", social.url)} target="_blank"${ssrRenderAttr("title", social.network)} data-v-0d2b7f6d><img${ssrRenderAttr("src", social.icon)} alt="" class="w-7" data-v-0d2b7f6d></a></span>`);
        });
        _push(`<!--]--></div>`);
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
        _push(`</div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/thanks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thanks = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d2b7f6d"]]);

export { thanks as default };
//# sourceMappingURL=thanks-91ae4070.mjs.map
