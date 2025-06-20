<script setup lang="ts">
import { useSetting } from '~/store/modules/setting.module'

const settingModule = useSetting()

useHead({
	script: [
		{
			src: 'https://www.googletagmanager.com/gtag/js?id=G-4EQK5P5E6X',
        	async: true,
		},
		{
			src: 'https://p.teads.tv/teads-fellow.js',
        	async: true,
		}
	]
})

const currentYear = new Date().getFullYear()

onBeforeMount(() => {
	settingModule.setShowFooter(false)
	
	/* @ts-ignore */
	window.dataLayer = window.dataLayer || [];
	/* @ts-ignore */
	function gtag(){dataLayer.push(arguments);}
	/* @ts-ignore */
	gtag('js', new Date());
	/* @ts-ignore */
	gtag('config', 'G-4EQK5P5E6X');


	// PEXEL
	/* @ts-ignore */
	!function (f, b, e, v, n, t, s) {
		/* @ts-ignore */
        if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
		/* @ts-ignore */
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';n.queue = []; t = b.createElement(e); t.async = !0;t.src = v; s = b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t, s)
	}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* @ts-ignore */
    fbq('init', '621474275123575');

	/* @ts-ignore */
	!function (w, d, t) {
		/* @ts-ignore */
		w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
		ttq.load('CO0RLBJC77U4A9P352OG');
		ttq.page();
	}(window, document, 'ttq');
	
})

const changeColorLogo = ()=>{
	window.addEventListener('scroll', function() {
		let header: any = document.querySelector('.fixed-header');
			let scrollPosition = window.scrollY || document.documentElement.scrollTop;

			if(header){
				if (scrollPosition > 0) {
					header.classList.add('fixed');
					header.classList.remove('absolute');
				} else {
					header.classList.remove('fixed');
					header.classList.add('absolute');
				}
			}
	});
}

onMounted(()=>{
	changeColorLogo()
})
</script>

<template>
	<div class="w-full h-full" :class="[settingModule.settings.theme]">
		<header class="container-fluid absolute inset-x-0 top-0 left-0 z-50 h-header transition duration-3 fixed-header" v-if="settingModule.settings.showHeader">
			<div class=" h-full">
				<nav class="flex items-center justify-between py-2 h-full" aria-label="Global">
					<div class="flex lg:flex-1">
						<NuxtLink to="/" class="-m-1.5 p-1.5">
							<img class="h-8 w-auto logo-white" src="~/public/assets/img/logo.svg" alt="">
							<img class="h-8 w-auto logo-color" src="~/public/assets/img/logo-color.svg" alt="">
						</NuxtLink>
					</div>
					<div class="hidden md:flex">
						<NuxtLink :to="'/event/'+settingModule.settings.eventId+'/inscription'" type="button" class="w-max bg-primary text-white text-center font-medium py-2 px-4 rounded-full text-base flex items-center justify-center hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed" v-if="settingModule.settings.eventId">
							<img class="w-4 mr-2" src="~/public/assets/img/icons/edit.svg" alt="">
							Inscribirme
						</NuxtLink>
					</div>
				</nav>
			</div>
		</header>

		<slot />

		<footer class="container-fluid w-full h-footer  bg-gray-light" v-if="settingModule.settings.showFooter">
			<div class="container h-full">
				<div class="w-full h-full flex items-center justify-between my-auto">
					<span class="font-normal text-xs text-dark">Copyright {{currentYear}}. Todos los derechos reservados.</span>
					<a href="#" class="-m-1.5 p-1.5">
						<img class="h-8 w-auto" src="~/public/assets/img/logo-color.svg" alt="">
					</a>
				</div>
			</div>
		</footer>
	</div>
</template>

<style scoped lang="scss">
	@import '@/public/assets/scss/app.scss';
</style>
