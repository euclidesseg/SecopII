import axios from "axios";
import type { RestContratos } from "../types/RestContratos";


/**
 * Servicio encargado únicamente de comunicarse con la API de SECOP II
 * No maneja estado, no usa Vue, no es reactivo.
 */

export const secopGetApi = async (nitEntidad:string): Promise<RestContratos[]> =>{
    const response = await axios.get<RestContratos[]> ('https://www.datos.gov.co/resource/p6dx-8zbt.json', {
        params:{
            nit_entidad: nitEntidad
        }
    })
    return response.data
}