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


		

		<section class="relative h-screen fondo-hero"> 
		 
		

			<div class="container relative isolate h-full w-full alinear-middle flex items-center justify-left">
				<div class="relative max-w-7xl px-6 py-20">

					<div class="grid md:grid-cols-1 gap-36 items-center">
						<div class="backgraund-blur p-10 rounded-xl shadow-lg">
							<div class="w-full pb-16 md:pb-8">
								<img class="w-48" src="~/public/assets/img/logo.svg" alt="">
							</div>
							<div class="flex flex-col ">
							<h1 class="text-white font-normal text-6xl" >Conecta con la transformación empresarial</h1>
							<p class="text-white font-normal text-1xl flex flex-col mt-5"> 
								<span class="font-regular leading-tight"  >Conferencias exclusivas sobre innovación, tecnología y estrategia para llevar tu negocio al siguiente nivel.</span>
							</p> 
						</div>
						</div>
					</div>
				</div>
			</div>

		</section>
		  
		<main class="bg-white py-12" id="events2">
			<div class="container hidden md:flex flex-wrap sm-pr-0" style="padding-right: .5rem;">
				<div class=" min-w-50 w-1/2  mt-6"  >
					<div class=" flex pr-4" >
						<article  class="items-center justify-center  fondo-summit min-h-128 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl">
							 <div class="items-center justify-center"  >
												<img  src="~/public/assets/img/empower-logo.png" alt="Empower Logo" class="logo-entel  inline-block h-10 mr-2" />
								 				 
										
											<div class="flex items-center justify-center gap-x-2 text-primary mt-2">
													<NuxtLink :to="'/event/empower'" class="w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap md:width-peque-button max-w-full hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed">
													Ver evento
												  </NuxtLink>
											 </div>
										</div>
								    
    				 

						</article>
					</div>
				</div>
				<div class=" min-w-50 w-1/2  mt-6"  >
					<div class=" flex pr-4" >
						<article  class="wdt-t items-center justify-center fondo-rutas min-h-128 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl">
							<div class=" items-center justify-center m-w-300"  > 
								<h2 class="text-entel-ruta">La Ruta Entel<br />Empresas</h2><br />
								<p class="sub-text-entel-ruta">¡Contenido de valor para potenciar tu empresa!</p>   
								<div class="flex items-center justify-center gap-x-2 text-primary mt-2">
													<NuxtLink :to="'/laruta'" class="w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap md:width-peque-button max-w-full hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed">
													Ver fechas
												</NuxtLink>
												</div>
								 
							</div>
						</article>
					</div>
				</div>
			</div>
			<div class="container md:hidden sm-pr-0 sm-pl-0" style="padding-right: .5rem;">
				<div class=" flex flex-row gap-x-8 mt-6">
					<div class="w-full relative overflow-hidden">
						<div class="swiper-container py-4">
							<div class="swiper-wrapper overflow-x-scroll  md:overflow-visible pb-5 gap-x-6">
								<div style="width: 80vw;" class="swiper-slide">
									<article class="items-center justify-center   fondo-summit min-h-64 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl">
										 <div class="items-center justify-center"  >
												<img  src="~/public/assets/img/empower-logo.png" alt="Empower Logo" class="logo-entel  inline-block h-10 mr-2" />
								 				 
										
											<div class="flex items-center justify-center gap-x-2 text-primary mt-2">
													<NuxtLink :to="'/event/empower'" class="w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap md:width-peque-button max-w-full hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed">
													Ver evento
												  </NuxtLink>
											 </div>
										</div>
									</article>
								</div>
								<div style="width: 80vw;" class="swiper-slide">
									<article class="items-center justify-center   fondo-rutas  min-h-64 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl">
											<div class=" items-center justify-center"  > 
								<h2 class="text-entel-ruta">La Ruta Entel<br />Empresas</h2>
								<p class="sub-text-entel-ruta">¡Contenido de valor para potenciar tu empresa!</p>   
										<div class="flex items-center justify-center gap-x-2 text-primary mt-2">
													<NuxtLink :to="'/laruta'" class="w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap md:width-peque-button max-w-full hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed">
													Ver fechas
												</NuxtLink>
												</div>
							</div>
									</article>
								</div>
							</div>
							<div class="swiper-pagination"></div>
						</div>
					</div>
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