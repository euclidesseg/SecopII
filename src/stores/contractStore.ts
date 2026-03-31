import type { FiltrosSecop } from './../types/filters';
import { defineStore } from "pinia"
import type { Contrato } from "../types/Contrato"
import { ref } from "vue"
import { secopGetApi } from "../services/contratos.service"
import { ContractMapper } from '../mapper/contratos.mapper';

export const useContratosStore = defineStore('contracts', () =>{
    const contracts = ref<Contrato[]>([])
    const loading = ref(false);
    const error = ref<string|null>(null);

    const fetchContracts = async (secopFilters:FiltrosSecop) =>{
        loading.value = true;
        error.value = null;

        try{
            contracts.value = ContractMapper.mapTransformToArrayRestContractToContract(await secopGetApi(secopFilters));
        }catch(e:any){
            console.error("Error en store", e);
            error.value = e.response?.data?.message || 'Error al obtener los datos';
        }finally{
            loading.value = false;
        }
    }
    
    return{
        fetchContracts,
        contracts,
        loading,
        error
    }
})