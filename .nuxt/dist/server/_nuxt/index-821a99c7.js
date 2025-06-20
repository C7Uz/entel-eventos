import { _ as __nuxt_component_0 } from "./nuxt-link-691ee40a.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import "swiper";
import { _ as _export_sfc, u as useSetting } from "../server.mjs";
import { u as useHome } from "./home.module-164501b7.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-edeb8654.js";
import { _ as _imports_1 } from "./empower-logo-8b6cfdfb.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "./useApi-1052a4e0.js";
import "axios";
const index_vue_vue_type_style_index_0_scoped_fd328c35_lang = "";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))} data-v-fd328c35><section class="relative h-screen fondo-hero" data-v-fd328c35><div class="container relative isolate h-full w-full alinear-middle flex items-center justify-left" data-v-fd328c35><div class="relative max-w-7xl px-6 py-20" data-v-fd328c35><div class="grid md:grid-cols-1 gap-36 items-center" data-v-fd328c35><div class="backgraund-blur p-10 rounded-xl shadow-lg" data-v-fd328c35><div class="w-full pb-16 md:pb-8" data-v-fd328c35><img class="w-48"${ssrRenderAttr("src", _imports_0)} alt="" data-v-fd328c35></div><div class="flex flex-col" data-v-fd328c35><h1 class="text-white font-normal text-6xl" data-v-fd328c35>Conecta con la transformación empresarial</h1><p class="text-white font-normal text-1xl flex flex-col mt-5" data-v-fd328c35><span class="font-regular leading-tight" data-v-fd328c35>Conferencias exclusivas sobre innovación, tecnología y estrategia para llevar tu negocio al siguiente nivel.</span></p></div></div></div></div></div></section><main class="bg-white py-12" id="events2" data-v-fd328c35><div class="container hidden md:flex flex-wrap sm-pr-0" style="${ssrRenderStyle({ "padding-right": ".5rem" })}" data-v-fd328c35><div class="min-w-50 w-1/2 mt-6" data-v-fd328c35><div class="flex pr-4" data-v-fd328c35><article class="items-center justify-center fondo-summit min-h-128 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl" data-v-fd328c35><div class="items-center justify-center" data-v-fd328c35><img${ssrRenderAttr("src", _imports_1)} alt="Empower Logo" class="logo-entel inline-block h-10 mr-2" data-v-fd328c35><div class="flex items-center justify-center gap-x-2 text-primary mt-2" data-v-fd328c35>`);
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
  _push(`</div></div></article></div></div><div class="min-w-50 w-1/2 mt-6" data-v-fd328c35><div class="flex pr-4" data-v-fd328c35><article class="wdt-t items-center justify-center fondo-rutas min-h-128 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl" data-v-fd328c35><div class="items-center justify-center m-w-300" data-v-fd328c35><h2 class="text-entel-ruta" data-v-fd328c35>La Ruta Entel<br data-v-fd328c35>Empresas</h2><br data-v-fd328c35><p class="sub-text-entel-ruta" data-v-fd328c35>¡Contenido de valor para potenciar tu empresa!</p><div class="flex items-center justify-center gap-x-2 text-primary mt-2" data-v-fd328c35>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
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
  _push(`</div></div></article></div></div></div><div class="container md:hidden sm-pr-0 sm-pl-0" style="${ssrRenderStyle({ "padding-right": ".5rem" })}" data-v-fd328c35><div class="flex flex-row gap-x-8 mt-6" data-v-fd328c35><div class="w-full relative overflow-hidden" data-v-fd328c35><div class="swiper-container py-4" data-v-fd328c35><div class="swiper-wrapper overflow-x-scroll md:overflow-visible pb-5 gap-x-6" data-v-fd328c35><div style="${ssrRenderStyle({ "width": "80vw" })}" class="swiper-slide" data-v-fd328c35><article class="items-center justify-center fondo-summit min-h-64 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl" data-v-fd328c35><div class="items-center justify-center" data-v-fd328c35><img${ssrRenderAttr("src", _imports_1)} alt="Empower Logo" class="logo-entel inline-block h-10 mr-2" data-v-fd328c35><div class="flex items-center justify-center gap-x-2 text-primary mt-2" data-v-fd328c35>`);
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
  _push(`</div></div></article></div><div style="${ssrRenderStyle({ "width": "80vw" })}" class="swiper-slide" data-v-fd328c35><article class="items-center justify-center fondo-rutas min-h-64 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl" data-v-fd328c35><div class="items-center justify-center" data-v-fd328c35><h2 class="text-entel-ruta" data-v-fd328c35>La Ruta Entel<br data-v-fd328c35>Empresas</h2><p class="sub-text-entel-ruta" data-v-fd328c35>¡Contenido de valor para potenciar tu empresa!</p><div class="flex items-center justify-center gap-x-2 text-primary mt-2" data-v-fd328c35>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
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
  _push(`</div></div></article></div></div><div class="swiper-pagination" data-v-fd328c35></div></div></div></div></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fd328c35"]]);
export {
  index as default
};
//# sourceMappingURL=index-821a99c7.js.map
