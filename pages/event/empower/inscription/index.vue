<script setup lang="ts">
import { useSetting } from '~/store/modules/setting.module'
import { useEvent } from '~/store/modules/event.module'
import * as yup from 'yup'

const settingModule = useSetting()
const eventModule = useEvent()
const route = useRoute()

const isComplete = ref(false)
const isLoading = ref(false)
const form: any = ref({
	event: null,
    fullname: "",
    cellphone: "",
    job: "",
    flag_business: null,
    company: "",
    ruc: "",
    email: "",
	publicidad:false
})
const errorsSend: any = ref(null);

const schema = yup.object({
    fullname: yup.string().required('Campo oblligatorio'),
    cellphone: yup.string().required('Campo oblligatorio'),
    job: yup.string().required('Campo oblligatorio'),
    flag_business: yup.boolean().required('Campo oblligatorio'),
    company: yup.string().required('Campo oblligatorio'),
    // ruc: yup.number().required('Campo oblligatorio'),
    email: yup.string().email('El formato no es correcto').required('Campo oblligatorio')
})

const errors: any = ref({
    fullname: "",
    cellphone: "",
    job: "",
    flag_business: "",
    company: "",
    email: ""
});

const validate = (field: any) => {
    schema
    .validateAt(field, form.value)
    .then(() => {
        errors.value[field] = "";
        validateForm(false);
    })
    .catch(error => {
        errors.value[error.path] = error.message;
        validateForm(false);
    });
}

const validateForm = async (showErrors: boolean) => {
    await schema
    .validate(form.value, { abortEarly: false })
    .then(() => {
        if(showErrors){
            errors.value = {};
        }
        isComplete.value = true;
    })
    .catch(err => {
        if(showErrors){
            err.inner.forEach((error: any) => {
            errors.value[error.path] = error.message;
            });
        }
        isComplete.value = false;
    });
}

const saveData = async () =>{
	await validateForm(true);
    if (isComplete.value && !isLoading.value) {
		errorsSend.value = null;
		isLoading.value = true;
		const { ok, error, response } = await eventModule.storeInscription(form.value);
		isLoading.value = false;

		if(ok){
			localStorage.setItem('registered', "1")
			localStorage.setItem('registeredData', JSON.stringify({
				email: form.value.email,
				phone_number: form.value.cellphone,
				external_id: form.value.email,
				content_id: form.value.event,
				content_type: eventModule.event.tag,
				content_name: eventModule.event.title
			}));
			//window.location.href = '/thanks';
			window.location.href = '/event/empower/thanks';
		}
		else{
			errorsSend.value = useGetError(error)
		}
	}
  
}

const changeRadio = (e: any) => {
	if(e.target.checked){
		form.value.flag_business = (e.target.value == 1)?true:false
		validate('flag_business')
	}
}

onBeforeMount(async () => {
	/* @ts-ignore */
    fbq('track', 'PageView');

	/* @ts-ignore */
	window.teads_e = window.teads_e || [];
	/* @ts-ignore */
    window.teads_buyer_pixel_id = 9922;
	
	settingModule.setTheme('theme-white')
	settingModule.setShowFooter(false)
	settingModule.setShowHeader(true)

	await eventModule.findOne('empower')
 

	form.value.event = 3

})
</script>


