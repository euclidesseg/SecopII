<script setup lang="ts">
  import type { Contrato } from '../types/Contrato';
  import GridComponent from './grid.component.vue';
  import TablaComponent from './tabla.component.vue';

  const props = defineProps<{ contracts: Contrato[], mode:string }>()

  const emits = defineEmits<{(e:'refresh'):void}>();


  console.log(props.mode)

</script>


<template>
    <button @click="emits('refresh')" class="group inline-flex items-center gap-2 px-6 py-3 mb-4 brand-bg brand-hover-bg  active:scale-95 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 transition-all duration-200">
        <svg class="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
        <span>Actualizar Contenido</span>
    </button>
    <section v-if="mode === 'grid'">
      <GridComponent :contracts="props.contracts">
        
      </GridComponent>
    </section>
    <section v-if="mode === 'table'">
      <TablaComponent :contracts="props.contracts">

      </TablaComponent>
    </section>

</template>

