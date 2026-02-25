import {ref, onMounted} from 'vue';
import { secopGetApi } from '../services/contratos.service';
import type {Contrato} from '../types/Contrato';
import { ContractMapper } from '../mapper/contratos.mapper';
import type { FiltrosSecop } from '../types/filters';


// Composable encargado de gestionar la consulta de contratos desde el servicio pública de SECOP II, 
// incluyendo manejo de estado de carga y errores.

export const useContratos = (secopFilters:FiltrosSecop) =>{
    const contracts = ref<Contrato[]>([]);// valor inicial para que no se undefined
    const loading = ref<boolean>(false);
    const error = ref<string|null>(null);

    const obtenerContratos = async () =>{
        loading.value = true;
        error.value = null;
        try{
            contracts.value = ContractMapper.mapTransformToArrayRestContractToContract(await secopGetApi(secopFilters));
        }catch(e:any){
            error.value = e.response?.data?.message || 'Error al obtener los datos';
        }finally{
            loading.value = false;
        }
    }

    obtenerContratos();

    // “Cuando este composable sea usado por un componente y el componente se monte, ejecuta obtenerContratos()”.
    return{
        contracts,
        loading,
        error,
    }
}


