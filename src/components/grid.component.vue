<script setup lang="ts">
import type { Contrato } from '../types/Contrato';

const props = defineProps<{ contracts: Contrato[] }>();

const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(val);
};

</script>

<template>
  
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div v-for="contract in contracts" :key="contract.id_contrato"
            class="group bg-white rounded-4xl border border-slate-200 p-8 hover:shadow-2xl hover:border-[#6e11b0]/20 transition-all duration-500 flex flex-col relative overflow-hidden">
            <div
                class="absolute top-0 right-0 w-32 h-32 bg-[#6e11b0]/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700">
            </div>

            <div class="flex justify-between items-center mb-6 relative z-10">
                <span :class="[
                    'px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border-2',
                    contract.estado_contrato === 'Adjudicado' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-[#6e11b0]/5 text-[#6e11b0] border-[#6e11b0]/10'
                ]">
                    {{ contract.estado_contrato }}
                </span>
                <div class="flex gap-1">
                    <div class="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                    <div class="w-1.5 h-1.5 rounded-full brand-bg"></div>
                </div>
            </div>

            <h3
                class="text-xl font-bold text-slate-800 mb-4 line-clamp-2 leading-snug group-hover:text-[#6e11b0] transition-colors relative z-10">
                {{ contract.objeto_contrato }}
            </h3>

            <div class="flex items-center gap-3 mb-8 bg-slate-50 p-3 rounded-2xl">
                <div
                    class="w-10 h-10 rounded-xl brand-bg flex items-center justify-center text-sm font-bold text-white shadow-inner">
                    {{ contract.nombre_entidad.charAt(0) }}
                </div>
                <div class="overflow-hidden">
                    <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Entidad Contratante</p>
                    <p class="text-xs font-bold text-slate-600 truncate">{{ contract.nombre_entidad }}</p>
                </div>
            </div>

            <div class="mt-auto pt-6 border-t-2 border-dashed border-slate-100 relative z-10">
                <div class="flex justify-between items-end">
                    <div>
                        <p class="text-[11px] text-[#6e11b0] uppercase font-black tracking-[0.2em] mb-1">Valor Final</p>
                        <p class="text-2xl font-black text-slate-900 tracking-tighter">{{
                            formatCurrency(Number(contract.valor_contrato)) }}
                        </p>
                    </div>
                    <a target="_blank" :href="contract.detalle"
                        class="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-[#6e11b0] transform transition-all group-hover:rotate-12 shadow-xl shadow-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2.5">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>