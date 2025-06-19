<script setup lang="ts">
import { useSetting } from '~/store/modules/setting.module'
import { useEvent } from '~/store/modules/event.module'
import TopicsCarousel from './components/TopicsCarousel.vue'

const settingModule = useSetting()
const eventModule = useEvent()
const route = useRoute()



onBeforeMount(async () => {
	/* @ts-ignore */
	fbq('track', 'PageView');

	/* @ts-ignore */
	window.teads_e = window.teads_e || [];
	/* @ts-ignore */
	window.teads_buyer_pixel_id = 9922;
	
	settingModule.setTheme('theme-color')
	settingModule.setShowFooter(false)
	settingModule.setShowHeader(true)

	await eventModule.findOne('TRUJILLO')
	if(!eventModule.event){
		window.location.href = '/';
	}

	settingModule.setEventId('TRUJILLO')

})
 
</script>
<template>
	<div class="w-full h-full bg-darkblue" v-if="eventModule.event">
		<section 
		class="relative h-screen fondo-hero" >
			
		
				<div class="relative isolate pt-14 h-full w-full">
				

					<div class="container-2 w-full h-full flex flex-col justify-start md:justify-center ">
						<div class="flex flex-col items-center justify-center text-white text-sm">
							 	<div class="items-center justify-center"  > 
												<img  src="~/public/assets/img/empower-logo.png" alt="Empower Logo" class="logo-entel-xl inline-block h-10 mr-2" />
								 				 
										</div>
						</div>
						<div class="w-full shake-vertical relative z-20 mt-16 block md:hidden">
							<div class="flex flex-col items-center justify-center text-white text-sm" style="letter-spacing: 0.16rem;">
								<span>CONTINUA BAJANDO</span>
								<span>
									<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/>
									</svg>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div class="shake-vertical absolute left-0 right-0 bottom-12 md:bottom-16 z-20 hidden md:block">
					<div class="flex flex-col items-center justify-center text-white text-sm" style="letter-spacing: 0.16rem;">
						<span>CONTINUA BAJANDO</span>
						<span>
							<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/>
							</svg>
						</span>
					</div>
				</div>
		</section>
		  
		<main class="bg-darkblue">
		 <section class="container-2 w-full h-full flex flex-col mt-12 pb-4">
				 <div class=" md:flex flex-wrap sm-pr-0">
				<div class=" min-w-50 w-1/2 "  >
					<div class=" flex pr-4" >
						<article  class="items-center justify-center min-h-64 flex flex-col lg:flex-row  w-full relative overflow-hidden bg-gray rounded-2xl">
							<div class="items-center justify-center"  > 
								<span class="text-gradient">Sumérgete en el futuro de la tecnología y la innovación</span>
							</div>
						</article>
					</div>
				</div>
				<div class=" min-w-50 w-1/2  "  >
					<div class=" flex pr-4" >
						<article  class="wdt-t items-center justify-center min-h-64 flex flex-col lg:flex-row  w-full relative overflow-hidden bg-gray rounded-2xl">
								<div class="items-center justify-center"  > 
								<span class="text-par">Únete a líderes de la industria y nuestros partners estratégicos en un espacio diseñado para compartir conocimientos, descubrir nuevas soluciones tecnológicas y fortalecer conexiones clave. Disfruta de conferencias de alto nivel que impulsarán el crecimiento de tu empresa en un entorno de constante evolución, brindándote herramientas para avanzar en el camino hacia la transformación digital.</span>
							</div>
						</article>
					</div>
				</div>
			
			</div>
			</section>
			<section class="container-2 w-full h-full flex flex-col mt-12 pb-4"> 
								<div class="event-details-card">
					<h2 class="event-title">Detalles del evento</h2>
					
					<div class="event-info-container">
					<!-- Fecha -->
					<div class="info-section">
						<div class="info-header">
						<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
							<line x1="16" y1="2" x2="16" y2="6"/>
							<line x1="8" y1="2" x2="8" y2="6"/>
							<line x1="3" y1="10" x2="21" y2="10"/>
						</svg>
						<span class="info-label">Fecha</span>
						</div>
						<p class="info-value">10 de Julio, 2025</p>
					</div>

					<!-- Separador vertical -->
					<div class="separator"></div>

					<!-- Hora -->
					<div class="info-section">
						<div class="info-header">
						<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<circle cx="12" cy="12" r="10"/>
							<polyline points="12,6 12,12 16,14"/>
						</svg>
						<span class="info-label">Hora</span>
						</div>
						<p class="info-value">8:30 am – 1:00 pm</p>
					</div>

					<!-- Separador vertical -->
					<div class="separator"></div>

					<!-- Lugar -->
					<div class="info-section">
						<div class="info-header">
						<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
							<circle cx="12" cy="10" r="3"/>
						</svg>
						<span class="info-label">Lugar</span>
						</div>
						<p class="info-value">The Westin Lima Hotel </p>
						<p class="info-address">Av. Las Begonias 450, San Isidro</p>
					</div>
					</div>
				</div>
				
			</section>
			<section class="container-2 w-full h-full flex flex-col mt-12 pb-4"> 
					<div class="topics-carousel">
    <div class="container">
      <!-- Título -->
      <h2 class="title text-gradient">Temas Principales</h2>

      <!-- Contenedor del carrusel -->
      <div class="carousel-container">
        <div 
          class="carousel-track"
          :style="{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }"
        >
          <div
            v-for="(topic, index) in topics"
            :key="topic.id"
            class="topic-card-wrapper"
          >
            <div class="topic-card"  @click="handleTopicClick(topic)" v-bind:style="{ background: 'url('+topic.background+')' }"
			style="background-repeat: no-repeat; background-size: cover; background-position: center;">
              <!-- Efectos de fondo -->
              <div class="card-bg-effect"></div>
              
              <!-- Ícono -->
             

              <!-- Título -->
              <h3 class="topic-title">{{ topic.title }}</h3>

              <!-- Efecto de brillo -->
              <div class="shine-effect"></div>
            </div>
          </div>
        </div>

        <!-- Botón de navegación -->
        <button @click="nextSlide" class="nav-button">
          <img src="~/public/assets/img/arrow_right.svg" alt="Next" class="arrow-icon" />
        </button>
      </div>

      <!-- Indicadores de página -->
      <div class="indicators">
        <button
          v-for="(_, index) in Math.max(1, topics.length - 2)"
          :key="index"
          @click="goToSlide(index)"
          :class="['indicator', { active: index === currentIndex }]"
        ></button>
      </div>
    </div>
  </div>
			</section>

      <section class="container-2 w-full h-full flex flex-col mt-12 pb-4 ">
          <div class="w-full agenda-container items-center justify-center">
               <div class="items-center"> <h2 class="title text-gradient">Agenda Empower Summit</h2></div>
              <div 
                v-for="item in agendaItems" 
                :key="item.id" 
                :class="['agenda-item', { 
                  'break-item': item.type === 'break', 
                  'closing-item': item.type === 'closing' 
                }]"
                @click="item.expandable ? toggleExpand(item.id) : null"
              >
                <div class="agenda-header">
                  <div class="agenda-info">
                    <div class="time-icon"><img class="agenda-ico" :src="item.image" /></div>
                    <div class="agenda-details">
                      <h3>{{ item.title }}</h3>
                      <div class="agenda-time">{{ item.time }}</div>
                      <div v-if="item.tag" class="agenda-tag">{{ item.tag }}</div>
                    </div>
                    
                  </div>
                  
                  <div class="agenda-controls">
                    
                    <div 
                      v-if="item.expandable" 
                      :class="['expand-icon', { 'rotated': item.expanded }]"
                    >
                      <img src="~/public/assets/img/icons/icon_arrow.png" alt="Next" class="arrow-icon" />
                    </div>
                  </div>
                </div>
                
                <transition name="expand">
                 
                  <div v-if="item.expandable && item.expanded" class="agenda-content">
                    <div class="content-inner">
                       <div class="linea-speaker"> 
                          <span class="span-linear"></span>
                        </div>
                      <p class="description">{{ item.description }}</p>
                      <div v-if="item.speaker" class="speaker">
                        <div class="speaker-info">
                          <h4>{{ item.speaker.name }}</h4>
                          <div class="speaker-title">{{ item.speaker.title }}</div>
                        </div>
                        <div class="speaker-avatar"><img   :src="item.speaker.foto" /></div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
      </section>


		</main>
	</div>
