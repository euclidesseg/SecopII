<script setup lang="ts">
    import { VueDatePicker } from '@vuepic/vue-datepicker';
    import { ref } from 'vue';
    import { es } from "date-fns/locale"
    import '@vuepic/vue-datepicker/dist/main.css'
    import type { FiltrosSecop } from '../types/filters';


    

    const date = new Date()
    date.setFullYear(date.getFullYear() - 1)
    const emits = defineEmits<{'filtros':[FiltrosSecop:FiltrosSecop]}>();

    const form = ref<FiltrosSecop>({
        nitEntidad: '',
        fechaDesde: date,
        fechaHasta: new Date(),
        referencia: '',
        estado: '',
        descripcion: '',
        proveedor: ''
    })



    const onSearchForm = () => {
        emits('filtros', form.value)
    }
</script>

<template>
    <div
        class="max-w-5xl mx-auto bg-white p-3 rounded-4xl shadow-2xl border border-slate-100 flex flex-col lg:row gap-3">
        <form action="" class="flex flex-col gap-2" @submit.prevent="() => onSearchForm()">
            <div class="flex flex-col flex-1 gap-3">
                <div
                    class="flex-1 flex items-center px-6 gap-4 bg-slate-50 rounded-2xl py-4 focus-within:ring-2 focus-within:ring-primary-c/20 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g fill="none">
                            <path fill="url(#SVGp2Ojne6g)"
                                d="M24 13.5C24 19.299 19.299 24 13.5 24S3 19.299 3 13.5S7.7 3 13.5 3S24 7.701 24 13.5" />
                            <path fill="url(#SVGYfXZQcuf)"
                                d="M20.7 22.467A11.45 11.45 0 0 1 13.5 25C7.149 25 2 19.851 2 13.5S7.149 2 13.5 2S25 7.149 25 13.5c0 2.725-.948 5.229-2.532 7.2l6.167 6.166a1.25 1.25 0 0 1-1.768 1.768zm1.8-8.967a9 9 0 1 0-18 0a9 9 0 0 0 18 0" />
                            <path fill="url(#SVGpcRDXdUD)"
                                d="m28.74 12.656l-.919-.299a1.9 1.9 0 0 1-1.199-1.197l-.298-.918a.363.363 0 0 0-.684 0l-.299.918a1.89 1.89 0 0 1-1.18 1.197l-.919.299a.363.363 0 0 0 0 .684l.919.298a1.9 1.9 0 0 1 1.198 1.202l.299.918a.363.363 0 0 0 .684 0l.299-.918a1.89 1.89 0 0 1 1.198-1.197l.919-.299a.363.363 0 0 0 0-.684z" />
                            <path fill="url(#SVGMo5KLbDs)"
                                d="M18.775 7.837a3.5 3.5 0 0 0-1.647-1.168l-1.684-.546a.665.665 0 0 1 0-1.254l1.684-.547a3.47 3.47 0 0 0 2.15-2.154l.014-.042l.547-1.682a.665.665 0 0 1 1.255 0l.547 1.682a3.47 3.47 0 0 0 2.198 2.196l1.683.547l.034.008a.665.665 0 0 1 0 1.254l-1.684.547a3.47 3.47 0 0 0-2.197 2.196l-.548 1.682l-.016.042a.664.664 0 0 1-1.238-.042l-.548-1.682a3.5 3.5 0 0 0-.55-1.037" />
                            <defs>
                                <linearGradient id="SVGYfXZQcuf" x1="3.421" x2="26.158" y1="26.158" y2="7.683"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7c28b7" />
                                    <stop offset="1" stop-color="#ad84ca" />
                                </linearGradient>
                            </defs>
                        </g>
                    </svg>
                    <input type="text" v-model="form.nitEntidad" placeholder="Nombre o Nit de la Entidad.."
                        class="w-full bg-transparent outline-none text-slate-800 font-semibold placeholder:text-slate-400" />
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
                    <div class="w-full border-solid h-auto min-h-24 flex items-start flex-col">
                        <label for=""
                            class="text-sm font-medium text-gray-900 bg-primary-c/10 inline-block p-1 rounded-md my-2">Fecha
                            Desde</label>
                        <VueDatePicker v-model="form.fechaDesde" :time-config="{ enableTimePicker: false }" :locale="es"
                            input-class-name="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-c focus:outline-none p-2.5">
                        </VueDatePicker>
                    </div>
                    <div class="w-full border-solid h-auto min-h-24 flex items-start flex-col">
                        <label for=""
                            class="text-sm font-medium text-gray-900 bg-primary-c/10 inline-block p-1 rounded-md my-2">Fecha
                            Hasta</label>
                        <VueDatePicker v-model="form.fechaHasta" :time-config="{ enableTimePicker: false }" :locale="es">
                        </VueDatePicker>
                    </div>
                    <div class="w-full border-solid h-auto min-h-24 flex items-start flex-col">
                        <label
                            class="text-sm font-medium text-gray-900 bg-primary-c/10 inline-block p-1 rounded-md my-2">Referencia
                            del contrato</label>
                        <input type="text" v-model="form.referencia"
                            class="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:outline-none p-2.5"
                            placeholder="Referencia proceso" />
                    </div>
                    <div class="w-full border-solid h-auto min-h-24 flex items-start flex-col">
                        <label
                            class="text-sm font-medium text-gray-900 bg-primary-c/10 inline-block p-1 rounded-md my-2">Estado
                            del proceso</label>
                        <select v-model="form.estado"
                            class="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:outline-none p-2.5">
                            <option value="">Seleccione</option>
                            <option value="Seleccionado">Seleccionado</option>
                            <option value="Cancelado">Cancelado</option>
                            <option value="Publicado">Publicado</option>
                            <option value="Evaluación">Evaluación</option>
                            <option value="Abierto">Abierto</option>
                            <option value="Borrador">Borrador</option>
                        </select>

                    </div>
                    <div class="w-full border-solid h-auto min-h-24 flex items-start flex-col">
                        <label
                            class="text-sm font-medium text-gray-900 bg-primary-c/10 inline-block p-1 rounded-md my-2">Descripción</label>
                        <input type="text" v-model="form.descripcion"
                            class="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:outline-none p-2.5"
                            placeholder="Descripción" />
                    </div>
                    <div class="w-full border-solid h-auto min-h-24 flex items-start flex-col">
                        <label
                            class="text-sm font-medium text-gray-900 bg-primary-c/10 inline-block p-1 rounded-md my-2">Proveedor</label>
                        <input type="text" v-model="form.proveedor"
                            class="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:outline-none p-2.5"
                            placeholder="Proveedor" />
                    </div>
                </div>
            </div>
            <button type="submit"
                class="bg-primary-c! text-white w-full px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-md shadow-primary-c/50 ">
                Ejecutar Query SoQL
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="3">
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
            </button>
        </form>
    </div>
</template>
<style scoped></style>