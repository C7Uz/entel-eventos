import { defineComponent, unref, mergeProps, useSSRContext } from "vue";
import "hookable";
import { u as useSetting, a as useRoute, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _imports_1$1 } from "./empower-logo-8b6cfdfb.js";
import { _ as _imports_0 } from "./logo-edeb8654.js";
import { u as useEvent } from "./event.module-bd54a24e.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "./useApi-1052a4e0.js";
import "axios";
const _imports_1 = "" + __buildAssetsURL("arrow_right.c2854c0d.svg");
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACySURBVHgB7ddbCoUwDIThWYo7NTvvOYLFUGi9NWmK84GvZn7fBIiIiIiIyEpKadkeOOty9/+CNR1WOOlyd/8CJfOIYny24K5KgGlEZfyzgP2F4hXRGC94wyPCbLw6YBZhPl4d6h7hNl4d7BbhPl4dfh0xbLwa8Dhi+Hg15HZEmPFq0OWIcOPVsNOIsOOzVkT48VkjIv747GKEILKTCMEMKhGCmRQRghmlQf/TRERERF/xA1e4fPA1BcqKAAAAAElFTkSuQmCC";
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
          background: "../assets/img/ai.png"
        },
        {
          id: 2,
          title: "Conectividad",
          icon: "fas fa-wifi",
          gradient: "from-blue-500 to-cyan-500",
          background: "../assets/img/conectividad.png"
        },
        {
          id: 3,
          title: "Ciberseguridad",
          icon: "fas fa-shield-alt",
          gradient: "from-blue-600 to-indigo-500",
          background: "../assets/img/ciberseguridad.png"
        },
        {
          id: 4,
          title: "Cloud",
          icon: "fas fa-cogs",
          gradient: "from-purple-500 to-pink-500",
          background: "../assets/img/cloud.png"
        },
        {
          id: 5,
          title: "Automatización y Gestión Inteligente",
          icon: "fas fa-cogs",
          gradient: "from-purple-500 to-pink-500",
          background: "../assets/img/automatizacion.png"
        },
        {
          id: 7,
          title: "Eficiencia Operativa",
          icon: "fas fa-chart-bar",
          gradient: "from-cyan-500 to-blue-500",
          background: "../assets/img/eficiencia.png"
        }
      ],
      // Agenda data
      agendaItems: [
        {
          id: 1,
          time: "8:30 am",
          title: "Recepción",
          type: "break",
          image: "../assets/img/icons/edit.png",
          expandable: false
        },
        {
          id: 2,
          time: "9:30 am",
          title: "Bienvenida a cargo de Entel",
          type: "break",
          image: "../assets/img/icons/entel.png",
          expandable: false
        },
        {
          id: 3,
          time: "9:50 am",
          title: "Digitalización en el mundo de los negocios en Perú",
          tag: "Charla de apertura",
          expandable: true,
          expanded: false,
          image: "../assets/img/icons/speaker.png",
          description: "Cuál es el impacto de la digitalización en la economía empresarial peruana, identificando tendencias, desafíos y oportunidades que enfrentan las empresas al adoptar tecnologías digitales y cómo esto transforma sectores clave para impulsar el crecimiento y la eficiencia en los negocios.",
          speaker: {
            name: "Iván Portocaero",
            foto: "../assets/img/expositores/ivan_portocarrero.png",
            title: "Director de Análisis Estratégico del Sector de Energía y Telecomunicaciones"
          }
        },
        {
          id: 4,
          time: "10:30 am",
          title: "La IA en el negocio, ¿están listos para trabajar con un copilot?",
          tag: "Microsoft",
          expandable: true,
          expanded: false,
          image: "../assets/img/icons/speaker.png",
          description: "Cómo la Inteligencia Artificial está siendo la ser una promesa futura para convertirse en una herramienta concreta en la forma de decisiones, la productividad y la innovación.",
          speaker: {
            name: "Raul Campos",
            foto: "../assets/img/expositores/raul_campos.png",
            title: "Microsoft Channel Sales Manager"
          }
        },
        {
          id: 5,
          time: "11:20 am",
          title: "Optimiza operaciones, mejora la eficiencia y eleva la seguridad con OPTI ONE",
          tag: "OPTI",
          expandable: true,
          expanded: false,
          image: "../assets/img/icons/speaker.png",
          description: "Cómo la Plataforma OPTI ONE permite que las organizaciones optimicen de forma centralizada sus capacidades únicas transformando la productividad y liderando el cambio. Mejorando las operaciones del negocio, aumentando la productividad y fortaleciendo la seguridad.",
          speaker: {
            name: "José Antonio Martínez",
            foto: "../assets/img/expositores/jose_antonio_martinez.png",
            title: "Business Partner and Alliances Sales LATAM"
          }
        },
        {
          id: 6,
          time: "12:00 pm",
          title: "De Red Segura la Seguridad como Servicio. El Camino hacia SASE",
          tag: "Fortinet",
          expandable: true,
          expanded: false,
          image: "../assets/img/icons/speaker.png",
          description: "La evolución de la seguridad perimetral hacia SASE marca un cambio fundamental en seguridad y conectividad en la nube con inteligencia artificial para anticipar amenazas. Esto permite una protección más ágil y coherente en el entorno digital actual que se adapta a las necesidades empresariales actuales y futuras con una experiencia continua e inteligente.",
          speaker: {
            name: "Tomás Azmat",
            foto: "../assets/img/expositores/jose_antonio_martinez.png",
            title: "SE Technical Engineer"
          }
        },
        {
          id: 7,
          time: "12:40 pm",
          title: "Coffee Break",
          type: "break",
          image: "../assets/img/icons/coffee.png",
          expandable: false
        },
        {
          id: 8,
          time: "1:20 pm",
          title: "Mejorando la experiencia del cliente con IA conversacional",
          tag: "Vonage",
          expandable: true,
          expanded: false,
          image: "../assets/img/icons/speaker.png",
          description: "Cómo la IA conversacional está cambiando la forma en que las empresas gestionan la relación con sus clientes. Ofrecemos soluciones de vanguardia que permiten a las organizaciones brindar un servicio personalizado y eficiente a través de canales digitales que se conectan.",
          speaker: {
            name: "Maurice Falcón",
            foto: "../assets/img/expositores/maurice_falcon.png",
            title: "Customer Growth Executive"
          }
        },
        {
          id: 9,
          time: "2:00 pm",
          title: "Haz Acti tu Antivirus: Cómo Modernizar la Gestión y Seguridad de TI con Acronis",
          tag: "Acronis",
          expandable: true,
          expanded: false,
          image: "../assets/img/icons/speaker.png",
          description: "Descubre cómo modernizar la seguridad de TI con Acronis, integrando protección avanzada, automatización y gestión simplificada para enfrentar las amenazas actuales de manera eficaz.",
          speaker: {
            name: "Guillermo Márquez",
            foto: "../assets/img/expositores/guillermo_marquez.png",
            title: "Senior Especialista Acronis"
          }
        },
        {
          id: 10,
          time: "2:40 pm",
          title: "Innovación sin Límites: El Enfoque APM para la Transformación de Negocios",
          tag: "Atlassian Web Services",
          expandable: true,
          expanded: false,
          image: "../assets/img/icons/speaker.png",
          description: "Explora la innovación con nuestras soluciones avanzadas que potencian empresas a través del Application Performance Monitoring (APM). Descubre cómo nuestras herramientas transforman los procesos empresariales, optimizan la experiencia del cliente e impulsan la transformación digital y la innovación en cada proyecto de negocios.",
          speaker: {
            name: "Diego Silva",
            foto: "../assets/img/expositores/diego_silva.png",
            title: "Territory Manager AWS Perú"
          }
        },
        {
          id: 11,
          time: "3:20 pm",
          title: "Cierre",
          type: "closing",
          image: "../assets/img/icons/handshake.png",
          expandable: false
        }
      ],
      partners: [
        {
          name: "Acronis",
          logo: "../assets/img/marcas/acronis.png"
        },
        {
          name: "AWS",
          logo: "../assets/img/marcas/aws.png"
        },
        {
          name: "Fortinet",
          logo: "../assets/img/marcas/fortinet.png"
        },
        {
          name: "Honor",
          logo: "../assets/img/marcas/honor.png"
        },
        {
          name: "Infobip",
          logo: "../assets/img/marcas/infobip.png"
        },
        {
          name: "Microsoft",
          logo: "../assets/img/marcas/microsoft.png"
        },
        {
          name: "Samsung",
          logo: "../assets/img/marcas/samsung.png"
        },
        {
          name: "Soti",
          logo: "../assets/img/marcas/soti.png"
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
    const eventModule = useEvent();
    useRoute();
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(eventModule).event) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full bg-darkblue" }, _attrs))} data-v-9646913d><section class="relative h-screen fondo-hero-2" data-v-9646913d><div class="relative isolate pt-14 h-full w-full" data-v-9646913d><div class="container-2 w-full h-full flex flex-col justify-start md:justify-center" data-v-9646913d><div class="flex flex-col items-center justify-center text-white text-sm" data-v-9646913d><div class="items-center justify-center" data-v-9646913d><img${ssrRenderAttr("src", _imports_1$1)} alt="Empower Logo" class="logo-entel-xl inline-block h-10 mr-2" data-v-9646913d></div></div><div class="w-full shake-vertical relative z-20 mt-16 block md:hidden" data-v-9646913d><div class="flex flex-col items-center justify-center text-white text-sm" style="${ssrRenderStyle({ "letter-spacing": "0.16rem" })}" data-v-9646913d><span data-v-9646913d>CONTINUA BAJANDO</span><span data-v-9646913d><svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-9646913d><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" data-v-9646913d></path></svg></span></div></div></div></div><div class="shake-vertical absolute left-0 right-0 bottom-12 md:bottom-16 z-20 hidden md:block" data-v-9646913d><div class="flex flex-col items-center justify-center text-white text-sm" style="${ssrRenderStyle({ "letter-spacing": "0.16rem" })}" data-v-9646913d><span data-v-9646913d>CONTINUA BAJANDO</span><span data-v-9646913d><svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-9646913d><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" data-v-9646913d></path></svg></span></div></div></section><main class="bg-darkblue" data-v-9646913d><section class="container-2 w-full h-full flex flex-col mt-12 pb-4" data-v-9646913d><div class="md:flex flex-wrap sm-pr-0" data-v-9646913d><div class="w-full md:w-1/2 md:min-w-50" data-v-9646913d><div class="flex pr-4" data-v-9646913d><article class="gap-16 items-center justify-center lg:min-h-64 flex flex-col lg:flex-row w-full relative overflow-hidden bg-gray rounded-2xl" data-v-9646913d><div class="items-center justify-center" data-v-9646913d><span class="text-gradient" data-v-9646913d>Sumérgete en el futuro de la tecnología y la innovación</span></div></article></div></div><div class="w-full md:w-1/2 md:min-w-50" data-v-9646913d><div class="flex pr-4" data-v-9646913d><article class="gap-16 items-center justify-center lg:min-h-64 flex flex-col lg:flex-row w-full relative overflow-hidden bg-gray rounded-2xl" data-v-9646913d><div class="items-center justify-center" data-v-9646913d><span class="text-par" data-v-9646913d>Únete a líderes de la industria y nuestros partners estratégicos en un espacio diseñado para compartir conocimientos, descubrir nuevas soluciones tecnológicas y fortalecer conexiones clave. Disfruta de conferencias de alto nivel que impulsarán el crecimiento de tu empresa en un entorno de constante evolución, brindándote herramientas para avanzar en el camino hacia la transformación digital.</span></div></article></div></div></div></section><section class="container-2 w-full h-full flex flex-col mt-12 pb-4" data-v-9646913d><div class="event-details-card" data-v-9646913d><h2 class="event-title" data-v-9646913d>Detalles del evento</h2><div class="event-info-container" data-v-9646913d><div class="info-section" data-v-9646913d><div class="info-header" data-v-9646913d><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-9646913d><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-v-9646913d></rect><line x1="16" y1="2" x2="16" y2="6" data-v-9646913d></line><line x1="8" y1="2" x2="8" y2="6" data-v-9646913d></line><line x1="3" y1="10" x2="21" y2="10" data-v-9646913d></line></svg><span class="info-label" data-v-9646913d>Fecha</span></div><p class="info-value" data-v-9646913d>10 de Julio, 2025</p></div><div class="separator" data-v-9646913d></div><div class="info-section" data-v-9646913d><div class="info-header" data-v-9646913d><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-9646913d><circle cx="12" cy="12" r="10" data-v-9646913d></circle><polyline points="12,6 12,12 16,14" data-v-9646913d></polyline></svg><span class="info-label" data-v-9646913d>Hora</span></div><p class="info-value" data-v-9646913d>8:30 am – 1:00 pm</p></div><div class="separator" data-v-9646913d></div><div class="info-section" data-v-9646913d><div class="info-header" data-v-9646913d><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-9646913d><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-9646913d></path><circle cx="12" cy="10" r="3" data-v-9646913d></circle></svg><span class="info-label" data-v-9646913d>Lugar</span></div><p class="info-value" data-v-9646913d>The Westin Lima Hotel </p><p class="info-address" data-v-9646913d>Av. Las Begonias 450, San Isidro</p></div></div></div></section><section class="container-2 w-full h-full flex flex-col mt-12 pb-4" data-v-9646913d><div class="topics-carousel" data-v-9646913d><div class="container" data-v-9646913d><h2 class="title text-gradient" data-v-9646913d>Temas Principales</h2><div class="carousel-container" data-v-9646913d><div class="carousel-track" style="${ssrRenderStyle({ transform: `translateX(-${_ctx.currentIndex * (100 / 3)}%)` })}" data-v-9646913d><!--[-->`);
        ssrRenderList(_ctx.topics, (topic, index2) => {
          _push(`<div class="topic-card-wrapper" data-v-9646913d><div class="topic-card" style="${ssrRenderStyle([{ background: "url(" + topic.background + ")" }, { "background-repeat": "no-repeat", "background-size": "cover", "background-position": "center" }])}" data-v-9646913d><div class="card-bg-effect" data-v-9646913d></div><h3 class="topic-title" data-v-9646913d>${ssrInterpolate(topic.title)}</h3><div class="shine-effect" data-v-9646913d></div></div></div>`);
        });
        _push(`<!--]--></div><button class="nav-button" data-v-9646913d><img${ssrRenderAttr("src", _imports_1)} alt="Next" class="arrow-icon" data-v-9646913d></button></div></div></div></section><section class="container-2 w-full h-full flex flex-col mt-12 pb-4" data-v-9646913d><div class="w-full agenda-container items-center justify-center" data-v-9646913d><div class="items-center" data-v-9646913d><h2 class="title text-gradient title-center" data-v-9646913d>Agenda Empower Summit</h2></div><!--[-->`);
        ssrRenderList(_ctx.agendaItems, (item) => {
          _push(`<div class="${ssrRenderClass(["agenda-item", {
            "closing-item": item.expanded === true,
            " ": item.expanded === false
          }])}" data-v-9646913d><div class="agenda-header" data-v-9646913d><div class="agenda-info" data-v-9646913d><div class="time-icon" data-v-9646913d><img class="agenda-ico"${ssrRenderAttr("src", item.image)} data-v-9646913d></div><div class="agenda-details" data-v-9646913d><div class="agenda-time" data-v-9646913d>${ssrInterpolate(item.time)}</div><h3 data-v-9646913d>${ssrInterpolate(item.title)}</h3>`);
          if (item.tag) {
            _push(`<div class="agenda-tag" data-v-9646913d>${ssrInterpolate(item.tag)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="agenda-controls" data-v-9646913d>`);
          if (item.expandable) {
            _push(`<div class="${ssrRenderClass(["expand-icon", { "rotated": item.expanded }])}" data-v-9646913d><img${ssrRenderAttr("src", _imports_2)} alt="Next" class="arrow-icon" data-v-9646913d></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
          if (item.expandable && item.expanded) {
            _push(`<div class="agenda-content" data-v-9646913d><div class="content-inner" data-v-9646913d><div class="linea-speaker" data-v-9646913d><span class="span-linear" data-v-9646913d></span></div><p class="description" data-v-9646913d>${ssrInterpolate(item.description)}</p>`);
            if (item.speaker) {
              _push(`<div class="speaker" data-v-9646913d><div class="speaker-info" data-v-9646913d><h4 data-v-9646913d>${ssrInterpolate(item.speaker.name)}</h4><div class="speaker-title" data-v-9646913d>${ssrInterpolate(item.speaker.title)}</div></div><div class="speaker-avatar" data-v-9646913d><img${ssrRenderAttr("src", item.speaker.foto)} data-v-9646913d></div></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></section><section class="container-2 w-full h-full flex flex-col mt-12 pb-4" data-v-9646913d><h2 class="title text-gradient" data-v-9646913d>Partners</h2><div class="marentel-partners-carousel" data-v-9646913d><div class="marentel-carousel-container" data-v-9646913d><div class="marentel-carousel-wrapper" data-v-9646913d><div class="marentel-carousel-track" style="${ssrRenderStyle({ transform: `translateX(-${_ctx.currentIndexMarentel * _ctx.itemWidth}px)` })}" data-v-9646913d><!--[-->`);
        ssrRenderList(_ctx.extendedPartners, (partner, index2) => {
          _push(`<div class="marentel-carousel-item" data-v-9646913d><div class="marentel-partner-card" data-v-9646913d><img${ssrRenderAttr("src", partner.logo)}${ssrRenderAttr("alt", `${partner.name} logo`)} class="marentel-partner-logo" data-v-9646913d><span class="marentel-partner-name" data-v-9646913d>${ssrInterpolate(partner.name)}</span></div></div>`);
        });
        _push(`<!--]--></div></div></div></div></section><section class="container-fluid w-full h-footer bg-darkblue" data-v-9646913d><div class="container h-full" data-v-9646913d><div class="w-full h-full flex items-center justify-between my-auto" data-v-9646913d><span class="font-normal text-xs text-white" data-v-9646913d>Copyright ${ssrInterpolate(unref(currentYear))}. Todos los derechos reservados.</span><a href="#" class="-m-1.5 p-1.5" data-v-9646913d><img class="h-8 w-auto"${ssrRenderAttr("src", _imports_0)} alt="" data-v-9646913d></a></div></div></section></main></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_9646913d_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/event/empower/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9646913d"]]);
export {
  index as default
};
//# sourceMappingURL=index-67bc384f.js.map