</template>


<script lang="ts">
export default {
  name: 'EmpowerSummitPage', // Combined name or choose one
  data() {
    return {
      // Topics Carousel data
      currentIndex: 0,
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
          id: 6,
          title: "Análisis de Datos",
          icon: "fas fa-chart-bar",
          gradient: "from-cyan-500 to-blue-500",
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
          time: '8:30 am',
          title: 'Recepción',
          type: 'break',
          image: '../assets/img/icons/edit.png',
          expandable: false
        },
        {
          id: 2,
          time: '9:30 am',
          title: 'Bienvenida a cargo de Entel',
          type: 'break',
          image: '../assets/img/icons/entel.png',
          expandable: false
        },
        {
          id: 3,
          time: '9:50 am',
          title: 'Digitalización en el mundo de los negocios en Perú',
          tag: 'Charla de apertura',
          expandable: true,
          expanded: false,
          image: '../assets/img/icons/speaker.png',
          description: 'Cuál es el impacto de la digitalización en la economía empresarial peruana, identificando tendencias, desafíos y oportunidades que enfrentan las empresas al adoptar tecnologías digitales y cómo esto transforma sectores clave para impulsar el crecimiento y la eficiencia en los negocios.',
          speaker: {
            name: 'Iván Portocaero',
            foto: '../assets/img/expositores/ivan_portocarrero.png', 
            title: 'Director de Análisis Estratégico del Sector de Energía y Telecomunicaciones'
          }
        },
        {
          id: 4,
          time: '10:30 am',
          title: 'La IA en el negocio, ¿están listos para trabajar con un copilot?',
          tag: 'Microsoft',
          expandable: true,
          expanded: false,
          image: '../assets/img/icons/speaker.png',
          description: 'Cómo la Inteligencia Artificial está siendo la ser una promesa futura para convertirse en una herramienta concreta en la forma de decisiones, la productividad y la innovación.',
          speaker: {
            name: 'Raul Campos',
            foto: '../assets/img/expositores/raul_campos.png',
            title: 'Microsoft Channel Sales Manager'
          }
        },
        {
          id: 5,
          time: '11:20 am',
          title: 'Optimiza operaciones, mejora la eficiencia y eleva la seguridad con OPTI ONE',
          tag: 'OPTI',
          expandable: true,
          expanded: false,
          image: '../assets/img/icons/speaker.png',
          description: 'Cómo la Plataforma OPTI ONE permite que las organizaciones optimicen de forma centralizada sus capacidades únicas transformando la productividad y liderando el cambio. Mejorando las operaciones del negocio, aumentando la productividad y fortaleciendo la seguridad.',
          speaker: {
            name: 'José Antonio Martínez',
            foto: '../assets/img/expositores/jose_antonio_martinez.png', 
            title: 'Business Partner and Alliances Sales LATAM'
          }
        },
        {
          id: 6,
          time: '12:00 pm',
          title: 'De Red Segura la Seguridad como Servicio. El Camino hacia SASE',
          tag: 'Fortinet',
          expandable: true,
          expanded: false,
          image: '../assets/img/icons/speaker.png',
          description: 'La evolución de la seguridad perimetral hacia SASE marca un cambio fundamental en seguridad y conectividad en la nube con inteligencia artificial para anticipar amenazas. Esto permite una protección más ágil y coherente en el entorno digital actual que se adapta a las necesidades empresariales actuales y futuras con una experiencia continua e inteligente.',
          speaker: {
            name: 'Tomás Azmat',
            foto: '../assets/img/expositores/jose_antonio_martinez.png', 
            title: 'SE Technical Engineer'
          }
        },
        {
          id: 7,
          time: '12:40 pm',
          title: 'Coffee Break',
          type: 'break',
          image: '../assets/img/icons/coffee.png',
          expandable: false
        },
        {
          id: 8,
          time: '1:20 pm',
          title: 'Mejorando la experiencia del cliente con IA conversacional',
          tag: 'Vonage',
          expandable: true,
          expanded: false,
          image: '../assets/img/icons/speaker.png',
          description: 'Cómo la IA conversacional está cambiando la forma en que las empresas gestionan la relación con sus clientes. Ofrecemos soluciones de vanguardia que permiten a las organizaciones brindar un servicio personalizado y eficiente a través de canales digitales que se conectan.',
          speaker: {
            name: 'Maurice Falcón',
            foto: '../assets/img/expositores/maurice_falcon.png',
            title: 'Customer Growth Executive'
          }
        },
        {
          id: 9,
          time: '2:00 pm',
          title: 'Haz Acti tu Antivirus: Cómo Modernizar la Gestión y Seguridad de TI con Acronis',
          tag: 'Acronis',
          expandable: true,
          expanded: false,
          image: '../assets/img/icons/speaker.png',
          description: 'Descubre cómo modernizar la seguridad de TI con Acronis, integrando protección avanzada, automatización y gestión simplificada para enfrentar las amenazas actuales de manera eficaz.',
          speaker: {
            name: 'Guillermo Márquez',
            foto: '../assets/img/expositores/guillermo_marquez.png',
            title: 'Senior Especialista Acronis'
          }
        },
        {
          id: 10,
          time: '2:40 pm',
          title: 'Innovación sin Límites: El Enfoque APM para la Transformación de Negocios',
          tag: 'Atlassian Web Services',
          expandable: true,
          expanded: false,
          image: '../assets/img/icons/speaker.png',
          description: 'Explora la innovación con nuestras soluciones avanzadas que potencian empresas a través del Application Performance Monitoring (APM). Descubre cómo nuestras herramientas transforman los procesos empresariales, optimizan la experiencia del cliente e impulsan la transformación digital y la innovación en cada proyecto de negocios.',
          speaker: {
            name: 'Diego Silva',
            foto: '../assets/img/expositores/diego_silva.png',
            title: 'Territory Manager AWS Perú'
          }
        },
        {
          id: 11,
          time: '3:20 pm',
          title: 'Cierre',
          type: 'closing',
          image: '../assets/img/icons/handshake.png',
          expandable: false
        }
      ]
    }
  },
  methods: {
    // Topics Carousel methods
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % Math.max(1, this.topics.length - 2);
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + Math.max(1, this.topics.length - 2)) % Math.max(1, this.topics.length - 2);
    },
    goToSlide(index: number) {
      this.currentIndex = index;
    },
    handleTopicClick(topic: { id: number; title: string; icon: string; gradient: string; background: string }) {
      this.$emit('topic-selected', topic);
      console.log('Tema seleccionado:', topic.title);
    },
    // Agenda methods
    toggleExpand(itemId: number) {
      const item = this.agendaItems.find(item => item.id === itemId)
      if (item) {
        item.expanded = !item.expanded
      }
    },
    getInitials(name: string) {
      return name.split(' ').map(word => word[0]).join('').toUpperCase()
    }
  }
};
</script>

