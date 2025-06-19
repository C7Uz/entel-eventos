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

		</main>
	</div>
</template>



<script lang="ts">
export default {
  name: 'TopicsCarousel',
  data() {
    return {
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
      ]
    }
  },
  methods: {
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
    }
  }
}
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

.topic-card:hover {
  transform: scale(1.05);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.2);
  background: rgba(59, 130, 246, 0.1);
}

.card-bg-effect {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  border-radius: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.topic-card:hover .card-bg-effect {
  opacity: 1;
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

.topic-card:hover .icon-wrapper {
  background: rgba(59, 130, 246, 0.4);
  transform: scale(1.1);
}

.topic-icon {
  font-size: 2rem;
  color: #60a5fa;
  transition: color 0.3s ease;
}

.topic-card:hover .topic-icon {
  color: #93c5fd;
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
</style>