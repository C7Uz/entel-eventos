<template>
  <div class="topics-carousel">
    <div class="container">
      <!-- Título -->
      <h2 class="title">Temas Principales</h2>

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
            <div class="topic-card" @click="handleTopicClick(topic)">
              <!-- Efectos de fondo -->
              <div class="card-bg-effect"></div>
              
              <!-- Ícono -->
              <div class="icon-container">
                <div class="icon-wrapper">
                  <i :class="topic.icon" class="topic-icon"></i>
                </div>
              </div>

              <!-- Título -->
              <h3 class="topic-title">{{ topic.title }}</h3>

              <!-- Efecto de brillo -->
              <div class="shine-effect"></div>
            </div>
          </div>
        </div>

        <!-- Botón de navegación -->
        <button @click="nextSlide" class="nav-button">
          <i class="arrow-icon">→</i>
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
</template>

<script >
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
          title: "Automatización y Gestión Inteligente",
          icon: "fas fa-cogs",
          gradient: "from-purple-500 to-pink-500"
        },
        {
          id: 5,
          title: "Análisis de Datos",
          icon: "fas fa-chart-bar",
          gradient: "from-cyan-500 to-blue-500"
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
    goToSlide(index) {
      this.currentIndex = index;
    },
    handleTopicClick(topic) {
      this.$emit('topic-selected', topic);
      console.log('Tema seleccionado:', topic.title);
    }
  }
}
</script>

<style scoped>
.topics-carousel {
  width: 100%;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  padding: 4rem 1.5rem;
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
  gap: 1.5rem;
  width: calc(100% * 5 / 3); /* Ajusta según el número de items */
}

.topic-card-wrapper {
  flex: 0 0 calc(33.333% - 1rem);
  padding: 0 0.75rem;
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
  justify-content: center;
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
  right: 0;
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
    padding: 2rem 1rem;
  }
  
  .title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .carousel-track {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
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