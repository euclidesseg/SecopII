<script setup lang="ts">// setup indica que usaremos Composition API y lang="ts" activa TypeScript.

import FooterComponent from './shared/components/footer.component.vue';
import ListComponent from './components/list.component.vue';
import NavComponent from './shared/components/nav.component.vue';
import { useContratos } from './composables/useContratos';
import { ref } from 'vue'
import HeroComponent from './components/hero.component.vue';
import type { FiltrosSecop } from './types/filters';


// definimos una propiedad reactiva (ref) indica que cuando 
// esta variable cambie, la vista se actualizará automáticamente.

const { contracts, loading, error,obtenerContratos } = useContratos()


const modeList = ref<string>('table')

const changeMode = (mode: string) => {
  modeList.value = mode
}  
const getData = async (filtros:FiltrosSecop) => {
 contracts.value = [] // Limpiar los contratos actuales para mostrar el estado de carga
 await obtenerContratos(filtros) // Volver a cargar los contratos desde el servicio
}

</script>



<template>
  <main>
    <div class="min-h-screen flex flex-col">

      <!-- Navegación -->
      <NavComponent></NavComponent>

      <!-- Hero Section -->
      <HeroComponent @filtros="getData($event)"></HeroComponent>

      <!-- Dashboard de Resultados -->
      <section class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grow">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div class="space-y-2">
            <h2 class="text-4xl font-black text-slate-900 tracking-tight">Fuente de Datos</h2>
            <p class="text-slate-500 font-medium flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Resultados procesados mediante endpoint JSON oficial
            </p>
          </div>
          <div class="flex bg-white p-1.5 gap-1 rounded-xl border border-slate-200 shadow-sm">
            <button class="px-5 py-2.5 rounded-lg text-sm font-bold transition hover:text-slate-600 "
              @click="changeMode('grid')"
              :class="{ 'bg-slate-100 hover:bg-slate-200 text-slate-700': modeList === 'grid' }">
              Vista Grid
            </button>
            <button class="px-5 py-2.5 rounded-lg text-sm font-bold text-slate-400 hover:text-slate-600  transition"
              @click="changeMode('table')"
              :class="{ 'bg-slate-100 hover:bg-slate-200 text-slate-700': modeList === 'table' }">
              Vista Tabla
            </button>
          </div>
        </div>

        <ListComponent :contracts="contracts" :mode="modeList"></ListComponent>
      </section>

      <!-- Footer Profesional -->
      <FooterComponent></FooterComponent>
    </div>


  </main>
</template>

<style>
@import url('../src/style.css');
/* scoped indica que los estilos solo se aplican a este componente */

.brand-text {
  color: #6e11b0;
}

.brand-border {
  border-color: #6e11b0;
}

.brand-shadow {
  box-shadow: 0 10px 25px -5px rgba(110, 17, 176, 0.3);
}

.brand-ring:focus {
  --tw-ring-color: #6e11b0;
}

[v-cloak] {
  display: none;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Gradientes personalizados */
.hero-gradient {
  background: radial-gradient(circle at 50% 0%, rgba(110, 17, 176, 0.08) 0%, transparent 70%);
}
</style>
