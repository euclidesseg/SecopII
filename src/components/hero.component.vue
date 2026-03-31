<script setup lang="ts">
import type { FiltrosSecop } from '../types/filters';
import SearchComponent from './search.component.vue';

    const emits = defineEmits<{'filtros':[FiltrosSecop:FiltrosSecop]}>();


</script>
<template>
     <section class="relative pt-32 pb-20 lg:pt-56 lg:pb-32 hero-gradient px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto text-center relative z-10">

          <h1 class="text-5xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            Fiscaliza la <br />
            <span class="brand-text">Inversión Pública</span>
          </h1>

          <p class="text-lg lg:text-2xl text-slate-500 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
            Acceso directo a la infraestructura de datos del SECOP II. Analiza contratos, proveedores y presupuestos.
          </p>

          <!-- Buscador Avanzado -->
          <SearchComponent @filtros="emits('filtros', $event)"></SearchComponent>
        </div>
        
      </section>
</template>