<template>
	<main class="w-full h-full pt-20" v-if="eventModule.event">
		<div class="container-fluid">
			<NuxtLink :to="'/event/'+eventModule.event.slug" class="w-12 h-12 bg-gray-dark text-white text-center font-regular rounded-full text-l flex items-center justify-center">
				<span class="w-8">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><title>arrow-left</title><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" /></svg>
				</span>
			</NuxtLink>
		</div>
		<section class="relative h-full md:h-screen w-full">
			
				<div class="relative isolate h-full w-full">
					<div class="container w-full h-full pt-12">
						<h2 class="text-primary font-regular text-4-5xl mb-8">Inscripción</h2>
						<div class="w-full flex flex-col md:flex-row gap-x-12">
							<div class="flex flex-col w-full md:w-1/4">
								<div class="w-full flex flex-row md:flex-col items-center">
									<img :src="eventModule.event.image" class="rounded-lg w-1/2 md:w-full" alt="">
									<h1 class="text-primary font-medium text-1xl w-1/2 md:w-full pl-3 md:pl-0" v-text="eventModule.event.title"></h1>
								</div>
								<p class="text-black font-bold text-base mt-4" v-text="eventModule.event.tag"></p>
								<p class="text-base-s text-black font-medium flex items-start mt-3">
									<img src="~/public/assets/img/icons/calendar.svg" alt="" class="mr-2 pt-1">
									<span v-text="useFormatDateDay(eventModule.event.date)"></span>
								</p>
								<p class="text-base-s text-black font-medium flex items-start mt-1">
									<img src="~/public/assets/img/icons/time.svg" alt="" class="mr-2 pt-1">
									<span v-text="'Hora: ' + useFormatTime(eventModule.event.date)"></span>
								</p>
								<p class="text-base-s text-black font-medium flex items-start mt-1">
									<img src="~/public/assets/img/icons/location.svg" alt="" class="mr-2 pt-1">
									<span v-text="eventModule.event.place + ' - ' + eventModule.event.address"></span>
								</p>
							</div>
							<div class="flex flex-col w-full md:w-3/4 mt-8 md:mt-0 mb-8 md:mb-0">
								<form class="w-full flex flex-col gap-y-8" @submit.prevent="saveData">
									<div class="w-full flex flex-col md:flex-row gap-x-8 gap-y-6">
										<div class="w-full md:w-1/2">
											<label
											class="label-input relative block overflow-hidden border-b-3 bg-gray-slow pt-4 pb-1 px-4 focus-within:border-blue-600 rounded-t-lg hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus group-input"
											:class="{'error': errors.fullname}"
											>
												<input
													type="text"
													class="input peer-input h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base flex items-end text-gray-regular font-medium"
													@input="validate('fullname')" 
                    								@change="validate('fullname')"
													v-model="form.fullname"
													:class="{'has-content':(form.fullname && form.fullname != '') }"
												/>
	
												<span
													class="label absolute text-base font-regular text-gray-regular transition-all"
												>
													Nombre y apellido*
												</span>
												<span class="absolute right-0 top-3.5">
													<img class="w-6 mr-6" src="~/public/assets/img/icons/alert.svg">
												</span>
											</label>
											<p v-if="errors.fullname" class="m-0 text-error text-xs mt-1 font-medium pl-4">
												{{ errors.fullname }}
											</p>
										</div>
										<div class="w-full md:w-1/2">
											<label
											class="label-input relative block overflow-hidden border-b-3 bg-gray-slow pt-4 pb-1 px-4 focus-within:border-blue-600 rounded-t-lg hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus group-input"
											:class="{'error': errors.cellphone}"
											>
												<input
													type="text"
													class="input peer-input h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base flex items-end text-gray-regular font-medium"
													@input="validate('cellphone')" 
                    								@change="validate('cellphone')"
													v-model="form.cellphone"
													:class="{'has-content':(form.cellphone && form.cellphone != '') }"
												/>
	
												<span
													class="label absolute text-base font-regular text-gray-regular transition-all"
												>
													Celular*
												</span>
												<span class="absolute right-0 top-3.5">
													<img class="w-6 mr-6" src="~/public/assets/img/icons/alert.svg">
												</span>
											</label>
											<p v-if="errors.cellphone" class="m-0 text-error text-xs mt-1 font-medium pl-4">
												{{ errors.cellphone }}
											</p>
										</div>
									</div>
									<div class="w-full flex flex-col md:flex-row gap-x-8 gap-y-6">
										<div class="w-full md:w-1/2">
											<label
											class="label-input relative block overflow-hidden border-b-3 bg-gray-slow pt-4 pb-1 px-4 focus-within:border-blue-600 rounded-t-lg hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus group-input"
											:class="{'error': errors.company}"
											>
												<input
													type="text"
													class="input peer-input h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base flex items-end text-gray-regular font-medium"
													@input="validate('company')" 
                    								@change="validate('company')"
													v-model="form.company"
													:class="{'has-content':(form.company && form.company != '') }"
												/>
	
												<span
													class="label absolute text-base font-regular text-gray-regular transition-all"
												>
													Empresa*
												</span>
												<span class="absolute right-0 top-3.5">
													<img class="w-6 mr-6" src="~/public/assets/img/icons/alert.svg">
												</span>
											</label>
											<p v-if="errors.company" class="m-0 text-error text-xs mt-1 font-medium pl-4">
												{{ errors.company }}
											</p>
										</div>
										<div class="w-full md:w-1/2">
											<label
											class="label-input relative block overflow-hidden border-b-3 bg-gray-slow pt-4 pb-1 px-4 focus-within:border-blue-600 rounded-t-lg hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus group-input"
											>
												<input
													type="text"
													class="input peer-input h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base flex items-end text-gray-regular font-medium"
													v-model="form.ruc"
													:class="{'has-content':(form.ruc && form.ruc != '') }"
												/>
	
												<span
													class="label absolute text-base font-regular text-gray-regular transition-all"
												>
													Ruc
												</span>
											</label>
										</div>
									</div>
									<div class="w-full flex flex-col md:flex-row gap-x-8 gap-y-6">
										<div class="w-full md:w-1/2">
											<label
											class="label-input relative block overflow-hidden border-b-3 bg-gray-slow pt-4 pb-1 px-4 focus-within:border-blue-600 rounded-t-lg hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus group-input"
											:class="{'error': errors.job}"
											>
												<input
													type="text"
													class="input peer-input h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base flex items-end text-gray-regular font-medium"
													@input="validate('job')" 
                    								@change="validate('job')"
													v-model="form.job"
													:class="{'has-content':(form.job && form.job != '') }"
												/>
	
												<span
													class="label absolute text-base font-regular text-gray-regular transition-all"
												>
													Cargo*
												</span>
												<span class="absolute right-0 top-3.5">
													<img class="w-6 mr-6" src="~/public/assets/img/icons/alert.svg">
												</span>
											</label>
											<p v-if="errors.job" class="m-0 text-error text-xs mt-1 font-medium pl-4">
												{{ errors.job }}
											</p>
										</div>
										<div class="w-full md:w-1/2">
											<p class="text-black text-base font-medium mb-2">¿Es cliente Entel Empresas?</p>
											<div class="w-full flex items-center">
												<label class="radio-input flex items-center cursor-pointer mr-4" for="response1">
													<input class="w-0 h-0 invisible" id="response1" type="radio" value="1" name="question" @change="changeRadio">
													<span class="circle w-5 h-5 rounded-full border-3 border-solid border-color-radio flex items-center justify-center">
														<span class="point w-2.5 h-2.5 rounded-full bg-transparent"></span>
													</span>
													<span class="pl-2 text-base font-regular text-black leading-none">Si</span>
												</label>
												<label class="radio-input flex items-center cursor-pointer" for="response2">
													<input class="w-0 h-0 invisible" id="response2" type="radio" value="0" name="question" @change="changeRadio">
													<span class="circle w-5 h-5 rounded-full border-3 border-solid border-color-radio flex items-center justify-center">
														<span class="point w-2.5 h-2.5 rounded-full bg-transparent"></span>
													</span>
													<span class="pl-2 text-base font-regular text-black leading-none">No</span>
												</label>
											</div>
											<p v-if="errors.flag_business" class="m-0 text-error text-xs mt-1 font-medium pl-4">
												{{ errors.flag_business }}
											</p>
										</div>
									</div>
									
									<div class="w-full flex flex-col md:flex-row gap-x-8 gap-y-6">
										<div class="w-full md:w-1/2">
											<label
											class="label-input relative block overflow-hidden border-b-3 bg-gray-slow pt-4 pb-1 px-4 focus-within:border-blue-600 rounded-t-lg hover:bg-grey-hover active:bg-grey-focus focus:bg-grey-focus group-input"
											:class="{'error': errors.email}"
											>
												<input
													type="email"
													class="input peer-input h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base flex items-end text-gray-regular font-medium"
													
													v-model="form.email"
													:class="{'has-content':(form.email && form.email != '') }"
												/>
	
												<span
													class="label absolute text-base font-regular text-gray-regular transition-all"
												>
													Correo*
												</span>
												<span class="absolute right-0 top-3.5">
													<img class="w-6 mr-6" src="~/public/assets/img/icons/alert.svg">
												</span>
											</label>
											<p v-if="errors.email" class="m-0 text-error text-xs mt-1 font-medium pl-4">
												{{ errors.email }}
											</p>
										</div>
								 
									<div class="w-full md:w-1/2 flex items-center justify-start">
									<div class="w-full flex items-center">
										<label class="custom-checkbox flex items-center cursor-pointer mr-4" for="publicidad">
										<input 
											class="w-5 h-5" 
											id="publicidad" 
											type="checkbox" 
											name="publicidad"
											v-model="form.email"
										>
										<span class="square"></span>
										<span class="pl-2 text-base font-regular text-black leading-none">
											Acepto el envío de publicidad
										</span>
										</label>
									</div>
									</div>


									</div>




									<div class="w-full flex flex-col md:flex-row gap-x-8 gap-y-6">
										<div class="w-full md:w-1/2">
										
										</div>
										<div class="w-full md:w-1/2 flex justify-center items-center">
											<button type="submit" class="w-max bg-primary text-white text-center font-regular py-2.5 px-8 rounded-full text-l flex items-center justify-center hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-pressed width-default-button disabled:text-disabled-button disabled:bg-disabled-button" :disabled="!isComplete" :class="{'disabled': !isComplete}">
												<div class="flex" v-if="isLoading">
													<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
														<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
														<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
													</svg>
													Enviando...
												</div>
												<span v-else>Enviar inscripción</span>
											</button>
										</div>
									</div>
								</form>
								<div v-if="errorsSend" class="mt-5 w-full bg-red-50 border border-solid border-red-dark text-red-dark rounded-lg py-3 px-5 flex items-center">
									<span>
										<img style="max-width: 22px;" src="~/public/assets/img/icons/alert.svg" class="mr-2">
									</span>
									<div class="w-full" v-html="errorsSend"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
		
		</section>
	</main>
</template>


<style scoped lang="scss">
	@import '~/public/assets/scss/app.scss';
</style>