<style scoped lang="scss">
	@import '@/public/assets/scss/app.scss';

.event-details-card {
  border-radius: 32px;
background: linear-gradient(180deg, #021E60 0%, #0C0C2A 100%);
  padding: 32px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  max-width: 900px;
 
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.event-title {
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 48px 0;
  letter-spacing: -0.025em;
}

.event-info-container {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}

.info-section {
  flex: 1;
  min-width: 0;
}

.info-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.icon {
  width: 20px;
  height: 20px;
	color:  #B7C4FF;
  flex-shrink: 0;
}

.info-label {
  font-size: 0.9rem;
	color:  #B7C4FF;
  font-weight: 500;
}

.info-value {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
  color: white;
}

.info-address {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 4px 0 0 0;
  line-height: 1.4;
}

.separator {
  width: 1px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  margin-top: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .event-details-card {
    padding: 24px;
    border-radius: 20px;
  }
  
  .event-title {
    font-size: 1.5rem;
    margin-bottom: 32px;
  }
  
  .event-info-container {
    flex-direction: column;
    gap: 24px;
  }
  
  .separator {
    display: none;
  }
  
  .info-value {
	color:  #B7C4FF;
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .event-details-card {
    padding: 20px;
    margin: 16px;
  }
  
  .event-title {
    font-size: 1.25rem;
  }
  
  .info-value {
	color:  white;
    font-size: 1rem;
  }
  
  .info-address {
    font-size: 0.9rem;
  }
}


.topics-carousel {
  width: 100%;  
  min-height: 500px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
  letter-spacing: -0.025em;
}

.carousel-container {
  position: relative;
  overflow: hidden; 
}

.carousel-track {
  display: flex; 
 gap: 1.5rem;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); 
  width: calc(100% * 5 / 3); /* Ajusta según el número de items */
}

.topic-card-wrapper {
  flex: 0 0 calc(25% - 1rem);
  padding: 0 0.75rem;
	padding-top: 0 0.75rem;
  padding-bottom: 0 0.75rem;
}

.topic-card {
  position: relative;
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
 
.card-bg-effect {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  border-radius: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}
 

.icon-container {
  position: relative;
  z-index: 10;
  margin-bottom: 1.5rem;
}

.icon-wrapper {
  padding: 1rem;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;
}
 

.topic-icon {
  font-size: 2rem;
  color: #60a5fa;
  transition: color 0.3s ease;
}
 

.topic-title {
  position: relative;
  z-index: 10;
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.4;
  margin: 0;
}

.shine-effect {
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: translateX(-100%) skewX(-12deg);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.topic-card:hover .shine-effect {
  opacity: 1;
  animation: shine 2s ease-in-out infinite;
}

@keyframes shine {
  0% { transform: translateX(-100%) skewX(-12deg); }
  100% { transform: translateX(300%) skewX(-12deg); }
}

.nav-button {
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%) translateX(1rem);
  z-index: 10;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.3);
}

.nav-button:hover {
  background: #1d4ed8;
  transform: translateY(-50%) translateX(1rem) scale(1.1);
  box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.5);
}

.nav-button:focus {
  outline: none;
  ring: 2px solid #60a5fa;
  ring-offset: 2px;
  ring-offset-color: #0f172a;
}

.arrow-icon {
  font-size: 1.5rem;
  font-style: normal;
}

.indicators {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
}

.indicator {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.5);
}

