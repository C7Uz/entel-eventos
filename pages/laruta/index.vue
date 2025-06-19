<script >
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

	const findHome = async ()=>{
		await homeModule.find()
		background.value = homeModule.header?homeModule.header.background_desktop:null;
	}

	const loadSwiper = (length)=>{
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
			background.value = homeModule.header?homeModule.header.background_mobile:null
		} 
		else{
			loadSwiper(2)
			background.value = homeModule.header?homeModule.header.background_desktop:null
		}
		/* else if (width < 768) {
		// Código para viewport con ancho menor a 768px
		} else if (width < 1024) {
		// Código para viewport con ancho menor a 1024px
		} else {
		// Código para viewport con ancho mayor o igual a 1024px
		} */
  	}

	const scrollEffect = ()=>{
		let buttonEffect = document.querySelector('.buttonEffect')
		if(buttonEffect){
			buttonEffect.addEventListener('click', (event)=>{
				document.getElementById('events').scrollIntoView({ behavior: 'smooth' })
			})
		}
	}

	onBeforeMount(()=>{
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
		document.addEventListener('DOMContentLoaded', ()=>{
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
		<section 
			class="relative h-screen" 
			v-bind:style="{ background: 'linear-gradient(0deg, rgba(0, 17, 92, 0.5), rgba(0, 17, 92, 0.5)), url('+background+')' }"
			style="background-repeat: no-repeat; background-size: cover; background-position: center;">
			
				<div class="relative isolate h-full w-full">
					<div class="container w-full h-full flex flex-col justify-center py-16">
						<div class="w-full pb-16 md:pb-32">
							<img class="w-44" src="~/public/assets/img/logo.svg" alt="">
						</div>
						
						<div class="flex flex-col md:w-1/2" v-if="homeModule.header">
							<h1 class="text-white font-normal text-6xl" v-text="homeModule.header.title"></h1>
							<p class="text-white font-normal text-1xl flex flex-col mt-5">
								<span class="font-medium" v-text="homeModule.header.subtitle"></span>
								<span class="font-regular leading-tight" v-text="homeModule.header.description"></span>
							</p>
							<div class="flex w-full justify-center md:justify-start">
								<a type="button" class="buttonEffect w-max bg-primary text-white text-center font-medium py-2.5 px-16 hover:text-white mt-8 rounded-full text-base flex items-center justify-center hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed width-default-button" v-text="homeModule.header.btn_title">
								</a>
							</div>
						</div>
					</div>
				</div>
		
		</section>
		  
		<main class="bg-white py-12" id="events">
			<div class="container flex flex-col">
				<h2 class="text-black font-medium text-2xl lg:text-3-5xl">Próximos eventos</h2>
			</div>
			<div class="container hidden md:flex flex-wrap sm-pr-0" style="padding-right: .5rem;">
				<div class=" min-w-50 w-1/2  mt-6" v-if="homeModule.events" v-for="(event, iEvent) in homeModule.events">
					<div class=" flex " :class="{'pl-4': (iEvent%2)>0, 'pr-4': (iEvent%2)==0}">
						<article  class="min-h-64 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl">
									<span class="bg-secondary py-1 px-2 absolute top-lg left-lg left-2 rounded-lg z-10 text-white font-bold text-base">
										<span class="tracking-tighter" v-text="event.tag"></span>
									</span>
									<div class="w-full relative overflow-hidden ">
										<img :src="event.image" alt="" class="object-cover object-center w-full h-full">
									</div>
									<div class="h-full w-full">
										<div class="h-full w-full flex flex-col justify-between p-7">
											<div class="w-full">
												<div class="w-full flex flex-col items-start">
													<NuxtLink class="text-1xl font-medium leading-6 text-primary text-left paragraph-cut min-h-title" :to="'/event/'+event.slug" v-text="event.title">
													</NuxtLink>
													<p class="m-0 mt-2 font-regular text-left text-base h-12 text-ellipsis overflow-hidden paragraph-cut" v-text="event.summary"></p>
												</div>
												<div class="flex items-center gap-x-2 gap-y-2 text-xs mt-4 flex-wrap">
													<span class="md:w-auto rounded-lg bg-gray-light text-black leading-none font-medium flex justify-center items-center p-2 text-base-s">
														<img src="~/public/assets/img/icons/calendar.svg" alt="" class="mr-2">
														{{ useFormatDate(event.date) }}
													</span>
													<span class="md:w-auto rounded-lg bg-gray-light text-black leading-none font-medium flex justify-center items-center p-2 text-base-s text-left">
														<img src="~/public/assets/img/icons/location.svg" alt="" class="mr-2">
														{{ event.place }}
													</span>
												</div>
											</div>
											<div class="flex items-center gap-x-2 text-primary mt-2">
												<NuxtLink :to="'/event/'+event.slug" class="w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap md:width-default-button max-w-full hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed">
												Conocer más
											</NuxtLink>
											</div>
										</div>
									</div>
						</article>
					</div>
				</div>
			</div>
			<div class="container md:hidden sm-pr-0 sm-pl-0" style="padding-right: .5rem;">
				<div class=" flex flex-col gap-x-8 mt-6">
					<div class="w-full relative overflow-hidden">
						<div class="swiper-container py-4">
							<div class="swiper-wrapper overflow-x-scroll  md:overflow-visible pb-5 gap-x-6">
								<div style="width: 80vw;" class="swiper-slide" v-if="homeModule.events" v-for="(event, iEvent) in homeModule.events" :class="{'mr-4': iEvent == (homeModule.events.length - 1), 'ml-4': iEvent == 0}">
									<article class="min-h-64 flex flex-col lg:flex-row box-shadow-default w-full relative overflow-hidden bg-gray rounded-2xl">
										<span class="bg-secondary py-1 px-2 absolute top-lg left-lg left-2 rounded-lg z-10 text-white font-bold text-base">
											<span class="tracking-tighter" v-text="event.tag"></span>
										</span>
										<div class="w-full relative overflow-hidden ">
											<img :src="event.image" alt="" class="object-cover object-center w-full h-full">
										</div>
										<div class="h-full w-full">
											<div class="h-full w-full flex flex-col justify-between p-7">
												<div class="w-full">
													<div class="w-full flex flex-col items-start">
														<NuxtLink class="text-1xl font-medium leading-6 text-primary text-left" :to="'/event/'+event.slug" v-text="event.title">
														</NuxtLink>
														<p class="m-0 mt-2 font-regular text-left text-base h-12 text-ellipsis overflow-hidden" v-text="useEllipsis(event.summary)"></p>
													</div>
													<div class="flex items-center gap-x-2 gap-y-2 text-xs mt-4 flex-wrap">
														<span class="md:w-auto rounded-lg bg-gray-light text-black leading-none font-medium flex justify-center items-center p-2 text-base-s">
															<img src="~/public/assets/img/icons/calendar.svg" alt="" class="mr-2">
															{{ useFormatDate(event.date) }}
														</span>
														<span class="md:w-auto rounded-lg bg-gray-light text-black leading-none font-medium flex justify-center items-center p-2 text-base-s text-left">
															<img src="~/public/assets/img/icons/location.svg" alt="" class="mr-2">
															{{ event.place }}
														</span>
													</div>
												</div>
												<div class="flex items-center gap-x-2 text-primary mt-2">
													<NuxtLink :to="'/event/'+event.slug" class="w-full bg-primary text-white text-center font-medium py-2.5 px-16 text-base hover:text-white mt-8 rounded-full text-l flex items-center justify-center whitespace-nowrap md:width-default-button max-w-full hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed">
													Conocer más
												</NuxtLink>
												</div>
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