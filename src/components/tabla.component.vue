<script setup lang="ts">
import { ref } from 'vue';
import type { Contrato } from '../types/Contrato'
import { SquareArrowOutUpRight } from 'lucide-vue-next';
import { VDataTable, VTextField } from 'vuetify/components';

const props = defineProps<{ contracts: Contrato[] }>()

// columnas de la tabla
const headers = [
  { title: "Referencia", key: "id_contrato", headerProps:{class:'bg-primary-c text-white! font-semibold'} },
  { title: "Entidad", key: "nombre_entidad", headerProps:{class:'bg-primary-c text-white! font-semibold'} },
  { title: "Descripcion", key: "objeto_contrato", headerProps:{class:'bg-primary-c text-white! font-semibold'} },
  { title: "Publicación", key: "fecha_publicacion", headerProps:{class:'bg-primary-c text-white! font-semibold'} },
  { title: "Cuantia", key: "valor_contrato", headerProps:{class:'bg-primary-c text-white! font-semibold'} },
  { title: "Estado", key: "estado_contrato", headerProps:{class:'bg-primary-c text-white! font-semibold'} },
  { title: "Detalles", key: "detalle", sortable:false, headerProps:{class:'bg-primary-c text-white! font-semibold'} },
]

const search = ref('');
</script>

<template>
  <div v-if="contracts.length > 0" class="overflow-x-auto rounded-md">

    <!-- TABLA ESTILIZADA -->
      <div class="search-container">
      <v-text-field
        v-model="search"
        placeholder="Buscar contratos..."
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        density="comfortable"
        hide-details
        clearable
      />
    </div>

    <v-data-table
      :headers="headers"
      :items="contracts"
      :items-per-page="10"
      item-value="id_contrato"
      class=""
      density="comfortable"
      hover
      :mobile-breakpoint="768"
      items-per-page-text="Elementos por página"
      :items-per-page-options="[10, 20, 50, 100]"
      page-text="{0} - {1} de {2}"
      :search="search"
      :no-data-text="'No hay contratos disponibles'"
      >
  

      <!-- FORMATEAR FECHA -->
      <template #item.objeto_contrato="{ item }">
        <span class="line-clamp-2">
          {{item.objeto_contrato}}
        </span>
      </template>
      <!-- FORMATEAR FECHA -->
      <template #item.fecha_publicacion="{ item }">
        {{ new Date(item.fecha_publicacion).toLocaleDateString() }}
      </template>

      <!-- FORMATEAR CUANTIA -->
      <template #item.valor_contrato="{ item }">
        <span class="font-semibold text-green-700">
          $ {{ Number(item.valor_contrato).toLocaleString() }}
        </span>
      </template>

      <!-- ESTADO CON COLOR -->
      <template #item.estado_contrato="{ item }">
        <v-chip
          :color="item.estado_contrato === 'Activo' ? 'green' : 'grey'"
          size="small"
          variant="flat"
        >
          {{ item.estado_contrato }}
        </v-chip>
      </template>

      <!-- BOTON DETALLES -->
        <!-- ENLACE DETALLE -->
      <template #item.detalle="{ item }">
        <a
          :href="item.detalle"
          target="_blank"
          class="text-primary-c hover:text-primary-c/90 font-medium underline flex justify-center"
        >
        <SquareArrowOutUpRight />
        </a>
      </template>


    </v-data-table>

  </div>
</template>
