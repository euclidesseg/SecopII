import {ref, onMounted} from 'vue';
import { secopGetApi } from '../services/contratos.service';
import type {Contrato} from '../types/Contrato';


// Composable encargado de gestionar la consulta de contratos desde el servicio pública de SECOP II, 
// incluyendo manejo de estado de carga y errores.

export const useContratos =() =>{
    const contratos = ref<Contrato[]>();
    const loading = ref<boolean>(false);
    const error = ref<string|null>(null);

    const obtenerContratos = async () =>{
        loading.value = true;
        error.value = null;
        try{
            contratos.value = await secopGetApi('900959048');
        }catch(e:any){
            error.value = e.response?.data?.message || 'Error al obtener los datos';
        }finally{
            loading.value = false;
        }
    }

    onMounted(obtenerContratos)

    // “Cuando este composable sea usado por un componente y el componente se monte, ejecuta obtenerContratos()”.
    return{
        contratos,
        loading,
        error,
        obtenerContratos
    }
}



