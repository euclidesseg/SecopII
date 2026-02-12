<script setup lang="ts">
import { ref } from 'vue';

const searchTerm = ref<string>('');

</script>

<template>
    <div
        class="max-w-5xl mx-auto bg-white p-3 rounded-4xl shadow-2xl border border-slate-100 flex flex-col lg:row gap-3">
        <div class="flex flex-col md:flex-row flex-1 gap-3">
            <div
                class="flex-1 flex items-center px-6 gap-4 bg-slate-50 rounded-2xl py-4 focus-within:ring-2 focus-within:ring-[#6e11b0]/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-slate-400 w-6 h-6" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
                <input type="text" v-model="searchTerm" placeholder="Nombre de la Entidad o Producto..."
                    class="w-full bg-transparent outline-none text-slate-800 font-semibold placeholder:text-slate-400" />
            </div>
            <!-- <div class="flex items-center px-6 gap-4 bg-slate-50 rounded-2xl py-4 min-w-55">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-slate-400 w-5 h-5" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                </svg>
                <select
                    class="bg-transparent outline-none text-slate-600 font-bold w-full appearance-none cursor-pointer">
                    <option>Modalidad: Todas</option>
                    <option>Licitación Pública</option>
                    <option>Contratación Directa</option>
                    <option>Mínima Cuantía</option>
                </select>
            </div> -->
        </div>
        <button
            class="brand-bg text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-3 brand-shadow">
            Ejecutar Query SoQL
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="3">
                <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
        </button>
    </div>
</template>