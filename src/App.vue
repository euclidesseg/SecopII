<script setup lang="ts"> // setup indica que usaremos Composition API y lang="ts" activa TypeScript.

  import { useContratos } from './composables/useContratos';
  import {ref} from 'vue'


  // definimos una propiedad reactiva (ref) indica que cuando 
  // esta variable cambie, la vista se actualizará automáticamente.
  const title = ref('Visor de contratos públicos');


  const loading = ref(useContratos().loading);
  console.log(loading.value);


</script>
<template>
  <main>
    <h1>{{ title }}</h1>
    <p class="text-3xl font-semibold underline">Bienvenido al sistema de consulta.</p>
    

  </main>
</template>

<style scoped> /* scoped indica que los estilos solo se aplican a este componente */
  h1 {
    color: #42b883;
  }

</style>
