import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
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

const _sfc_main = {
  name: "TopicsCarousel",
  data() {
    return {
      currentIndex: 0,
      topics: [
        {
          id: 1,
          title: "Inteligencia Artificial",
          icon: "fas fa-brain",
          gradient: "from-blue-500 to-purple-500"
        },
        {
          id: 2,
          title: "Conectividad",
          icon: "fas fa-wifi",
          gradient: "from-blue-500 to-cyan-500"
        },
        {
          id: 3,
          title: "Ciberseguridad",
          icon: "fas fa-shield-alt",
          gradient: "from-blue-600 to-indigo-500"
        },
        {
          id: 4,
          title: "Automatizaci\xF3n y Gesti\xF3n Inteligente",
          icon: "fas fa-cogs",
          gradient: "from-purple-500 to-pink-500"
        },
        {
          id: 5,
          title: "An\xE1lisis de Datos",
          icon: "fas fa-chart-bar",
          gradient: "from-cyan-500 to-blue-500"
        }
      ]
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % Math.max(1, this.topics.length - 2);
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + Math.max(1, this.topics.length - 2)) % Math.max(1, this.topics.length - 2);
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    handleTopicClick(topic) {
      this.$emit("topic-selected", topic);
      console.log("Tema seleccionado:", topic.title);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "topics-carousel" }, _attrs))} data-v-5bd83a87><div class="container" data-v-5bd83a87><h2 class="title" data-v-5bd83a87>Temas Principales</h2><div class="carousel-container" data-v-5bd83a87><div class="carousel-track" style="${ssrRenderStyle({ transform: `translateX(-${$data.currentIndex * (100 / 3)}%)` })}" data-v-5bd83a87><!--[-->`);
  ssrRenderList($data.topics, (topic, index) => {
    _push(`<div class="topic-card-wrapper" data-v-5bd83a87><div class="topic-card" data-v-5bd83a87><div class="card-bg-effect" data-v-5bd83a87></div><div class="icon-container" data-v-5bd83a87><div class="icon-wrapper" data-v-5bd83a87><i class="${ssrRenderClass([topic.icon, "topic-icon"])}" data-v-5bd83a87></i></div></div><h3 class="topic-title" data-v-5bd83a87>${ssrInterpolate(topic.title)}</h3><div class="shine-effect" data-v-5bd83a87></div></div></div>`);
  });
  _push(`<!--]--></div><button class="nav-button" data-v-5bd83a87><i class="arrow-icon" data-v-5bd83a87>\u2192</i></button></div><div class="indicators" data-v-5bd83a87><!--[-->`);
  ssrRenderList(Math.max(1, $data.topics.length - 2), (_, index) => {
    _push(`<button class="${ssrRenderClass(["indicator", { active: index === $data.currentIndex }])}" data-v-5bd83a87></button>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/carrusel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const carrusel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5bd83a87"]]);

export { carrusel as default };
//# sourceMappingURL=carrusel-8b02db5f.mjs.map
