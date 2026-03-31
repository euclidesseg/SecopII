<script setup lang="ts">
  
  // setup indica que usaremos Composition API y lang="ts" activa TypeScript.
  import FooterComponent from './shared/components/footer.component.vue';
  import NavComponent from './shared/components/nav.component.vue';
  import { RouterView } from 'vue-router';

</script>



<template>
  <main>
    <div class="min-h-screen flex flex-col justify-between">

      <!-- Navegación -->
      <NavComponent></NavComponent>


      <RouterView></RouterView>

      <!-- Footer Profesional -->
      <FooterComponent></FooterComponent>
    </div>


  </main>
</template>

<style>

</style>
