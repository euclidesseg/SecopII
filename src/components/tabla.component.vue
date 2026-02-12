<script setup lang="ts">

import type { Contrato } from '../types/Contrato';
import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useVueTable } from '@tanstack/vue-table';
import { FlexRender } from '@tanstack/vue-table'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'



import { computed, h, ref } from 'vue';
const props = defineProps<{ contracts: Contrato[] }>();

// Source - https://stackoverflow.com/a/77389753
// Posted by mercurus_
// Retrieved 2026-02-11, License - CC BY-SA 4.0



const filterFoo = ref("");
const filterBar = ref("");
const filtersComputed = computed(() => {
  const filters = [];
  if (filterFoo.value) filters.push({ id: "id_contrato", value: filterFoo.value });
  if (filterBar.value) filters.push({ id: "nombre_entidad", value: filterBar.value });
  return filters;
});


const columnHelper = createColumnHelper<Contrato>();

const columns = [
  columnHelper.accessor('id_contrato', {
    header: 'Referencia',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('nombre_entidad', {
    header: 'Entidad',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('objeto_contrato', {
    header: 'Descripción',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('fase_actual', {
    header: 'Fase',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('fecha_publicacion', {
    header: 'Fecha de Publicacion',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('valor_contrato', {
    header: 'Valor',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('detalle', {
  header: 'Detalles',
  cell: info => {
    const url = info.getValue()

    return h(
      'a',
      {
        href: url,
        target: '_blank',
        rel: 'noopener noreferrer',
        class: 'text-purple-600 hover:text-purple-800 transition-colors'
      },
      h(ArrowTopRightOnSquareIcon, { class: 'w-5 h-5 mx-auto' })
    )
  }
})

];


const table = useVueTable({
  get data() {
    return props.contracts;
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getPaginationRowModel: getPaginationRowModel(),

  state: {
    get columnFilters() {
      return filtersComputed.value;
    }
  }
});








</script>

<template>
  <div class="overflow-x-auto rounded-xl border border-gray-200 bg-white">
    <table class="min-w-full text-sm text-left text-gray-600">
      <thead class="bg-header-table text-xs uppercase tracking-wider text-white">
        <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id" class="px-4">
          <th v-for="header in headerGroup.headers" :key="header.id" @click="header.column.toggleSorting()"
            class="px-12 py-4 cursor-pointer select-none">
            <FlexRender :render="header.column.columnDef.header" :props="header.getContext()" />

            <span class="ml-1">
              {{
                header.column.getIsSorted() === 'asc'
                  ? ' 🔼'
                  : header.column.getIsSorted() === 'desc'
                    ? ' 🔽'
                    : ''
              }}
            </span>
          </th>
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-200 bg-white">
        <tr v-for="row in table.getRowModel().rows" :key="row.id" class="hover:bg-gray-50 transition-colors">
          <td
            v-for="cell in row.getVisibleCells()"
              :key="cell.id"
              class="px-6 py-4 align-top"
            >
              <div class="line-clamp-3">
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                />
              </div>
            </td>
        </tr>
      </tbody>
    </table>

    
  </div>
  <div class="flex items-center justify-start gap-1.5 p-2">
    <button @click="table.previousPage()" class="brand-bg p-2 rounded-md text-white font-semibold brand-hover-bg transition-colors text-lg cursor-pointer flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="transform rotate-180 flex items-center justify-center" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"/></svg>
      <span>Anterior</span>
    </button>
    <button @click="table.nextPage()" class="brand-bg p-2 rounded-md text-white font-semibold brand-hover-bg transition-colors text-lg cursor-pointer flex items-center justify-center">
      <span>Siguiente</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"/></svg>
    </button>
  </div>

</template>

<style scoped>
.my-custom-table {
  width: 100%;
  border-collapse: collapse;
}

.my-custom-table th,
.my-custom-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.my-custom-table th {
  background-color: #f2f2f2;
}
</style>