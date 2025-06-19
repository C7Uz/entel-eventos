import { _ as __nuxt_component_0 } from "./nuxt-link-691ee40a.js";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { u as useFormatDate } from "./useFormatDate-5a0135c5.js";
import "swiper";
import { d as defineStore, _ as _export_sfc, u as useSetting } from "../server.mjs";
import { p as provideApi } from "./useApi-aa853999.js";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-edeb8654.js";
import { _ as _imports_1, a as _imports_2 } from "./location-cb919150.js";
import "ufo";
import "hookable";
import "moment";
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
import "axios";
function useEllipsis(value, length = 75) {
  let newVal = "";
  if (value) {
    if (value.length > length) {
      newVal = value.substring(0, length) + "...";
    } else {
      newVal = value;
    }
  }
  return newVal;
}
const api = provideApi();
const home = async () => {
  try {
    const { data } = await api.get("/api/home/");
    return data || null;
  } catch (error) {
    return Promise.reject(error);
  }
};
const homeService = {
  namespaced: true,
  home
};
const useHome = defineStore("home", {
  state: () => ({
    header: null,
    events: []
  }),
  actions: {
    setHeader(value) {
      this.header = value;
    },
    setEvents(value) {
      this.events = value;
    },
    async find() {
      try {
        this.setHeader(null);
        this.setEvents([]);
        const response = await homeService.home();
        this.setHeader(response.data && response.data.header ? response.data.header : null);
        this.setEvents(response.data && response.data.events ? response.data.events : []);
        return { ok: true, response };
      } catch (error) {
        return { ok: false, error: (error == null ? void 0 : error.response) || "Error" };
      }
    }
  },
  getters: {}
});
const index_vue_vue_type_style_index_0_scoped_c1e1b26b_lang = "";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))} data-v-c1e1b26b><section class="relative h-screen" style="${ssrRenderStyle([{ background: "linear-gradient(0deg, rgba(0, 17, 92, 0.5), rgba(0, 17, 92, 0.5)), url(" + _ctx.background + ")" }, { "background-repeat": "no-repeat", "background-size": "cover", "background-position": "center" }])}" data-v-c1e1b26b><div class="relative isolate h-full w-full" data-v-c1e1b26b><div class="container w-full h-full flex flex-col justify-center py-16" data-v-c1e1b26b><div class="w-full pb-16 md:pb-32" data-v-c1e1b26b><img class="w-44"${ssrRenderAttr("src", _imports_0)} alt="" data-v-c1e1b26b></div>`);
  if (_ctx.homeModule.header) {
    _push(`<div class="flex flex-col md:w-1/2" data-v-c1e1b26b><h1 class="text-white font-normal text-6xl" data-v-c1e1b26b>${ssrInterpolate(_ctx.homeModule.header.title)}</h1><p class="text-white font-normal text-1xl flex flex-col mt-5" data-v-c1e1b26b><span class="font-medium" data-v-c1e1b26b>${ssrInterpolate(_ctx.homeModule.header.subtitle)}</span><span class="font-regular leading-tight" data-v-c1e1b26b>${ssrInterpolate(_ctx.homeModule.header.description)}</span></p><div class="flex w-full justify-center md:justify-start" data-v-c1e1b26b><a type="button" class="buttonEffect w-max bg-primary text-white text-center font-medium py-2.5 px-16 hover:text-white mt-8 rounded-full text-base flex items-center justify-center hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed width-default-button" data-v-c1e1b26b>${ssrInterpolate(_ctx.homeModule.header.btn_title)}</a></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></section><main class="bg-white py-12" id="events" data-v-c1e1b26b><div class="container flex flex-col" data-v-c1e1b26b><h2 class="text-black font-medium text-2xl lg:text-3-5xl" data-v-c1e1b26b>Próximos eventos</h2></div><div class="container hidden md:flex flex-wrap sm-pr-0" style="${ssrRenderStyle({ "padding-right": ".5rem" })}" data-v-c1e1b26b>`);
  if (_ctx.homeModule.events) {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.homeModule.events, (event, iEvent) => {
      _push(`<div class="min-w-50 w-1/2 mt-6" data-v-c1e1b26b><div class="${ssrRenderClass([{ "pl-4": iEvent % 2 > 0, "pr-4": iEvent % 2 == 0 }, "flex"])}" data-v-c1e1b26b><article class="min-h-64 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl" data-v-c1e1b26b><span class="bg-secondary py-1 px-2 absolute top-lg left-lg left-2 rounded-lg z-10 text-white font-bold text-base" data-v-c1e1b26b><span class="tracking-tighter" data-v-c1e1b26b>${ssrInterpolate(event.tag)}</span></span><div class="w-full relative overflow-hidden" data-v-c1e1b26b><img${ssrRenderAttr("src", event.image)} alt="" class="object-cover object-center w-full h-full" data-v-c1e1b26b></div><div class="h-full w-full" data-v-c1e1b26b><div class="h-full w-full flex flex-col justify-between p-7" data-v-c1e1b26b><div class="w-full" data-v-c1e1b26b><div class="w-full flex flex-col items-start" data-v-c1e1b26b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-1xl font-medium leading-6 text-primary text-left paragraph-cut min-h-title",
        to: "/event/" + event.slug
      }, null, _parent));
      _push(`<p class="m-0 mt-2 font-regular text-left text-base h-12 text-ellipsis overflow-hidden paragraph-cut" data-v-c1e1b26b>${ssrInterpolate(event.summary)}</p></div><div class="flex items-center gap-x-2 gap-y-2 text-xs mt-4 flex-wrap" data-v-c1e1b26b><span class="md:w-auto rounded-lg bg-gray-light text-black leading-none font-medium flex justify-center items-center p-2 text-base-s" data-v-c1e1b26b><img${ssrRenderAttr("src", _imports_1)} alt="" class="mr-2" data-v-c1e1b26b> ${ssrInterpolate(("useFormatDate" in _ctx ? _ctx.useFormatDate : unref(useFormatDate))(event.date))}</span><span class="md:w-auto rounded-lg bg-gray-light text-black leading-none font-medium flex justify-center items-center p-2 text-base-s text-left" data-v-c1e1b26b><img${ssrRenderAttr("src", _imports_2)} alt="" class="mr-2" data-v-c1e1b26b> ${ssrInterpolate(event.place)}</span></div></div><div class="flex items-center gap-x-2 text-primary mt-2" data-v-c1e1b26b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/event/" + event.slug,
        class: "w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap md:width-default-button max-w-full hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Conocer más `);
          } else {
            return [
              createTextVNode(" Conocer más ")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div></div></article></div></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="container md:hidden sm-pr-0 sm-pl-0" style="${ssrRenderStyle({ "padding-right": ".5rem" })}" data-v-c1e1b26b><div class="flex flex-col gap-x-8 mt-6" data-v-c1e1b26b><div class="w-full relative overflow-hidden" data-v-c1e1b26b><div class="swiper-container py-4" data-v-c1e1b26b><div class="swiper-wrapper overflow-x-scroll md:overflow-visible pb-5 gap-x-6" data-v-c1e1b26b>`);
  if (_ctx.homeModule.events) {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.homeModule.events, (event, iEvent) => {
      _push(`<div style="${ssrRenderStyle({ "width": "80vw" })}" class="${ssrRenderClass([{ "mr-4": iEvent == _ctx.homeModule.events.length - 1, "ml-4": iEvent == 0 }, "swiper-slide"])}" data-v-c1e1b26b><article class="min-h-64 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl" data-v-c1e1b26b><span class="bg-secondary py-1 px-2 absolute top-lg left-lg left-2 rounded-lg z-10 text-white font-bold text-base" data-v-c1e1b26b><span class="tracking-tighter" data-v-c1e1b26b>${ssrInterpolate(event.tag)}</span></span><div class="w-full relative overflow-hidden" data-v-c1e1b26b><img${ssrRenderAttr("src", event.image)} alt="" class="object-cover object-center w-full h-full" data-v-c1e1b26b></div><div class="h-full w-full" data-v-c1e1b26b><div class="h-full w-full flex flex-col justify-between p-7" data-v-c1e1b26b><div class="w-full" data-v-c1e1b26b><div class="w-full flex flex-col items-start" data-v-c1e1b26b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-1xl font-medium leading-6 text-primary text-left",
        to: "/event/" + event.slug
      }, null, _parent));
      _push(`<p class="m-0 mt-2 font-regular text-left text-base h-12 text-ellipsis overflow-hidden" data-v-c1e1b26b>${ssrInterpolate(("useEllipsis" in _ctx ? _ctx.useEllipsis : unref(useEllipsis))(event.summary))}</p></div><div class="flex items-center gap-x-2 gap-y-2 text-xs mt-4 flex-wrap" data-v-c1e1b26b><span class="md:w-auto rounded-lg bg-gray-light text-black leading-none font-medium flex justify-center items-center p-2 text-base-s" data-v-c1e1b26b><img${ssrRenderAttr("src", _imports_1)} alt="" class="mr-2" data-v-c1e1b26b> ${ssrInterpolate(("useFormatDate" in _ctx ? _ctx.useFormatDate : unref(useFormatDate))(event.date))}</span><span class="md:w-auto rounded-lg bg-gray-light text-black leading-none font-medium flex justify-center items-center p-2 text-base-s text-left" data-v-c1e1b26b><img${ssrRenderAttr("src", _imports_2)} alt="" class="mr-2" data-v-c1e1b26b> ${ssrInterpolate(event.place)}</span></div></div><div class="flex items-center gap-x-2 text-primary mt-2" data-v-c1e1b26b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/event/" + event.slug,
        class: "w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap md:width-default-button max-w-full hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Conocer más `);
          } else {
            return [
              createTextVNode(" Conocer más ")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div></div></article></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="swiper-pagination" data-v-c1e1b26b></div></div></div></div></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c1e1b26b"]]);
export {
  index as default
};
//# sourceMappingURL=index-585f402f.js.map
