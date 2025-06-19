<script>
import { onMounted, ref } from 'vue';
import Swiper from 'swiper';
import { useSetting } from '~/store/modules/setting.module'
import { useHome } from '~/store/modules/home.module'


export default defineComponent({
	setup() {
		const swiper = ref(null);
		const settingModule = useSetting()
		const homeModule = useHome()
		const background = ref(null);

		const findHome = async () => {
			await homeModule.find()
			background.value = homeModule.header ? homeModule.header.background_desktop : null;
		}

		const loadSwiper = (length) => {
			/* swiper.value = new Swiper('.swiper-container', {
				slidesPerView: length,
				spaceBetween: 40,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				noSwiping: true,
				freeMode: true,
				// loop: true,
				pagination: {
				el: '.swiper-pagination',
				on: {
					init: function () {
						swiper.value.disable()
					},
				},
				},
			}); */
		}

		const handleViewportChange = () => {
			// Obtén el ancho actual del viewport
			const width = window.innerWidth;

			// Aplica los estilos correspondientes según los tamaños responsivos de Tailwind CSS
			if (width < 640) {
				loadSwiper(1.25)
				background.value = homeModule.header ? homeModule.header.background_mobile : null
			}
			else {
				loadSwiper(2)
				background.value = homeModule.header ? homeModule.header.background_desktop : null
			}
			/* else if (width < 768) {
			// Código para viewport con ancho menor a 768px
			} else if (width < 1024) {
			// Código para viewport con ancho menor a 1024px
			} else {
			// Código para viewport con ancho mayor o igual a 1024px
			} */
		}

		const scrollEffect = () => {
			let buttonEffect = document.querySelector('.buttonEffect')
			if (buttonEffect) {
				buttonEffect.addEventListener('click', (event) => {
					document.getElementById('events').scrollIntoView({ behavior: 'smooth' })
				})
			}
		}

		onBeforeMount(() => {
			/* @ts-ignore */
			fbq('track', 'PageView');

			/* @ts-ignore */
			window.teads_e = window.teads_e || [];
			/* @ts-ignore */
			window.teads_buyer_pixel_id = 9922;

			settingModule.setShowFooter(true)
			settingModule.setShowHeader(false)

			handleViewportChange()

			// Agrega un event listener para el evento 'resize' del viewport
			window.addEventListener('resize', handleViewportChange);
			// Llama a la función handleViewportChange() al cargar la página para aplicar los estilos iniciales
			document.addEventListener('DOMContentLoaded', () => {
				handleViewportChange()
				scrollEffect()
			});
		})

		onMounted(async () => {
			await findHome()
			settingModule.setTheme('theme-color')
			handleViewportChange()
			scrollEffect()
		});

		return {
			swiper,
			findHome,
			background,
			homeModule
		};
	}
});
</script>


<template>
	<div class="w-full h-full">
		<section class="relative h-screen"
			v-bind:style="{ background: 'linear-gradient(0deg, rgba(0, 17, 92, 0.5), rgba(0, 17, 92, 0.5)), url(' + background + ')' }"
			style="background-repeat: no-repeat; background-size: cover; background-position: center;">

			<div class="relative isolate h-full w-full">
				<div class="relative max-w-7xl px-6 py-20">

					<div class="grid md:grid-cols-1 gap-36 items-center">
						<div class="backgraund-blur p-10 rounded-xl shadow-lg">
							<div class="w-full pb-16 md:pb-8">
								<img class="w-48" src="~/public/assets/img/logo.svg" alt="">
							</div>
							<div class="flex flex-col md:w-1/2" v-if="homeModule.header">
							<h1 class="text-white font-normal text-6xl" v-text="homeModule.header.title"></h1>
							<p class="text-white font-normal text-1xl flex flex-col mt-5"> 
								<span class="font-regular leading-tight" v-text="homeModule.header.description"></span>
							</p> 
						</div>
						</div>
					</div>
				</div>
			</div>

		</section>

 
					
				 <main class=" flex flex-col md:flex-row gap-6 p-6 bg-white  py-12 items-center justify-center">
    <!-- Tarjeta Empower -->
    <div
      class="container-wdt relative flex items-center justify-center   rounded-2xl overflow-hidden w-full max-w-md bg-cover bg-center text-white fondo-personalizado"
       
    >
      
        <div>
          <h2 class="text-3xl font-bold">
			<img  src="~/public/assets/img/logoempower.svg" alt="Empower Logo" class="logo-entel inline-block h-10 mr-2" />
          </h2>
          <p class="mt-2 text-white/80">Impulsando el futuro de <span class="font-semibold">tu empresa</span></p>
        </div>
       <span class="w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap width-peque-button  hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed">
														Ver evento</span>
													
												 
     
    </div>

    <!-- Tarjeta Entel -->

 <div
      class="container-wdt relative flex items-center justify-center   rounded-2xl overflow-hidden    bg-cover bg-center text-white fondo-personalizado"
       
    >
      
        <div class="wdt-t"> 
           <h2 class="text-entel-ruta">La Ruta Entel<br />Empresas</h2>
          <p class="sub-text-entel-ruta">¡Contenido de valor para potenciar tu empresa!</p> 
       

       <span class="w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap width-peque-button  hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed">
														Ver fechas</span>
		 </div>											
												 
     
    </div>



   
  	
			 
		</main>
	</div>
</template>



<style scoped lang="scss">
@import '@/public/assets/scss/app.scss';
@import 'swiper/css';

@import 'swiper/css/pagination';
@import 'swiper/css/navigation';

.swiper-container {
	width: 100%;
	height: 100%;
}

.swiper-slide {
	text-align: center;
	font-size: 18px;
	background: #fff;
}
</style>