.indicator.active {
  background: #3b82f6;
  width: 2rem;
  border-radius: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .topics-carousel {
    
  }
  
  .title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .carousel-track {
    flex-direction: column;
    width: 100%;   
  }
  
  .topic-card-wrapper {
    flex: none;
    width: 100%;
    padding: 0;
  }
  
  .topic-card {
    height: 12rem;
    padding: 1.5rem;
  }
  
  .nav-button {
    display: none;
  }
  
  .indicators {
    display: none;
  }
}

@media (max-width: 480px) {
  .topic-card {
    height: 10rem;
    padding: 1rem;
  }
  
  .topic-title {
    font-size: 1rem;
  }
  
  .topic-icon {
    font-size: 1.5rem;
  }
  
  .icon-wrapper {
    padding: 0.75rem;
  }
}

.agenda-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  min-height: 100vh;
  color: white;
}

.agenda-title {
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 40px;
  color: #e0e6ed;
}

.agenda-item {
border-radius: 32px;
border: 1px solid rgba(255, 255, 255, 0.16);
background: rgba(0, 17, 92, 0.40);
backdrop-filter: blur(17.100000381469727px);

display: flex;
padding: 24px 24px 32px 24px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 24px;
align-self: stretch;

  margin-bottom: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.agenda-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.break-item,
.closing-item {
  border-radius: 32px;
border: 1px solid rgba(255, 255, 255, 0.08);
background: rgba(31, 31, 82, 0.24);
backdrop-filter: blur(17.100000381469727px);  
  cursor: default;
  display: flex;
padding: 24px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
align-self: stretch;
}

.break-item:hover,
.closing-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: none;
}

