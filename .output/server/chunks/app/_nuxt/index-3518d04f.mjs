import { _ as __nuxt_component_0 } from './nuxt-link-691ee40a.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createTextVNode } from 'vue';
import { _ as _export_sfc, u as useSetting } from '../server.mjs';
import { u as useHome } from './home.module-166a738e.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-edeb8654.mjs';
import { _ as _imports_1 } from './empower-logo-8b6cfdfb.mjs';
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
import './useApi-f645acd5.mjs';
import 'axios';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  setup() {
    const swiper = ref(null);
    useSetting();
    const homeModule = useHome();
    const background = ref(null);
    const findHome = async () => {
      await homeModule.find();
      background.value = homeModule.header ? homeModule.header.background_desktop : null;
    };
    return {
      swiper,
      findHome,
      background,
      homeModule
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))} data-v-8d8b3699><section class="relative h-screen fondo-hero" data-v-8d8b3699><div class="container relative isolate h-full w-full alinear-middle flex items-center justify-left" data-v-8d8b3699><div class="relative max-w-7xl px-6 py-20" data-v-8d8b3699><div class="grid md:grid-cols-1 gap-36 items-center" data-v-8d8b3699><div class="backgraund-blur p-10 rounded-xl shadow-lg" data-v-8d8b3699><div class="w-full pb-16 md:pb-8" data-v-8d8b3699><img class="w-48"${ssrRenderAttr("src", _imports_0)} alt="" data-v-8d8b3699></div><div class="flex flex-col" data-v-8d8b3699><h1 class="text-white font-normal text-6xl" data-v-8d8b3699>Conecta con la transformaci\xF3n empresarial</h1><p class="text-white font-normal text-1xl flex flex-col mt-5" data-v-8d8b3699><span class="font-regular leading-tight" data-v-8d8b3699>Conferencias exclusivas sobre innovaci\xF3n, tecnolog\xEDa y estrategia para llevar tu negocio al siguiente nivel.</span></p></div></div></div></div></div></section><main class="bg-white py-12" id="events2" data-v-8d8b3699><div class="container hidden md:flex flex-wrap sm-pr-0" style="${ssrRenderStyle({ "padding-right": ".5rem" })}" data-v-8d8b3699><div class="min-w-50 w-1/2 mt-6" data-v-8d8b3699><div class="flex pr-4" data-v-8d8b3699><article class="items-center justify-center fondo-summit min-h-128 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl" data-v-8d8b3699><div class="items-center justify-center" data-v-8d8b3699><img${ssrRenderAttr("src", _imports_1)} alt="Empower Logo" class="logo-entel inline-block h-10 mr-2" data-v-8d8b3699><div class="flex items-center justify-center gap-x-2 text-primary mt-2" data-v-8d8b3699>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/event/empower",
    class: "w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap md:width-peque-button max-w-full hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Ver evento `);
      } else {
        return [
          createTextVNode(" Ver evento ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></article></div></div><div class="min-w-50 w-1/2 mt-6" data-v-8d8b3699><div class="flex pr-4" data-v-8d8b3699><article class="wdt-t items-center justify-center fondo-rutas min-h-128 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl" data-v-8d8b3699><div class="items-center justify-center m-w-300" data-v-8d8b3699><h2 class="text-entel-ruta" data-v-8d8b3699>La Ruta Entel<br data-v-8d8b3699>Empresas</h2><br data-v-8d8b3699><p class="sub-text-entel-ruta" data-v-8d8b3699>\xA1Contenido de valor para potenciar tu empresa!</p><div class="flex items-center justify-center gap-x-2 text-primary mt-2" data-v-8d8b3699>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/laruta",
    class: "w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap md:width-peque-button max-w-full hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Ver fechas `);
      } else {
        return [
          createTextVNode(" Ver fechas ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></article></div></div></div><div class="container md:hidden sm-pr-0 sm-pl-0" style="${ssrRenderStyle({ "padding-right": ".5rem" })}" data-v-8d8b3699><div class="flex flex-row gap-x-8 mt-6" data-v-8d8b3699><div class="w-full relative overflow-hidden" data-v-8d8b3699><div class="swiper-container py-4" data-v-8d8b3699><div class="swiper-wrapper overflow-x-scroll md:overflow-visible pb-5 gap-x-6" data-v-8d8b3699><div style="${ssrRenderStyle({ "width": "80vw" })}" class="swiper-slide" data-v-8d8b3699><article class="items-center justify-center fondo-summit min-h-64 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl" data-v-8d8b3699><div class="items-center justify-center" data-v-8d8b3699><img${ssrRenderAttr("src", _imports_1)} alt="Empower Logo" class="logo-entel inline-block h-10 mr-2" data-v-8d8b3699><div class="flex items-center justify-center gap-x-2 text-primary mt-2" data-v-8d8b3699>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/event/empower",
    class: "w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap md:width-peque-button max-w-full hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Ver evento `);
      } else {
        return [
          createTextVNode(" Ver evento ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></article></div><div style="${ssrRenderStyle({ "width": "80vw" })}" class="swiper-slide" data-v-8d8b3699><article class="items-center justify-center fondo-rutas min-h-64 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl" data-v-8d8b3699><div class="items-center justify-center" data-v-8d8b3699><h2 class="text-entel-ruta" data-v-8d8b3699>La Ruta Entel<br data-v-8d8b3699>Empresas</h2><p class="sub-text-entel-ruta" data-v-8d8b3699>\xA1Contenido de valor para potenciar tu empresa!</p><div class="flex items-center justify-center gap-x-2 text-primary mt-2" data-v-8d8b3699>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/laruta",
    class: "w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap md:width-peque-button max-w-full hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Ver fechas `);
      } else {
        return [
          createTextVNode(" Ver fechas ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></article></div></div><div class="swiper-pagination" data-v-8d8b3699></div></div></div></div></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8d8b3699"]]);

export { index as default };
//# sourceMappingURL=index-3518d04f.mjs.map
