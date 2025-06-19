<script setup lang="ts">
import { useSetting } from '~/store/modules/setting.module'
import { useEvent } from '~/store/modules/event.module'

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

	await eventModule.findOne(route.params.slug)
	if(!eventModule.event){
		window.location.href = '/';
	}

	settingModule.setEventId(eventModule.event.slug)

})

</script>
<template>
	<div class="w-full h-full" v-if="eventModule.event">
		<section 
		class="relative h-screen"  
		style="background: 'linear-gradient(0deg, rgba(0, 17, 92, 0.5), rgba(0, 17, 92, 0.5)), url('../public/assets/img/hero-eventos-entel.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center;">
			
		
				<div class="relative isolate pt-14 h-full w-full">
					<div class="container-fluid pt-8 pb-8">
						<NuxtLink to="/" class="w-12 h-12 bg-primary-black text-white text-center font-regular rounded-full text-l flex items-center justify-center">
							<span class="w-8">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><title>arrow-left</title><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" /></svg>
							</span>
						</NuxtLink>
					</div>

					<div class="container w-full h-full flex flex-col justify-start md:justify-center items-start md:items-start">
						<div class="flex flex-col w-full md:w-1/2">
							<span class="w-max bg-secondary py-1 px-2 rounded-lg z-10 text-white text-base-s font-medium">
								<span class="tracking-tighter">{{eventModule.event.tag}} - </span>
								<span class="font-bold" v-text="useFormatDate(eventModule.event.date)"></span>
							</span>
							<h1 class="text-white font-normal text-4-5xl mt-5" v-text="eventModule.event.title"></h1>
							<p class="text-white font-regular text-1xl flex flex-col mt-5">
								<span class="text-1lg leading-tight" v-text="eventModule.event.description"></span>
							</p>
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
		  
		<main class="bg-white">
			<div class="container container-sm w-full h-full flex flex-col mt-12">
				<h2 class="text-primary font-regular text-4-5xl px-4 md:px-0">Nuestros expositores</h2>
	
				<div class="flex flex-col md:gap-y-8 mt-6" v-if="eventModule.event.event_teacher">
					<div class="w-full flex flex-col md:gap-y-8">
						<article v-for="(topic, iTeacher) in eventModule.event.event_teacher" class="flex flex-col md:flex-row bg-gray w-full rounded-none md:rounded-xl overflow-hidden box-shadow-default">
							<div class="w-full xl:w-2/3 ">
								<div class="w-full relative overflow-hidden ">
									<img :src="topic.teacher.photo" alt="" class="rounded-tl-lg rounded-tr-lg object-cover object-center w-full h-full">
									<div class="absolute info-teacher rounded-lg bg-primary-blur flex flex-col p-2.5 md:hidden z-10">
										<h3 class="text-xl font-medium text-white leading-none" v-text="topic.teacher.full_name"></h3>
										<div class="flex items-center gap-x-2 text-base-s text-white mt-1 font-medium">
											<img class="w-3.5 mr-1" :src="topic.teacher.country.flag" alt="">
											{{topic.teacher.country.name}}
										</div>
									</div>
								</div>
					
								<div class="w-full flex relative flex-col bg-grat-content p-6 h-full">
									<div class="w-full hidden md:block">
										<h3 class="text-xl font-medium leading-6 text-black" v-text="topic.teacher.full_name"></h3>
										<div class="flex items-center gap-x-2 text-base-s text-black mt-1 font-medium">
											<img class="w-3.5 mr-1" :src="topic.teacher.country.flag" alt="">
											{{topic.teacher.country.name}}
										</div>
									</div>
									<div class="w-full flex flex-col justify-end">
										<p class="mb-0 text-dark mt-5 font-regular text-base" v-text="topic.teacher.professional_summary"></p>
									</div>
								</div>
							</div>
							<div class="w-full xl:w-1/3 bg-gray-slow p-6">
								<h3 class="text-3-5xl font-medium text-dark" v-text="topic.title"></h3>
								<p class="mb-0 text-dark font-regular text-1xl lg:text-base mt-5" v-text="topic.description"></p>
								<h2 class="text-2xl font-medium text-dark mt-5" v-text="topic.topics_title"></h2>
								<ul class="mt-5">
									<li class="text-dark font-regular text-base flex items-start mb-5" v-for="topicItem in topic.topics">
										<img class="w-5 mr-4 pt-1.5" :src="topicItem.icon" alt="">
										<span class="" v-text="topicItem.text"></span>
									</li>
								</ul>
							</div>
						</article>
					</div>
				</div>
			</div>

			<section class="mt-0 md:mt-16 bg-gray-light px-5 pt-6 pb-16">
				<div class="container w-full h-full flex flex-col mt-12 pb-4">
					<div class="w-full flex mb-8">
						<h2 class="text-black font-regular text-4-5xl text-center mx-auto">Datos del evento</h2>
					</div>
						<div class="w-full lg:w-2/5 mx-auto">
							<div class="w-full">
								<article class="flex flex-col md:flex-row box-shadow-default w-full relative overflow-hidden bg-white rounded-2xl">
									<div class="hidden md:flex sm:w-full lg:w-2/5 relative">
										<img :src="eventModule.event.image" alt="" class="rounded-tl-2xl rounded-bl-2xl object-cover object-center w-full h-full">
									</div>
									<div class="w-full lg:w-3/5">
										<div class="h-full w-full flex flex-col justify-center p-7">
											<div class="w-full flex flex-col">
												<span class="text-base lg:text-xl font-bold text-black" v-text="eventModule.event.tag"></span>
												<span class="text-black text-base-s font-medium flex items-start mt-3">
													<img src="~/public/assets/img/icons/calendar.svg" alt="" class="mr-2 pt-1.5">
													<span class="" v-text="useFormatDateDay(eventModule.event.date)"></span>
												</span>
												<span class="text-black text-base-s font-medium flex items-start mt-2">
													<img src="~/public/assets/img/icons/time.svg" alt="" class="mr-2 pt-1.5">
													<span class="" v-text="'Hora: ' + useFormatTime(eventModule.event.date)"></span>
												</span>
												<span class="text-black text-base-s font-medium flex items-start mt-2">
													<img src="~/public/assets/img/icons/location.svg" alt="" class="mr-2 pt-1.5">
													<span class="" v-text="eventModule.event.place + ' ' + eventModule.event.address"></span>
												</span>
											</div>
										</div>
									</div>
								</article>

								<div class="fixed left-0 bottom-0 lg:relative flex flex-col items-center justify-center w-full z-20">
									<NuxtLink :to="'/event/'+eventModule.event.slug+'/inscription'" class="w-full lg:w-max bg-primary flex text-white text-center font-medium py-2.5 px-12 rounded-none lg:rounded-full text-lg lg:text-base items-center justify-center mt-5 hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed width-default-button">
										<img class="w-4 mr-2" src="~/public/assets/img/icons/edit.svg" alt="">
										Inscribirme
									</NuxtLink>
								</div>

							</div>
						</div>
				</div>
					
			</section>
		</main>
	</div>
</template>
<style scoped lang="scss">
	@import '@/public/assets/scss/app.scss';
</style>