import { _ as __nuxt_component_0 } from "./nuxt-link-691ee40a.js";
import { defineComponent, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import "hookable";
import { u as useSetting, a as useRoute, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-edeb8654.js";
import { _ as _imports_1 } from "./logo-color-8a30c0cd.js";
import { _ as _imports_2 } from "./edit-c6270b53.js";
import { _ as _imports_1$1 } from "./empower-logo-8b6cfdfb.js";
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
const _imports_4 = "" + __buildAssetsURL("arrow_right.c2854c0d.svg");
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACySURBVHgB7ddbCoUwDIThWYo7NTvvOYLFUGi9NWmK84GvZn7fBIiIiIiIyEpKadkeOOty9/+CNR1WOOlyd/8CJfOIYny24K5KgGlEZfyzgP2F4hXRGC94wyPCbLw6YBZhPl4d6h7hNl4d7BbhPl4dfh0xbLwa8Dhi+Hg15HZEmPFq0OWIcOPVsNOIsOOzVkT48VkjIv747GKEILKTCMEMKhGCmRQRghmlQf/TRERERF/xA1e4fPA1BcqKAAAAAElFTkSuQmCC";
const __default__ = {
  name: "EmpowerSummitPage",
  // Combined name or choose one
  data() {
    return {
      // Topics Carousel data 
      currentIndex: 0,
      currentIndexMarentel: 0,
      itemWidth: 280,
      // Ancho de cada item
      autoplayInterval: null,
      topics: [
        {
          id: 1,
          title: "Inteligencia Artificial",
          icon: "fas fa-brain",
          gradient: "from-blue-500 to-purple-500",
          background: "../../assets/img/ai.png"
        },
        {
          id: 2,
          title: "Conectividad",
          icon: "fas fa-wifi",
          gradient: "from-blue-500 to-cyan-500",
          background: "../../assets/img/conectividad.png"
        },
        {
          id: 3,
          title: "Ciberseguridad",
          icon: "fas fa-shield-alt",
          gradient: "from-blue-600 to-indigo-500",
          background: "../../assets/img/ciberseguridad.png"
        },
        {
          id: 4,
          title: "Cloud",
          icon: "fas fa-cogs",
          gradient: "from-purple-500 to-pink-500",
          background: "../../assets/img/cloud.png"
        },
        {
          id: 5,
          title: "Automatización y Gestión Inteligente",
          icon: "fas fa-cogs",
          gradient: "from-purple-500 to-pink-500",
          background: "../../assets/img/automatizacion.png"
        },
        {
          id: 7,
          title: "Eficiencia Operativa",
          icon: "fas fa-chart-bar",
          gradient: "from-cyan-500 to-blue-500",
          background: "../../assets/img/eficiencia.png"
        }
      ],
      // Agenda data
      agendaItems: [
        {
          id: 1,
          time: "8:30 am",
          title: "Recepción",
          type: "break",
          image: "../../assets/img/icons/edit.png",
          expandable: false
        },
        {
          id: 2,
          time: "9:00 am",
          title: "Bienvenida a cargo de Entel",
          type: "break",
          image: "../../assets/img/icons/entel.png",
          expandable: false
        },
        {
          id: 3,
          time: "9:25 am",
          title: "Digitalización en el mundo de los negocios en Perú",
          tag: "Charla de apertura",
          expandable: true,
          expanded: false,
          image: "../../assets/img/icons/speaker.png",
          description: "Cuál es el impacto de la digitalización en el entorno empresarial peruano, destacando tendencias, desafíos y estrategias clave para enfrentar el futuro. Se explorarán las oportunidades que ofrece la transformación digital para impulsar el crecimiento y la eficiencia en las organizaciones.",
          speaker: {
            name: "Iván Portocaero",
            foto: "../../assets/img/expositores/ivan_portocarrero.png",
            title: "Director de análisis sectorial y de proyectos del Servicio de Asesoría Empresarial (SAE)."
          }
        },
        {
          id: 4,
          time: "10:00 am",
          title: "La IA en el negocio, ¿están listos para trabajar con un copilot?",
          tag: "Microsoft",
          expandable: true,
          expanded: false,
          image: "../../assets/img/icons/speaker.png",
          description: "Cómo la Inteligencia Artificial está dejando de ser una promesa futura para convertirse en una herramienta concreta en la toma de decisiones, la productividad y la innovación.",
          speaker: {
            name: "Raul Campos",
            foto: "../../assets/img/expositores/raul_campos.png",
            title: "Microsoft Channel Sales Manager"
          }
        },
        {
          id: 5,
          time: "10:20 am",
          title: "Optimiza operaciones, mejora la eficiencia y eleva la seguridad con SOTI ONE",
          tag: "SOTI",
          expandable: true,
          expanded: false,
          image: "../../assets/img/icons/speaker.png",
          description: "Cómo la Plataforma SOTI ONE permite que las organizaciones gestionen de forma centralizada sus dispositivos móviles, aplicaciones y endpoints, optimizando así las operaciones críticas del negocio, aumentando la productividad  y fortaleciendo la seguridad.",
          speaker: {
            name: "José Antonio Martinez",
            foto: "../../assets/img/expositores/jose_antonio_martinez.png",
            title: "Business Partner and Alliances Sales LATAM"
          }
        },
        {
          id: 6,
          time: "10:40 am",
          title: "De la Red Segura a la Seguridad como Servicio: El Camino hacia SASE",
          tag: "Fortinet",
          expandable: true,
          expanded: false,
          image: "../../assets/img/icons/speaker.png",
          description: "La evolución de la seguridad gestionada hacia SASE marca un cambio clave: integrar red y seguridad en la nube con inteligencia artificial para anticipar amenazas. Esto permite una protección más ágil y contextual en un entorno digital cada vez más distribuido. La seguridad ya no es un perímetro, es una experiencia continua e inteligente.",
          speaker: {
            name: "Tomás Asmat",
            foto: "../../assets/img/expositores/tomas_asmat.png",
            title: "Sr. Systems Engineer"
          }
        },
        {
          id: 7,
          time: "11:00 am",
          title: "Coffee Break",
          type: "break",
          tag: "Zona Break",
          image: "../../assets/img/icons/coffee.png",
          expandable: false
        },
        {
          id: 8,
          time: "11:30 am",
          title: "Mejorando la experiencia del cliente con IA conversacional",
          tag: "Infobip",
          expandable: true,
          expanded: false,
          image: "../../assets/img/icons/speaker.png",
          description: "Cómo la IA conversacional está cambiando la forma en que las empresas gestionan la relación con sus usuarios. Descubre estrategias y soluciones prácticas para transformar la forma en que te conectas.",
          speaker: {
            name: "Maurice Falcón",
            foto: "../../assets/img/expositores/maurice_falcon.png",
            title: "Customer Growth Executive"
          }
        },
        {
          id: 9,
          time: "11:50 am",
          title: "Más Allá del Antivirus: Cómo Modernizar la Gestión y Seguridad de TI con Acronis",
          tag: "Acronis",
          expandable: true,
          expanded: false,
          image: "../../assets/img/icons/speaker.png",
          description: "Descubre cómo modernizar la seguridad de TI con Acronis, integrando protección avanzada, automatización y gestión centralizada desde una sola consola.",
          speaker: {
            name: "Guillermo Márquez",
            foto: "../../assets/img/expositores/guillermo_marquez.png",
            title: "Senior Evangelist, Americas"
          }
        },
        {
          id: 10,
          time: "12:10 pm",
          title: "Innovación sin Límites: El Enfoque AWS para la Transformación de Negocios",
          tag: "Amazon Web Services",
          expandable: true,
          expanded: false,
          image: "../../assets/img/icons/speaker.png",
          description: "Frente a la necesidad creciente de las empresas peruanas por acelerar su transformación digital, exploraremos el enfoque peculiar de AWS, en donde nos enfocamos en los desafíos empresariales de nuestros clientes para crear soluciones de nube innovadoras, seguras y costo-eficientes que revolucionan los procesos de negocio.",
          speaker: {
            name: "Diego Silva",
            foto: "../../assets/img/expositores/diego_silva.png",
            title: "Territory Manager AWS Perú"
          }
        },
        {
          id: 11,
          time: "12:30 pm",
          title: "Cierre",
          type: "closing",
          image: "../../assets/img/icons/handshake.png",
          expandable: false
        }
      ],
      partners: [
        {
          name: "Acronis",
          logo: "../../assets/img/marcas/acronis.png"
        },
        {
          name: "AWS",
          logo: "../../assets/img/marcas/aws.png"
        },
        {
          name: "Fortinet",
          logo: "../../assets/img/marcas/fortinet.png"
        },
        {
          name: "Honor",
          logo: "../../assets/img/marcas/honor.png"
        },
        {
          name: "Infobip",
          logo: "../../assets/img/marcas/infobip.png"
        },
        {
          name: "Microsoft",
          logo: "../../assets/img/marcas/microsoft.png"
        },
        {
          name: "Samsung",
          logo: "../../assets/img/marcas/samsung.png"
        },
        {
          name: "Soti",
          logo: "../../assets/img/marcas/soti.png"
        },
        {
          name: "zte nubia",
          logo: "../../assets/img/marcas/zte_nubia.png"
        }
      ]
    };
  },
  computed: {
    extendedPartners() {
      return [...this.partners, ...this.partners];
    }
  },
  mounted() {
    this.marentelStartAutoplay();
    window.addEventListener("resize", this.marentelHandleResize);
  },
  beforeUnmount() {
    this.marentelStopAutoplay();
    window.removeEventListener("resize", this.marentelHandleResize);
  },
  methods: {
    // Topics Carousel methods
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % Math.max(1, this.topics.length - 2);
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + Math.max(1, this.topics.length - 2)) % Math.max(1, this.topics.length - 2);
    },
    goToSlide(index2) {
      this.currentIndex = index2;
    },
    handleTopicClick(topic) {
      this.$emit("topic-selected", topic);
      console.log("Tema seleccionado:", topic.title);
    },
    // Agenda methods
    toggleExpand(itemId) {
      const item = this.agendaItems.find((item2) => item2.id === itemId);
      if (item) {
        this.agendaItems.filter((agendaItem) => agendaItem.id !== itemId && agendaItem.expanded).forEach((agendaItem) => agendaItem.expanded = false);
        item.expanded = !item.expanded;
      }
    },
    getInitials(name) {
      return name.split(" ").map((word) => word[0]).join("").toUpperCase();
    },
    marentelStartAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.marentelNextSlide();
      }, 3e3);
    },
    marentelStopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
        this.autoplayInterval = null;
      }
    },
    marentelNextSlide() {
      this.currentIndexMarentel = (this.currentIndexMarentel + 1) % this.partners.length;
    },
    marentelGoToSlide(index2) {
      this.currentIndexMarentel = index2;
      this.marentelStopAutoplay();
      this.marentelStartAutoplay();
    },
    marentelHandleImageError(event) {
      const target = event.target;
      if (target) {
        target.style.display = "none";
        if (target.nextElementSibling) {
          target.nextElementSibling.style.display = "block";
        }
      }
    },
    marentelHandleResize() {
      if (window.innerWidth < 768) {
        this.itemWidth = 200;
      } else if (window.innerWidth < 1024) {
        this.itemWidth = 240;
      } else {
        this.itemWidth = 280;
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    useSetting();
    useEvent();
    useRoute();
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="hidden md:block container-fluid absolute inset-x-0 top-0 left-0 z-50 h-header transition duration-3 fixed-header" data-v-3b5ece96><div class="h-full fondo-navbar" data-v-3b5ece96><nav class="flex items-center justify-between py-2 h-full" aria-label="Global" data-v-3b5ece96><div class="flex lg:flex-1" data-v-3b5ece96>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "-m-1.5 p-1.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-8 w-auto logo-white"${ssrRenderAttr("src", _imports_0)} alt="" data-v-3b5ece96${_scopeId}><img class="h-8 w-auto logo-color"${ssrRenderAttr("src", _imports_1)} alt="" data-v-3b5ece96${_scopeId}>`);
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
      _push(`</div><div class="flex md:flex" data-v-3b5ece96>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/event/empower/inscription",
        type: "button",
        class: "w-max bg-primary text-white text-center font-medium py-2 px-4 rounded-full text-base flex items-center justify-center hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-4 mr-2"${ssrRenderAttr("src", _imports_2)} alt="" data-v-3b5ece96${_scopeId}> Inscribirme `);
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
      _push(`</div></nav></div></section><div class="w-full h-full bg-darkblue" data-v-3b5ece96><section class="relative h-screen fondo-hero-2" data-v-3b5ece96><div class="md:hidden container-fluid absolute inset-x-0 left-0 z-50 h-header transition duration-3 fixed-header mt-10" style="${ssrRenderStyle({ "top": "40px" })}" data-v-3b5ece96><div class="h-full flex items-center justify-center" data-v-3b5ece96><nav class="flex items-center justify-center w-full py-2" aria-label="Global" data-v-3b5ece96><div class="flex justify-center" data-v-3b5ece96>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "-m-1.5 p-1.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-8 w-auto logo-white"${ssrRenderAttr("src", _imports_0)} alt="" data-v-3b5ece96${_scopeId}><img class="h-8 w-auto logo-color"${ssrRenderAttr("src", _imports_1)} alt="" data-v-3b5ece96${_scopeId}>`);
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
      _push(`</div></nav></div></div><div class="relative isolate pt-14 h-full w-full" data-v-3b5ece96><div class="container-2 margin-t-120 w-full h-full flex flex-col justify-center md:justify-center" data-v-3b5ece96><div class="flex flex-col items-center justify-center text-white text-sm" data-v-3b5ece96><div class="items-center justify-center" data-v-3b5ece96><img${ssrRenderAttr("src", _imports_1$1)} alt="Empower Logo" class="logo-entel-xl inline-block h-10 mr-2" data-v-3b5ece96></div></div><div class="w-full shake-vertical relative z-20 mt-16 block md:hidden" data-v-3b5ece96><div class="flex flex-col items-center justify-center text-white text-sm" style="${ssrRenderStyle({ "letter-spacing": "0.16rem" })}" data-v-3b5ece96><span data-v-3b5ece96>CONTINUA BAJANDO</span><span data-v-3b5ece96><svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-3b5ece96><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" data-v-3b5ece96></path></svg></span></div></div></div></div><div class="shake-vertical absolute left-0 right-0 bottom-12 md:bottom-16 z-20 hidden md:block" data-v-3b5ece96><div class="flex flex-col items-center justify-center text-white text-sm" style="${ssrRenderStyle({ "letter-spacing": "0.16rem" })}" data-v-3b5ece96><span data-v-3b5ece96>CONTINUA BAJANDO</span><span data-v-3b5ece96><svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-3b5ece96><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" data-v-3b5ece96></path></svg></span></div></div></section><main class="bg-darkblue" data-v-3b5ece96><section class="container-2 w-full h-full flex flex-col mt-12 pb-4" data-v-3b5ece96><div class="md:flex flex-wrap sm-pr-0" data-v-3b5ece96><div class="w-full md:w-1/2 md:min-w-50" data-v-3b5ece96><div class="flex pr-4" data-v-3b5ece96><article class="gap-16 items-center justify-center lg:min-h-64 flex flex-col lg:flex-row w-full relative overflow-hidden bg-gray rounded-2xl" data-v-3b5ece96><div class="items-center justify-center" data-v-3b5ece96><span class="text-gradient" data-v-3b5ece96>Sumérgete en el futuro de la tecnología y la innovación</span></div></article></div></div><div class="w-full md:w-1/2 md:min-w-50" data-v-3b5ece96><div class="flex pr-4" data-v-3b5ece96><article class="gap-16 items-center justify-center lg:min-h-64 flex flex-col lg:flex-row w-full relative overflow-hidden bg-gray rounded-2xl" data-v-3b5ece96><div class="items-center justify-center" data-v-3b5ece96><span class="text-par" data-v-3b5ece96>Únete a líderes de la industria y nuestros partners estratégicos en un espacio diseñado para compartir conocimientos, descubrir nuevas soluciones tecnológicas y fortalecer conexiones clave. Disfruta de conferencias de alto nivel que impulsarán el crecimiento de tu empresa en un entorno de constante evolución, brindándote herramientas para avanzar en el camino hacia la transformación digital.</span></div></article></div></div></div></section><section class="container-2 contenedores-ad w-full h-full flex flex-col mt-12 pb-4" data-v-3b5ece96><div class="event-details-card" data-v-3b5ece96><h2 class="event-title" data-v-3b5ece96>Detalles del evento</h2><div class="event-info-container" data-v-3b5ece96><div class="info-section" data-v-3b5ece96><div class="info-header" data-v-3b5ece96><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-3b5ece96><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-v-3b5ece96></rect><line x1="16" y1="2" x2="16" y2="6" data-v-3b5ece96></line><line x1="8" y1="2" x2="8" y2="6" data-v-3b5ece96></line><line x1="3" y1="10" x2="21" y2="10" data-v-3b5ece96></line></svg><span class="info-label" data-v-3b5ece96>Fecha</span></div><p class="info-value" data-v-3b5ece96>10 de Julio, 2025</p></div><div class="separator" data-v-3b5ece96></div><div class="info-section" data-v-3b5ece96><div class="info-header" data-v-3b5ece96><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-3b5ece96><circle cx="12" cy="12" r="10" data-v-3b5ece96></circle><polyline points="12,6 12,12 16,14" data-v-3b5ece96></polyline></svg><span class="info-label" data-v-3b5ece96>Hora</span></div><p class="info-value" data-v-3b5ece96>8:30 am – 1:00 pm</p></div><div class="separator" data-v-3b5ece96></div><div class="info-section" data-v-3b5ece96><div class="info-header" data-v-3b5ece96><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-3b5ece96><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-3b5ece96></path><circle cx="12" cy="10" r="3" data-v-3b5ece96></circle></svg><span class="info-label" data-v-3b5ece96>Lugar</span></div><p class="info-value" data-v-3b5ece96>The Westin Lima Hotel </p><p class="info-address" data-v-3b5ece96>Av. Las Begonias 450, San Isidro</p></div></div></div></section><section class="container-2 contenedores-ad w-full h-full flex flex-col mt-12 pb-4" data-v-3b5ece96><div class="topics-carousel" data-v-3b5ece96><div class="container" data-v-3b5ece96><h2 class="title text-gradient" data-v-3b5ece96>Temas Principales</h2><div class="carousel-container" data-v-3b5ece96><div class="carousel-track" style="${ssrRenderStyle({ transform: `translateX(-${_ctx.currentIndex * (100 / 3)}%)` })}" data-v-3b5ece96><!--[-->`);
      ssrRenderList(_ctx.topics, (topic, index2) => {
        _push(`<div class="topic-card-wrapper" data-v-3b5ece96><div class="topic-card" style="${ssrRenderStyle([{ background: "url(" + topic.background + ")" }, { "background-repeat": "no-repeat", "background-size": "cover", "background-position": "center" }])}" data-v-3b5ece96><div class="card-bg-effect" data-v-3b5ece96></div><h3 class="topic-title" data-v-3b5ece96>${ssrInterpolate(topic.title)}</h3><div class="shine-effect" data-v-3b5ece96></div></div></div>`);
      });
      _push(`<!--]--></div><button class="nav-button" data-v-3b5ece96><img${ssrRenderAttr("src", _imports_4)} alt="Next" class="arrow-icon" data-v-3b5ece96></button></div></div></div></section><section class="container-2 contenedores-ad w-full h-full flex flex-col mt-12 pb-4" data-v-3b5ece96><div class="w-full agenda-container items-center justify-center" data-v-3b5ece96><div class="items-center" data-v-3b5ece96><h2 class="title text-gradient title-center" data-v-3b5ece96>Agenda Empower Summit</h2></div><!--[-->`);
      ssrRenderList(_ctx.agendaItems, (item) => {
        _push(`<div class="${ssrRenderClass(["agenda-item", {
          "closing-item": item.expanded === true,
          " ": item.expanded === false
        }])}" data-v-3b5ece96><div class="agenda-header" data-v-3b5ece96><div class="agenda-info" data-v-3b5ece96><div class="time-icon" data-v-3b5ece96><img class="agenda-ico"${ssrRenderAttr("src", item.image)} data-v-3b5ece96></div><div class="agenda-details" data-v-3b5ece96><div class="agenda-time" data-v-3b5ece96>${ssrInterpolate(item.time)}</div><h3 data-v-3b5ece96>${ssrInterpolate(item.title)}</h3>`);
        if (item.tag) {
          _push(`<div class="agenda-tag" data-v-3b5ece96>${ssrInterpolate(item.tag)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="agenda-controls" data-v-3b5ece96>`);
        if (item.expandable) {
          _push(`<div class="${ssrRenderClass(["expand-icon", { "rotated": item.expanded }])}" data-v-3b5ece96><img${ssrRenderAttr("src", _imports_5)} alt="Next" class="arrow-icon" data-v-3b5ece96></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (item.expandable && item.expanded) {
          _push(`<div class="agenda-content" data-v-3b5ece96><div class="content-inner" data-v-3b5ece96><div class="linea-speaker" data-v-3b5ece96><span class="span-linear" data-v-3b5ece96></span></div><p class="description" data-v-3b5ece96>${ssrInterpolate(item.description)}</p>`);
          if (item.speaker) {
            _push(`<div class="speaker" data-v-3b5ece96><div class="speaker-info" data-v-3b5ece96><h4 data-v-3b5ece96>${ssrInterpolate(item.speaker.name)}</h4><div class="speaker-title" data-v-3b5ece96>${ssrInterpolate(item.speaker.title)}</div></div><div class="speaker-avatar" data-v-3b5ece96><img${ssrRenderAttr("src", item.speaker.foto)} data-v-3b5ece96></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section><section class="container-2 w-full h-full flex flex-col mt-12 pb-4" data-v-3b5ece96><h2 class="title text-gradient" data-v-3b5ece96>Partners</h2><div class="marentel-partners-carousel" data-v-3b5ece96><div class="marentel-carousel-container" data-v-3b5ece96><div class="marentel-carousel-wrapper" data-v-3b5ece96><div class="marentel-carousel-track" style="${ssrRenderStyle({ transform: `translateX(-${_ctx.currentIndexMarentel * _ctx.itemWidth}px)` })}" data-v-3b5ece96><!--[-->`);
      ssrRenderList(_ctx.extendedPartners, (partner, index2) => {
        _push(`<div class="marentel-carousel-item" data-v-3b5ece96><div class="marentel-partner-card" data-v-3b5ece96><img${ssrRenderAttr("src", partner.logo)}${ssrRenderAttr("alt", `${partner.name} logo`)} class="marentel-partner-logo" data-v-3b5ece96><span class="marentel-partner-name" data-v-3b5ece96>${ssrInterpolate(partner.name)}</span></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section><section class="container-fluid w-full h-footer bg-darkblue" data-v-3b5ece96><div class="container h-full" data-v-3b5ece96><div class="w-full h-full flex items-center justify-between my-auto" data-v-3b5ece96><span class="font-normal text-xs text-white" data-v-3b5ece96>Copyright ${ssrInterpolate(unref(currentYear))}. Todos los derechos reservados.</span><a href="#" class="-m-1.5 p-1.5" data-v-3b5ece96><img class="h-8 w-auto"${ssrRenderAttr("src", _imports_0)} alt="" data-v-3b5ece96></a></div></div></section><div class="fixed left-0 bottom-0 md:hidden flex flex-col items-center justify-center w-full z-20 p-6" data-v-3b5ece96>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/event/empower/inscription",
        type: "button",
        class: "w-max bg-primary text-white text-center font-medium py-4 px-8 rounded-full text-base flex items-center justify-center hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-4 mr-2"${ssrRenderAttr("src", _imports_2)} alt="" data-v-3b5ece96${_scopeId}> Inscribirme `);
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
      _push(`</div></main></div><!--]-->`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_3b5ece96_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/event/empower/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b5ece96"]]);
export {
  index as default
};
//# sourceMappingURL=index-f7269869.js.map
