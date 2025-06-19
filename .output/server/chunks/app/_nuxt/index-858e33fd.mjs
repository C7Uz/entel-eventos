import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-691ee40a.mjs';
import { useSSRContext, defineComponent, ref, unref, mergeProps, withCtx, createVNode, openBlock, createBlock } from 'vue';
import { _ as _export_sfc, u as useSetting, a as useRoute } from '../server.mjs';
import { u as useFormatDateDay, _ as _imports_1$1, a as useFormatTime } from './time-50546519.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_1, a as _imports_2 } from './location-cb919150.mjs';
import { u as useEvent } from './event.module-776f2c7f.mjs';
import * as yup from 'yup';
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
import 'moment';
import './useApi-aa853999.mjs';
import 'axios';

const _imports_3 = "" + buildAssetsURL("alert.1b6de979.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSetting();
    const eventModule = useEvent();
    useRoute();
    const isComplete = ref(false);
    const isLoading = ref(false);
    const form = ref({
      event: null,
      fullname: "",
      cellphone: "",
      job: "",
      flag_business: null,
      company: "",
      ruc: "",
      email: ""
    });
    const errorsSend = ref(null);
    yup.object({
      fullname: yup.string().required("Campo oblligatorio"),
      cellphone: yup.string().required("Campo oblligatorio"),
      job: yup.string().required("Campo oblligatorio"),
      flag_business: yup.boolean().required("Campo oblligatorio"),
      company: yup.string().required("Campo oblligatorio"),
      // ruc: yup.number().required('Campo oblligatorio'),
      email: yup.string().email("El formato no es correcto").required("Campo oblligatorio")
    });
    const errors = ref({
      fullname: "",
      cellphone: "",
      job: "",
      flag_business: "",
      company: "",
      email: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(eventModule).event) {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full h-full pt-20" }, _attrs))} data-v-7fec544f><div class="container-fluid" data-v-7fec544f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/event/" + unref(eventModule).event.slug,
          class: "w-12 h-12 bg-gray-dark text-white text-center font-regular rounded-full text-l flex items-center justify-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="w-8" data-v-7fec544f${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" data-v-7fec544f${_scopeId}><title data-v-7fec544f${_scopeId}>arrow-left</title><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" data-v-7fec544f${_scopeId}></path></svg></span>`);
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
        _push(`</div><section class="relative h-full md:h-screen w-full" data-v-7fec544f><div class="relative isolate h-full w-full" data-v-7fec544f><div class="container w-full h-full pt-12" data-v-7fec544f><h2 class="text-primary font-regular text-4-5xl mb-8" data-v-7fec544f>Inscripci\xF3n</h2><div class="w-full flex flex-col md:flex-row gap-x-12" data-v-7fec544f><div class="flex flex-col w-full md:w-1/4" data-v-7fec544f><div class="w-full flex flex-row md:flex-col items-center" data-v-7fec544f><img${ssrRenderAttr("src", unref(eventModule).event.image)} class="rounded-lg w-1/2 md:w-full" alt="" data-v-7fec544f><h1 class="text-primary font-medium text-1xl w-1/2 md:w-full pl-3 md:pl-0" data-v-7fec544f>${ssrInterpolate(unref(eventModule).event.title)}</h1></div><p class="text-black font-bold text-base mt-4" data-v-7fec544f>${ssrInterpolate(unref(eventModule).event.tag)}</p><p class="text-base-s text-black font-medium flex items-start mt-3" data-v-7fec544f><img${ssrRenderAttr("src", _imports_1)} alt="" class="mr-2 pt-1" data-v-7fec544f><span data-v-7fec544f>${ssrInterpolate(("useFormatDateDay" in _ctx ? _ctx.useFormatDateDay : unref(useFormatDateDay))(unref(eventModule).event.date))}</span></p><p class="text-base-s text-black font-medium flex items-start mt-1" data-v-7fec544f><img${ssrRenderAttr("src", _imports_1$1)} alt="" class="mr-2 pt-1" data-v-7fec544f><span data-v-7fec544f>${ssrInterpolate("Hora: " + ("useFormatTime" in _ctx ? _ctx.useFormatTime : unref(useFormatTime))(unref(eventModule).event.date))}</span></p><p class="text-base-s text-black font-medium flex items-start mt-1" data-v-7fec544f><img${ssrRenderAttr("src", _imports_2)} alt="" class="mr-2 pt-1" data-v-7fec544f><span data-v-7fec544f>${ssrInterpolate(unref(eventModule).event.place + " - " + unref(eventModule).event.address)}</span></p></div><div class="flex flex-col w-full md:w-3/4 mt-8 md:mt-0 mb-8 md:mb-0" data-v-7fec544f><form class="w-full flex flex-col gap-y-8" data-v-7fec544f><div class="w-full flex flex-col md:flex-row gap-x-8 gap-y-6" data-v-7fec544f><div class="w-full md:w-1/2" data-v-7fec544f><label class="${ssrRenderClass([{ "error": unref(errors).fullname }, "label-input relative block overflow-hidden border-b-3 bg-gray-slow pt-4 pb-1 px-4 focus-within:border-blue-600 rounded-t-lg hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus group-input"])}" data-v-7fec544f><input type="text"${ssrRenderAttr("value", unref(form).fullname)} class="${ssrRenderClass([{ "has-content": unref(form).fullname && unref(form).fullname != "" }, "input peer-input h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base flex items-end text-gray-regular font-medium"])}" data-v-7fec544f><span class="label absolute text-base font-regular text-gray-regular transition-all" data-v-7fec544f> Nombre y apellido* </span><span class="absolute right-0 top-3.5" data-v-7fec544f><img class="w-6 mr-6"${ssrRenderAttr("src", _imports_3)} data-v-7fec544f></span></label>`);
        if (unref(errors).fullname) {
          _push(`<p class="m-0 text-error text-xs mt-1 font-medium pl-4" data-v-7fec544f>${ssrInterpolate(unref(errors).fullname)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="w-full md:w-1/2" data-v-7fec544f><label class="${ssrRenderClass([{ "error": unref(errors).cellphone }, "label-input relative block overflow-hidden border-b-3 bg-gray-slow pt-4 pb-1 px-4 focus-within:border-blue-600 rounded-t-lg hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus group-input"])}" data-v-7fec544f><input type="text"${ssrRenderAttr("value", unref(form).cellphone)} class="${ssrRenderClass([{ "has-content": unref(form).cellphone && unref(form).cellphone != "" }, "input peer-input h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base flex items-end text-gray-regular font-medium"])}" data-v-7fec544f><span class="label absolute text-base font-regular text-gray-regular transition-all" data-v-7fec544f> Celular* </span><span class="absolute right-0 top-3.5" data-v-7fec544f><img class="w-6 mr-6"${ssrRenderAttr("src", _imports_3)} data-v-7fec544f></span></label>`);
        if (unref(errors).cellphone) {
          _push(`<p class="m-0 text-error text-xs mt-1 font-medium pl-4" data-v-7fec544f>${ssrInterpolate(unref(errors).cellphone)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="w-full flex flex-col md:flex-row gap-x-8 gap-y-6" data-v-7fec544f><div class="w-full md:w-1/2" data-v-7fec544f><label class="${ssrRenderClass([{ "error": unref(errors).company }, "label-input relative block overflow-hidden border-b-3 bg-gray-slow pt-4 pb-1 px-4 focus-within:border-blue-600 rounded-t-lg hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus group-input"])}" data-v-7fec544f><input type="text"${ssrRenderAttr("value", unref(form).company)} class="${ssrRenderClass([{ "has-content": unref(form).company && unref(form).company != "" }, "input peer-input h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base flex items-end text-gray-regular font-medium"])}" data-v-7fec544f><span class="label absolute text-base font-regular text-gray-regular transition-all" data-v-7fec544f> Empresa* </span><span class="absolute right-0 top-3.5" data-v-7fec544f><img class="w-6 mr-6"${ssrRenderAttr("src", _imports_3)} data-v-7fec544f></span></label>`);
        if (unref(errors).company) {
          _push(`<p class="m-0 text-error text-xs mt-1 font-medium pl-4" data-v-7fec544f>${ssrInterpolate(unref(errors).company)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="w-full md:w-1/2" data-v-7fec544f><label class="label-input relative block overflow-hidden border-b-3 bg-gray-slow pt-4 pb-1 px-4 focus-within:border-blue-600 rounded-t-lg hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus group-input" data-v-7fec544f><input type="text"${ssrRenderAttr("value", unref(form).ruc)} class="${ssrRenderClass([{ "has-content": unref(form).ruc && unref(form).ruc != "" }, "input peer-input h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base flex items-end text-gray-regular font-medium"])}" data-v-7fec544f><span class="label absolute text-base font-regular text-gray-regular transition-all" data-v-7fec544f> Ruc </span></label></div></div><div class="w-full flex flex-col md:flex-row gap-x-8 gap-y-6" data-v-7fec544f><div class="w-full md:w-1/2" data-v-7fec544f><label class="${ssrRenderClass([{ "error": unref(errors).job }, "label-input relative block overflow-hidden border-b-3 bg-gray-slow pt-4 pb-1 px-4 focus-within:border-blue-600 rounded-t-lg hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus group-input"])}" data-v-7fec544f><input type="text"${ssrRenderAttr("value", unref(form).job)} class="${ssrRenderClass([{ "has-content": unref(form).job && unref(form).job != "" }, "input peer-input h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base flex items-end text-gray-regular font-medium"])}" data-v-7fec544f><span class="label absolute text-base font-regular text-gray-regular transition-all" data-v-7fec544f> Cargo* </span><span class="absolute right-0 top-3.5" data-v-7fec544f><img class="w-6 mr-6"${ssrRenderAttr("src", _imports_3)} data-v-7fec544f></span></label>`);
        if (unref(errors).job) {
          _push(`<p class="m-0 text-error text-xs mt-1 font-medium pl-4" data-v-7fec544f>${ssrInterpolate(unref(errors).job)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="w-full md:w-1/2" data-v-7fec544f><p class="text-black text-base font-medium mb-2" data-v-7fec544f>\xBFEs cliente Entel Empresas?</p><div class="w-full flex items-center" data-v-7fec544f><label class="radio-input flex items-center cursor-pointer mr-4" for="response1" data-v-7fec544f><input class="w-0 h-0 invisible" id="response1" type="radio" value="1" name="question" data-v-7fec544f><span class="circle w-5 h-5 rounded-full border-3 border-solid border-color-radio flex items-center justify-center" data-v-7fec544f><span class="point w-2.5 h-2.5 rounded-full bg-transparent" data-v-7fec544f></span></span><span class="pl-2 text-base font-regular text-black leading-none" data-v-7fec544f>Si</span></label><label class="radio-input flex items-center cursor-pointer" for="response2" data-v-7fec544f><input class="w-0 h-0 invisible" id="response2" type="radio" value="0" name="question" data-v-7fec544f><span class="circle w-5 h-5 rounded-full border-3 border-solid border-color-radio flex items-center justify-center" data-v-7fec544f><span class="point w-2.5 h-2.5 rounded-full bg-transparent" data-v-7fec544f></span></span><span class="pl-2 text-base font-regular text-black leading-none" data-v-7fec544f>No</span></label></div>`);
        if (unref(errors).flag_business) {
          _push(`<p class="m-0 text-error text-xs mt-1 font-medium pl-4" data-v-7fec544f>${ssrInterpolate(unref(errors).flag_business)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="w-full flex flex-col md:flex-row gap-x-8 gap-y-6" data-v-7fec544f><div class="w-full md:w-1/2" data-v-7fec544f><label class="${ssrRenderClass([{ "error": unref(errors).email }, "label-input relative block overflow-hidden border-b-3 bg-gray-slow pt-4 pb-1 px-4 focus-within:border-blue-600 rounded-t-lg hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus group-input"])}" data-v-7fec544f><input type="email"${ssrRenderAttr("value", unref(form).email)} class="${ssrRenderClass([{ "has-content": unref(form).email && unref(form).email != "" }, "input peer-input h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base flex items-end text-gray-regular font-medium"])}" data-v-7fec544f><span class="label absolute text-base font-regular text-gray-regular transition-all" data-v-7fec544f> Correo* </span><span class="absolute right-0 top-3.5" data-v-7fec544f><img class="w-6 mr-6"${ssrRenderAttr("src", _imports_3)} data-v-7fec544f></span></label>`);
        if (unref(errors).email) {
          _push(`<p class="m-0 text-error text-xs mt-1 font-medium pl-4" data-v-7fec544f>${ssrInterpolate(unref(errors).email)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="w-full md:w-1/2 flex justify-center items-center" data-v-7fec544f><button type="submit"${ssrIncludeBooleanAttr(!unref(isComplete)) ? " disabled" : ""} class="${ssrRenderClass([{ "disabled": !unref(isComplete) }, "w-max bg-primary text-white text-center font-regular py-2.5 px-8 rounded-full text-l flex items-center justify-center hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed width-default-button disabled:text-disabled-button disabled:bg-disabled-button"])}" data-v-7fec544f>`);
        if (unref(isLoading)) {
          _push(`<div class="flex" data-v-7fec544f><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-7fec544f><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-7fec544f></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-7fec544f></path></svg> Enviando... </div>`);
        } else {
          _push(`<span data-v-7fec544f>Enviar inscripci\xF3n</span>`);
        }
        _push(`</button></div></div></form>`);
        if (unref(errorsSend)) {
          _push(`<div class="mt-5 w-full bg-red-50 border border-solid border-red-dark text-red-dark rounded-lg py-3 px-5 flex items-center" data-v-7fec544f><span data-v-7fec544f><img style="${ssrRenderStyle({ "max-width": "22px" })}"${ssrRenderAttr("src", _imports_3)} class="mr-2" data-v-7fec544f></span><div class="w-full" data-v-7fec544f>${unref(errorsSend)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></section></main>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/event/[slug]/inscription/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7fec544f"]]);

export { index as default };
//# sourceMappingURL=index-858e33fd.mjs.map
