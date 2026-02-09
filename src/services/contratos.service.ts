import axios from "axios";
import type { Contrato } from "../types/Contrato";


/**
 * Servicio encargado únicamente de comunicarse con la API de SECOP II
 * No maneja estado, no usa Vue, no es reactivo.
 */

export const secopGetApi = async (nitEntidad:string): Promise<Contrato[]> =>{
    const response = await axios.get<Contrato[]> ('https://www.datos.gov.co/resource/p6dx-8zbt.json', {
        params:{
            nit_entidad: nitEntidad
        }
    })
    return response.data
}