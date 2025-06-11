<script setup lang="ts">
import { useSetting } from '~/store/modules/setting.module'
import { useEvent } from '~/store/modules/event.module'

const settingModule = useSetting()
const eventModule = useEvent()
const route = useRoute()
const contentPage = ref<any>(null);

const sendTiktok = ()=>{
	try {
		const dataRegistered = JSON.parse(localStorage.getItem('registeredData') || '')
		if(dataRegistered){
			// TIKTOK
			// add this before event code to all pages where PII data postback is expected and appropriate 
			/* @ts-ignore */
			ttq.identify({
				"email": dataRegistered.email, // string. The email of the customer if available. It must be hashed with SHA-256 on the client side.
				"phone_number": dataRegistered.phone_number, // string. The phone number of the customer if available. It must be hashed with SHA-256 on the client side.
				"external_id": dataRegistered.external_id // string. Any unique identifier, such as loyalty membership IDs, user IDs, and external cookie IDs.It must be hashed with SHA-256 on the client side.
			});
		
			/* @ts-ignore */
			ttq.track('CompleteRegistration', {
				"contents": [
					{
						"content_id": dataRegistered.content_id, // string. ID of the product. Example: "1077218".
						"content_type": dataRegistered.content_type, // string. Either product or product_group.
						"content_name": dataRegistered.content_name // string. The name of the page or product. Example: "shirt".
					}
				]
			});
	
			localStorage.removeItem('registeredData')
		}
	} catch (error) {
	}
}


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
	settingModule.setShowHeader(true)

	if(localStorage.getItem('registered')){
		localStorage.removeItem('registered')
		sendTiktok();
		const { ok, error, response } = await eventModule.findThanks()
		if(ok){
			/* @ts-ignore */
			fbq('track', 'CompleteRegistration');
			contentPage.value = response.data
		}
		else{
			window.location = '/'
		}
	}
	else{
		window.location = '/'
	}

})

</script>
<template>
	<div class="w-full h-full">
		<section 
		class="relative h-screen" 
		v-bind:style="{background: 'linear-gradient(0deg, rgba(0, 17, 92, 0.5), rgba(0, 17, 92, 0.5)), url('+contentPage.page.background+')'}"
		style="background-repeat: no-repeat; background-size: cover; background-position: center;"
		v-if="contentPage">
			
				<div class="relative isolate pt-14 h-full w-full">
					<div class="container w-full h-full flex items-center pt-16">
						<div class="flex flex-col gap-x-4 md:flex-row items-end w-full">
							<div class="flex flex-col w-full md:w-1/3">
								<h1 class="text-white font-regular text-4-5xl" v-text="contentPage.page.title"></h1>
								<p class="text-white font-regular text-1xl flex flex-col mt-5" v-text="contentPage.page.subtitle"></p>
								<!-- <p class="text-white font-light text-lg flex flex-col">
									¡Te esperamos!
								</p> -->
							</div>
							<div class="flex flex-col items-center md:items-start md:justify-start w-full md:w-1/3 mt-8 md:mt-0">
								<div class="w-full gap-x-4 flex justify-center md:justify-start mb-6">
									<span v-for="social in contentPage.social">
										<a class="w-12 h-12 bg-white/30 text-white text-center font-regular rounded-full text-l flex items-center justify-center" :href="social.url" target="_blank" :title="social.network">
											<img :src="social.icon" alt="" class="w-7">
										</a>
									</span>
								</div>
								<NuxtLink to="/" class="w-max text-white text-center font-medium text-base py-2.5 px-16 hover:text-white rounded-full text-l flex items-center justify-center bg-primary hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-presse">
									Volver al inicio
								</NuxtLink>
							</div>
						</div>
					</div>
				</div>
		
		</section>
	</div>
</template>
<style scoped lang="scss">
	@import '@/public/assets/scss/app.scss';
</style>