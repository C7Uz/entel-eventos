import { _ as __nuxt_component_0 } from "./nuxt-link-691ee40a.js";
import { defineComponent, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext } from "vue";
import "hookable";
import { u as useSetting, a as useRoute, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { u as useFormatDate } from "./useFormatDate-5a0135c5.js";
import { u as useFormatDateDay, _ as _imports_1$1, a as useFormatTime } from "./time-50546519.js";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_1, a as _imports_2 } from "./location-cb919150.js";
import { _ as _imports_2$1 } from "./edit-c6270b53.js";
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
import "moment";
import "./useApi-f645acd5.js";
import "axios";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSetting();
    const eventModule = useEvent();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(eventModule).event) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))} data-v-3cbf6e7e><section class="relative h-screen" style="${ssrRenderStyle([{ background: "linear-gradient(0deg, rgba(0, 17, 92, 0.5), rgba(0, 17, 92, 0.5)), url(" + unref(eventModule).event.image + ")" }, { "background-repeat": "no-repeat", "background-size": "cover", "background-position": "center" }])}" data-v-3cbf6e7e><div class="relative isolate pt-14 h-full w-full" data-v-3cbf6e7e><div class="container-fluid pt-16 pb-8" data-v-3cbf6e7e>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "w-12 h-12 bg-primary-black text-white text-center font-regular rounded-full text-l flex items-center justify-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="w-8" data-v-3cbf6e7e${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" data-v-3cbf6e7e${_scopeId}><title data-v-3cbf6e7e${_scopeId}>arrow-left</title><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" data-v-3cbf6e7e${_scopeId}></path></svg></span>`);
            } else {
              return [
                createVNode("span", { class: "w-8" }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "white"
                  }, [
                    createVNode("title", null, "arrow-left"),
                    createVNode("path", { d: "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" })
                  ]))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="container w-full h-full flex flex-col justify-start md:justify-center items-start md:items-start" data-v-3cbf6e7e><div class="flex flex-col w-full md:w-1/2" data-v-3cbf6e7e><span class="w-max bg-secondary py-1 px-2 rounded-lg z-10 text-white text-base-s font-medium" data-v-3cbf6e7e><span class="tracking-tighter" data-v-3cbf6e7e>${ssrInterpolate(unref(eventModule).event.tag)} - </span><span class="font-bold" data-v-3cbf6e7e>${ssrInterpolate(("useFormatDate" in _ctx ? _ctx.useFormatDate : unref(useFormatDate))(unref(eventModule).event.date))}</span></span><h1 class="text-white font-normal text-4-5xl mt-5" data-v-3cbf6e7e>${ssrInterpolate(unref(eventModule).event.title)}</h1><p class="text-white font-regular text-1xl flex flex-col mt-5" data-v-3cbf6e7e><span class="text-1lg leading-tight" data-v-3cbf6e7e>${ssrInterpolate(unref(eventModule).event.description)}</span></p></div><div class="w-full shake-vertical relative z-20 mt-16 block md:hidden" data-v-3cbf6e7e><div class="flex flex-col items-center justify-center text-white text-sm" style="${ssrRenderStyle({ "letter-spacing": "0.16rem" })}" data-v-3cbf6e7e><span data-v-3cbf6e7e>CONTINUA BAJANDO</span><span data-v-3cbf6e7e><svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-3cbf6e7e><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" data-v-3cbf6e7e></path></svg></span></div></div></div></div><div class="shake-vertical absolute left-0 right-0 bottom-12 md:bottom-16 z-20 hidden md:block" data-v-3cbf6e7e><div class="flex flex-col items-center justify-center text-white text-sm" style="${ssrRenderStyle({ "letter-spacing": "0.16rem" })}" data-v-3cbf6e7e><span data-v-3cbf6e7e>CONTINUA BAJANDO</span><span data-v-3cbf6e7e><svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-3cbf6e7e><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" data-v-3cbf6e7e></path></svg></span></div></div></section><main class="bg-white" data-v-3cbf6e7e><div class="container container-sm w-full h-full flex flex-col mt-12" data-v-3cbf6e7e><h2 class="text-primary font-regular text-4-5xl px-4 md:px-0" data-v-3cbf6e7e>Nuestros expositores</h2>`);
        if (unref(eventModule).event.event_teacher) {
          _push(`<div class="flex flex-col md:gap-y-8 mt-6" data-v-3cbf6e7e><div class="w-full flex flex-col md:gap-y-8" data-v-3cbf6e7e><!--[-->`);
          ssrRenderList(unref(eventModule).event.event_teacher, (topic, iTeacher) => {
            _push(`<article class="flex flex-col md:flex-row bg-gray w-full rounded-none md:rounded-xl overflow-hidden box-shadow-default" data-v-3cbf6e7e><div class="w-full xl:w-2/3" data-v-3cbf6e7e><div class="w-full relative overflow-hidden" data-v-3cbf6e7e><img${ssrRenderAttr("src", topic.teacher.photo)} alt="" class="rounded-tl-lg rounded-tr-lg object-cover object-center w-full h-full" data-v-3cbf6e7e><div class="absolute info-teacher rounded-lg bg-primary-blur flex flex-col p-2.5 md:hidden z-10" data-v-3cbf6e7e><h3 class="text-xl font-medium text-white leading-none" data-v-3cbf6e7e>${ssrInterpolate(topic.teacher.full_name)}</h3><div class="flex items-center gap-x-2 text-base-s text-white mt-1 font-medium" data-v-3cbf6e7e><img class="w-3.5 mr-1"${ssrRenderAttr("src", topic.teacher.country.flag)} alt="" data-v-3cbf6e7e> ${ssrInterpolate(topic.teacher.country.name)}</div></div></div><div class="w-full flex relative flex-col bg-grat-content p-6 h-full" data-v-3cbf6e7e><div class="w-full hidden md:block" data-v-3cbf6e7e><h3 class="text-xl font-medium leading-6 text-black" data-v-3cbf6e7e>${ssrInterpolate(topic.teacher.full_name)}</h3><div class="flex items-center gap-x-2 text-base-s text-black mt-1 font-medium" data-v-3cbf6e7e><img class="w-3.5 mr-1"${ssrRenderAttr("src", topic.teacher.country.flag)} alt="" data-v-3cbf6e7e> ${ssrInterpolate(topic.teacher.country.name)}</div></div><div class="w-full flex flex-col justify-end" data-v-3cbf6e7e><p class="mb-0 text-dark mt-5 font-regular text-base" data-v-3cbf6e7e>${ssrInterpolate(topic.teacher.professional_summary)}</p></div></div></div><div class="w-full xl:w-1/3 bg-gray-slow p-6" data-v-3cbf6e7e><h3 class="text-3-5xl font-medium text-dark" data-v-3cbf6e7e>${ssrInterpolate(topic.title)}</h3><p class="mb-0 text-dark font-regular text-1xl lg:text-base mt-5" data-v-3cbf6e7e>${ssrInterpolate(topic.description)}</p><h2 class="text-2xl font-medium text-dark mt-5" data-v-3cbf6e7e>${ssrInterpolate(topic.topics_title)}</h2><ul class="mt-5" data-v-3cbf6e7e><!--[-->`);
            ssrRenderList(topic.topics, (topicItem) => {
              _push(`<li class="text-dark font-regular text-base flex items-start mb-5" data-v-3cbf6e7e><img class="w-5 mr-4 pt-1.5"${ssrRenderAttr("src", topicItem.icon)} alt="" data-v-3cbf6e7e><span class="" data-v-3cbf6e7e>${ssrInterpolate(topicItem.text)}</span></li>`);
            });
            _push(`<!--]--></ul></div></article>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><section class="mt-0 md:mt-16 bg-gray-light px-5 pt-6 pb-16" data-v-3cbf6e7e><div class="container w-full h-full flex flex-col mt-12 pb-4" data-v-3cbf6e7e><div class="w-full flex mb-8" data-v-3cbf6e7e><h2 class="text-black font-regular text-4-5xl text-center mx-auto" data-v-3cbf6e7e>Datos del evento</h2></div><div class="w-full lg:w-2/5 mx-auto" data-v-3cbf6e7e><div class="w-full" data-v-3cbf6e7e><article class="flex flex-col md:flex-row box-shadow-default w-full relative overflow-hidden bg-white rounded-2xl" data-v-3cbf6e7e><div class="hidden md:flex sm:w-full lg:w-2/5 relative" data-v-3cbf6e7e><img${ssrRenderAttr("src", unref(eventModule).event.image)} alt="" class="rounded-tl-2xl rounded-bl-2xl object-cover object-center w-full h-full" data-v-3cbf6e7e></div><div class="w-full lg:w-3/5" data-v-3cbf6e7e><div class="h-full w-full flex flex-col justify-center p-7" data-v-3cbf6e7e><div class="w-full flex flex-col" data-v-3cbf6e7e><span class="text-base lg:text-xl font-bold text-black" data-v-3cbf6e7e>${ssrInterpolate(unref(eventModule).event.tag)}</span><span class="text-black text-base-s font-medium flex items-start mt-3" data-v-3cbf6e7e><img${ssrRenderAttr("src", _imports_1)} alt="" class="mr-2 pt-1.5" data-v-3cbf6e7e><span class="" data-v-3cbf6e7e>${ssrInterpolate(("useFormatDateDay" in _ctx ? _ctx.useFormatDateDay : unref(useFormatDateDay))(unref(eventModule).event.date))}</span></span><span class="text-black text-base-s font-medium flex items-start mt-2" data-v-3cbf6e7e><img${ssrRenderAttr("src", _imports_1$1)} alt="" class="mr-2 pt-1.5" data-v-3cbf6e7e><span class="" data-v-3cbf6e7e>${ssrInterpolate("Hora: " + ("useFormatTime" in _ctx ? _ctx.useFormatTime : unref(useFormatTime))(unref(eventModule).event.date))}</span></span><span class="text-black text-base-s font-medium flex items-start mt-2" data-v-3cbf6e7e><img${ssrRenderAttr("src", _imports_2)} alt="" class="mr-2 pt-1.5" data-v-3cbf6e7e><span class="" data-v-3cbf6e7e>${ssrInterpolate(unref(eventModule).event.place + " " + unref(eventModule).event.address)}</span></span></div></div></div></article><div class="fixed left-0 bottom-0 lg:relative flex flex-col items-center justify-center w-full z-20" data-v-3cbf6e7e>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/event/" + unref(eventModule).event.slug + "/inscription",
          class: "w-full lg:w-max bg-primary flex text-white text-center font-medium py-2.5 px-12 rounded-none lg:rounded-full text-lg lg:text-base items-center justify-center mt-5 hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed width-default-button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="w-4 mr-2"${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-3cbf6e7e${_scopeId}> Inscribirme `);
            } else {
              return [
                createVNode("img", {
                  class: "w-4 mr-2",
                  src: _imports_2$1,
                  alt: ""
                }),
                createTextVNode(" Inscribirme ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></section></main></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_3cbf6e7e_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/event/[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3cbf6e7e"]]);
export {
  index as default
};
//# sourceMappingURL=index-df2af05c.js.map