.closing-item {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.agenda-header {
  display: flex;
align-items: center;
gap: 16px;
align-self: stretch;
width: 100%;
}

.agenda-info {
 
width: 100%;
  display: flex;
align-items: center;
gap: 16px;
align-self: stretch;
}
.agenda-ico{
  width: 24px;
height: 24px;
aspect-ratio: 1/1;
}

.time-icon {
  width: 48px;
  height: 48px;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.agenda-details h3 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
  margin: 0;
gap: 16px;
  
}

.agenda-time {
  font-size: 14px;
  color: #b8c6db;
}

.agenda-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.agenda-tag {
  color: var(--primary-100, #B7C4FF);
align-self: stretch;
/* Medium/Small */
font-family: Barlow;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 19.6px */
}

.expand-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: right;
  justify-content: center;
  transition: transform 0.3s ease;
}

.expand-icon.rotated {
  transform: rotate(180deg);
}

.agenda-content {
  overflow: hidden;
}

.content-inner {
  display: flex;
flex-direction: column;
align-items: flex-start;
gap: 24px;
align-self: stretch;
}

.description {
  color:  #E5E6F4 ;
flex: 1 0 0;
/* Regular/Medium */
font-family: Barlow;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */

display: flex;
padding: 0px 52px;
justify-content: center;
align-items: center;
gap: 10px;
align-self: stretch;

}

.speaker {
 display: flex;
padding: 0px 52px;
align-items: center;
gap: 14px;
align-self: stretch;
}

.speaker-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  float: right;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 24px;
align-self: stretch;
}

.speaker-info h4 {
color: var(--on-white, #FFF); 
/* Medium/H6 */
font-family: Barlow;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 30px; /* 150% */

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 8px;
flex: 1 0 0;

}

.linea-speaker {
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 24px;
align-self: stretch;


}

.span-linear{
  background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(17.100000381469727px);
width: 100%;
height: 1px;

}

.speaker-title {
  color: var(--primary-100, #B7C4FF);
align-self: right;
  /* Regular/Small */
/* Regular/Small */
font-family: Barlow;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
}

/* Transiciones para el expand */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

</style>