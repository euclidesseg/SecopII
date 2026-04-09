<script setup lang="ts">
    import { useRoute } from 'vue-router';

    
    const route = useRoute();
    // Obtener ruta por query params
    // const id = route.query.id;

    // Obtener ruta por params
    const id2 = route.params.id;
</script>
<template>
    <!-- <h1>Id: {{ id }}</h1> -->
    <h1 class="px-2 ">Id: {{ id2 }}</h1>

</template> 