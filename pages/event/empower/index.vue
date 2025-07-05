<script setup lang="ts">
import { useSetting } from '~/store/modules/setting.module'
import { useEvent } from '~/store/modules/event.module'

const settingModule = useSetting()
const eventModule = useEvent()
const route = useRoute()
const contentPage = ref<any>(null);



onBeforeMount(async () => {
	/* @ts-ignore */
    fbq('track', 'ViewContent');
	/* @ts-ignore */
	window.teads_e = window.teads_e || [];
	/* @ts-ignore */
    window.teads_buyer_pixel_id = 9922;

	// TIKTOK
	/* @ts-ignore */
	ttq.track('PageView');

	settingModule.setTheme('theme-color')
	settingModule.setShowFooter(false)
	settingModule.setShowHeader(false)


	 
		const { ok, error, response } = await eventModule.findThanks()
		
			
		if(ok){
			/* @ts-ignore */
			fbq('track', 'CompleteRegistration');
			contentPage.value = response.data
		}
		else{
			window.location.href = '/'
		}
	});
 

</script>


<template>
	<div class="w-full h-full">
		<section class="relative h-screen fondo-hero-thanks" v-if="contentPage">
			
			<div class="relative isolate pt-14 h-full w-full">
				<div class="container w-full h-full flex items-center pt-16">
					
					<!-- VERSIÓN MOBILE - Solo una columna (visible solo en mobile) -->
					<div class="flex flex-col w-full md:hidden">
						<!-- Logo principal - centrado -->
						<div class="flex items-center justify-center px-[38px] mb-8">
							<NuxtLink to="/" class=" p-1.5">
								<img class="h-8 w-auto logo-white" src="~/public/assets/img/logo.svg" alt="">
								<img class="h-8 w-auto logo-color" src="~/public/assets/img/logo-color.svg" alt="">
							</NuxtLink>
						</div>

						<!-- Logo Empower - centrado -->
						<div class="flex items-center justify-center mb-8">
							<img src="~/public/assets/img/empower-logo.png" alt="Empower Logo" class="logo-entel-thanks-md inline-block h-10" />
						</div>

						<!-- Contenido principal -->
						<div class="flex flex-col px-[38px]">
							<h1 class="text-white font-regular text-gradient text-4-5xl   mb-5">¡Muchas gracias por tu   interés en participar!</h1>
							<p class="text-white font-regular text-1xl mb-5">Lamentablemente las inscripciones ya están cerradas para este evento. Te invitamos a seguirnos en nuestras redes sociales para no perderte novedades y poder sumarte a las próximas actividades.</p>
							<p class="text-white font-regular text-lg   mb-8">
								¡Te esperamos!
							</p>
							
							<!-- Redes sociales - centradas -->
							<div class="w-full gap-x-4 flex justify-center mb-6">
								<span v-for="social in contentPage.social" :key="'mobile-' + social.network">
									<a class="w-12 h-12 bg-white/30 text-white text-center font-regular rounded-full text-l flex items-center justify-center" :href="social.url" target="_blank" :title="social.network">
										<img :src="social.icon" alt="" class="w-7">
									</a>
								</span>
                	<div class="w-full flex justify-center mb-6">
								<NuxtLink to="/" class="w-max text-white text-center font-medium text-base py-2.5 px-16 hover:text-white rounded-full text-l flex items-center justify-center bg-primary hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed">
									Volver al inicio
								</NuxtLink>
							</div>
							</div>
							
							<!-- Botón - centrado -->
						
						</div>
					</div>

					<!-- VERSIÓN DESKTOP - Dos columnas (oculta en mobile) -->
					<div class="hidden md:flex flex-row gap-x-8 items-start w-full">
						
						<!-- Primera columna -->
						<div class="flex flex-col w-1/2">
							<!-- Logo principal -->
							<div class="flex lg:flex-1">
								<NuxtLink to="/" class="-m-1.5 p-1.5">
									<img class="h-8 w-auto logo-white" src="~/public/assets/img/logo.svg" alt="">
									<img class="h-8 w-auto logo-color" src="~/public/assets/img/logo-color.svg" alt="">
								</NuxtLink>
							</div>

							<!-- Logo Empower -->
							<div class="flex  mt-16">
								<img src="~/public/assets/img/empower-logo.png" alt="Empower Logo" class="logo-entel-thanks inline-block h-10" />
							</div>
						</div>
						
						<!-- Segunda columna -->
						<div class="flex flex-col w-1/2 max-w-396">
							<h1 class="text-white font-regular text-gradient text-4-5xl">¡Muchas gracias por tu <br> interés en participar!</h1>
							<p class="text-white font-regular text-1xl flex flex-col mt-5">Lamentablemente las inscripciones ya están cerradas para este evento. Te invitamos a seguirnos en nuestras redes sociales para no perderte novedades y poder sumarte a las próximas actividades.</p>
							<p class="text-white font-regular text-lg flex flex-col mt-5">
								¡Te esperamos!
							</p>
							
							<!-- Redes sociales -->
							<div class="w-full gap-x-4 flex justify-start mb-6 mt-8">
								<span v-for="social in contentPage.social" :key="'desktop-' + social.network">
									<a class="w-12 h-12 bg-white/30 text-white text-center font-regular rounded-full text-l flex items-center justify-center" :href="social.url" target="_blank" :title="social.network">
										<img :src="social.icon" alt="" class="w-7">
									</a>
								</span>
                <div class="w-full flex justify-start mb-6">
								<NuxtLink to="/" class="w-max text-white text-center font-medium text-base py-2.5 px-16 hover:text-white rounded-full text-l flex items-center justify-center bg-primary hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed">
									Volver al inicio
								</NuxtLink>
							</div>
							</div>
							
							<!-- Botón -->
							
						</div>
						
					</div>
					
				</div>
			</div>
		
		</section>
	</div>
</template>


<style scoped lang="scss">
	@import '@/public/assets/scss/app.scss';
	
.bg-thanks-empower{
    background: linear-gradient(200deg, #04C 1.72%, #001064 68.39%);
}
.backgraund-empower-content {
    border-radius: 24px;
    max-width: 557px;
    min-width: 360px; 
    padding: 65px;
}

</style>