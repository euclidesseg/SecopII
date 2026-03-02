<script setup lang="ts">
import type { Contrato } from '../types/Contrato';
import GridComponent from './grid.component.vue';
import TablaComponent from './tabla.component.vue';

const props = defineProps<{ contracts: Contrato[], mode: string, loading: boolean }>()

const emits = defineEmits<{ (e: 'refresh'): void }>();

</script>


<template>
  <section class="container">

    <!-- CONTENIDO -->
<component :is="mode === 'grid'? GridComponent : TablaComponent" :contracts="props.contracts"/>
    <!-- LOADER OVERLAY -->
    <div v-if="loading" class="loader-overlay">
      <span class="loader"></span>
    </div>

  </section>
</template>
<style scoped>
.container {
  position: relative;
}

.loader-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(2px);

  z-index: 10;
}
.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #7c28b8;
  box-shadow: 32px 0 #7c28b8, -32px 0 #7c28b8;
  position: relative;
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: #FFF2;
    box-shadow: 32px 0 #FFF2, -32px 0 #7c28b8;
  }

  50% {
    background-color: #7c28b8;
    box-shadow: 32px 0 #FFF2, -32px 0 #FFF2;
  }

  100% {
    background-color: #FFF2;
    box-shadow: 32px 0 #7c28b8, -32px 0 #FFF2;
  }
}
</style>
