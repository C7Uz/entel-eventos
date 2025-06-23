<template>
  <div class="cep-carousel-container">
    <div class="cep-carousel-wrapper">
      <!-- Botón izquierdo (solo visible después del primer movimiento) -->
      <button 
        v-if="cep_showLeftArrow" 
        @click="cep_slideLeft"
        class="cep-arrow cep-arrow-left"
        :disabled="cep_currentIndex === 0"
      >
        <svg class="cep-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>

      <!-- Contenedor del carrusel -->
      <div class="cep-carousel-track" ref="cep_carouselTrack">
        <div 
          class="cep-carousel-inner"
          :style="{ transform: `translateX(-${cep_currentIndex * cep_cardWidth}px)` }"
          @touchstart="cep_handleTouchStart"
          @touchmove="cep_handleTouchMove"
          @touchend="cep_handleTouchEnd"
          @mousedown="cep_handleMouseDown"
          @mousemove="cep_handleMouseMove"
          @mouseup="cep_handleMouseEnd"
          @mouseleave="cep_handleMouseEnd"
        >
          <!-- Cards del carrusel -->
          <div 
            v-for="(item, index) in cep_items" 
            :key="index"
            class="cep-carousel-card"
          >
            <div class="cep-card-content">
              <img :src="item.image" :alt="item.title" class="cep-card-image" />
              <div class="cep-card-info">
                <h3 class="cep-card-title">{{ item.title }}</h3>
                <p class="cep-card-description">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Botón derecho (siempre visible inicialmente) -->
      <button 
        @click="cep_slideRight"
        class="cep-arrow cep-arrow-right"
        :disabled="cep_currentIndex >= cep_maxIndex"
      >
        <svg class="cep-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CepCarousel',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      cep_currentIndex: 0,
      cep_showLeftArrow: false,
      cep_cardWidth: 280, // Ancho fijo de cada card
      cep_cardGap: 16, // Espacio entre cards
      cep_isDragging: false,
      cep_startX: 0,
      cep_currentX: 0,
      cep_threshold: 50 // Umbral mínimo para el arrastre
    }
  },
  computed: {
    cep_items() {
      return this.items.length > 0 ? this.items : this.cep_generateSampleData();
    },
    cep_maxIndex() {
      const containerWidth = this.$refs.cep_carouselTrack?.offsetWidth || 300;
      const visibleCards = Math.floor(containerWidth / (this.cep_cardWidth + this.cep_cardGap));
      return Math.max(0, this.cep_items.length - visibleCards);
    }
  },
  methods: {
    cep_slideRight() {
      if (this.cep_currentIndex < this.cep_maxIndex) {
        this.cep_currentIndex++;
        this.cep_showLeftArrow = true;
      }
    },
    cep_slideLeft() {
      if (this.cep_currentIndex > 0) {
        this.cep_currentIndex--;
        if (this.cep_currentIndex === 0) {
          this.cep_showLeftArrow = false;
        }
      }
    },
    cep_handleTouchStart(event) {
      this.cep_isDragging = true;
      this.cep_startX = event.touches[0].clientX;
    },
    cep_handleTouchMove(event) {
      if (!this.cep_isDragging) return;
      event.preventDefault();
      this.cep_currentX = event.touches[0].clientX;
    },
    cep_handleTouchEnd() {
      if (!this.cep_isDragging) return;
      this.cep_processDrag();
      this.cep_isDragging = false;
    },
    cep_handleMouseDown(event) {
      this.cep_isDragging = true;
      this.cep_startX = event.clientX;
      event.preventDefault();
    },
    cep_handleMouseMove(event) {
      if (!this.cep_isDragging) return;
      this.cep_currentX = event.clientX;
    },
    cep_handleMouseEnd() {
      if (!this.cep_isDragging) return;
      this.cep_processDrag();
      this.cep_isDragging = false;
    },
    cep_processDrag() {
      const deltaX = this.cep_startX - this.cep_currentX;
      
      if (Math.abs(deltaX) > this.cep_threshold) {
        if (deltaX > 0) {
          // Arrastrar hacia la izquierda (mostrar siguiente)
          this.cep_slideRight();
        } else {
          // Arrastrar hacia la derecha (mostrar anterior)
          this.cep_slideLeft();
        }
      }
    },
    cep_generateSampleData() {
      return [
        {
          title: 'Card 1',
          description: 'Descripción del primer elemento',
          image: '../assets/img/eficiencia.png'
        },
        {
          title: 'Card 2',
          description: 'Descripción del segundo elemento',
          image: '../assets/img/eficiencia.png'
        },
        {
          title: 'Card 3',
          description: 'Descripción del tercer elemento',
          image: '../assets/img/eficiencia.png'
        },
        {
          title: 'Card 4',
          description: 'Descripción del cuarto elemento',
          image: '../assets/img/eficiencia.png'
        },
        {
          title: 'Card 5',
          description: 'Descripción del quinto elemento',
          image: '../assets/img/eficiencia.png'
        },
        {
          title: 'Card 6',
          description: 'Descripción del sexto elemento',
          image: '../assets/img/eficiencia.png'
        }
      ];
    }
  }
}
</script>

<style scoped>
.cep-carousel-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.cep-carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
}

.cep-carousel-track {
  flex: 1;
  overflow: hidden;
  border-radius: 12px;
}

.cep-carousel-inner {
  display: flex;
  gap: 16px;
  transition: transform 0.3s ease-in-out;
  cursor: grab;
}

.cep-carousel-inner:active {
  cursor: grabbing;
}

.cep-carousel-card {
  flex: 0 0 280px;
  width: 280px;
  height: 252px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cep-carousel-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.cep-card-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.cep-card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  background: #f8f9fa;
}

.cep-card-info {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.cep-card-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.2;
}

.cep-card-description {
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.4;
  flex: 1;
}

.cep-arrow {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
}

.cep-arrow:hover:not(:disabled) {
  background: #f8f9fa;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.cep-arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cep-arrow-icon {
  width: 20px;
  height: 20px;
  color: #333;
}

.cep-arrow-left {
  order: -1;
}

.cep-arrow-right {
  order: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cep-carousel-container {
    padding: 16px;
  }
  
  .cep-carousel-wrapper {
    gap: 12px;
  }
  
  .cep-carousel-inner {
    gap: 12px;
  }
  
  .cep-carousel-card {
    flex: 0 0 280px;
    width: 280px;
    height: 252px;
  }
  
  .cep-arrow {
    width: 40px;
    height: 40px;
  }
  
  .cep-arrow-icon {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .cep-carousel-container {
    padding: 12px;
  }
  
  .cep-carousel-wrapper {
    gap: 8px;
  }
  
  .cep-carousel-inner {
    gap: 8px;
  }
}
</style>