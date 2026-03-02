import axios from "axios";
import type { RestContratos } from "../types/RestContratos";
import type { FiltrosSecop } from '../types/filters';



/**
 * Servicio encargado únicamente de comunicarse con la API de SECOP II
 * No maneja estado, no usa Vue, no es reactivo.
 */
//891180021
const urlBase = "https://www.datos.gov.co/resource/p6dx-8zbt.json";


export const secopGetApi = async (filters:FiltrosSecop): Promise<RestContratos[]> => {
 const whereClause = buildWhereClause(filters);
 
  const response = await axios.get<RestContratos[]>(urlBase, {
    params: {
      $select:`
        referencia_del_proceso,
        entidad,
        descripci_n_del_procedimiento,
        fase,
        fecha_de_publicacion_del,
        valor_total_adjudicacion,
        estado_del_procedimiento,
        urlproceso
      `,
      $where: whereClause,
      $limit: 50000,
      $offset: 0
    }
  });
  return response.data;
};

const buildWhereClause = (filtros:FiltrosSecop): string => {

  let conditions: string[] = [];

  const {nitEntidad, fechaDesde, fechaHasta, referencia, estado, descripcion, proveedor} = filtros

  // Siempre filtra por NIT
  conditions.push(`nit_entidad='${nitEntidad.trim()}'`);

  if (!filtros) return conditions.join(" AND ");

  // Fecha
  if (filtros.fechaDesde && filtros.fechaHasta) {
    conditions.push(`
      date_trunc_ymd(fecha_de_publicacion_del)
      BETWEEN '${fechaDesde.toISOString().split('T')[0]}'
      AND '${fechaHasta.toISOString().split('T')[0]}'
    `);
  }

  // Estado
  if (estado.trim()!=="") {
    conditions.push(`estado_del_procedimiento='${estado.trim()}'`);
  }

  // Referencia
  if (referencia.trim()!=="") {
    conditions.push(`referencia_del_proceso LIKE '%${referencia.trim()}%'`);
  }

  // Descripción
  if (descripcion.trim()!=="") {
    conditions.push(`descripci_n_del_procedimiento LIKE '%${descripcion.trim()}%'`);
  }

  // Proveedor
  if (proveedor.trim()!=="") {
    conditions.push(`nombre_del_proveedor LIKE '%${proveedor.trim()}%'`);
  }

  return conditions.join(" AND ");
};
