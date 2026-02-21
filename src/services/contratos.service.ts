import axios from "axios";
import type { RestContratos } from "../types/RestContratos";


/**
 * Servicio encargado únicamente de comunicarse con la API de SECOP II
 * No maneja estado, no usa Vue, no es reactivo.
 */

const urlBase = "https://www.datos.gov.co/resource/p6dx-8zbt.json";


export const secopGetApi = async ( nitEntidad: string, filtros?: any, limit = 50000, offset = 0): Promise<RestContratos[]> => {
 const whereClause = buildWhereClause(nitEntidad, filtros);
 
  const response = await axios.get<RestContratos[]>(urlBase, {
    params: {
      $select: `
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
      $limit: limit,
      $offset: offset
    }
  });
  return response.data;
};

const buildWhereClause = (nitEntidad: string, filtros?: any): string => {

  let conditions: string[] = [];

  // Siempre filtra por NIT
  conditions.push(`nit_entidad='${nitEntidad}'`);

  if (!filtros) return conditions.join(" AND ");

  // Fecha
  if (filtros.fechaDesde && filtros.fechaHasta) {
    conditions.push(`
      date_trunc_ymd(fecha_de_publicacion_del)
      BETWEEN '${filtros.fechaDesde}'
      AND '${filtros.fechaHasta}'
    `);
  }

  // Estado
  if (filtros.estado?.trim()) {
    conditions.push(`estado_del_procedimiento='${filtros.estado.trim()}'`);
  }

  // Referencia
  if (filtros.referencia?.trim()) {
    conditions.push(`referencia_del_proceso LIKE '%${filtros.referencia.trim()}%'`);
  }

  // Descripción
  if (filtros.descripcion?.trim()) {
    conditions.push(`descripci_n_del_procedimiento LIKE '%${filtros.descripcion.trim()}%'`);
  }

  // Proveedor
  if (filtros.proveedor?.trim()) {
    conditions.push(`nombre_del_proveedor LIKE '%${filtros.proveedor.trim()}%'`);
  }

  return conditions.join(" AND ");
};
