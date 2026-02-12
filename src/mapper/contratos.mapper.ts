import type { RestContratos } from './../types/RestContratos';
import type { Contrato } from "../types/Contrato";

export class ContractMapper{

    static mapTransformToArrayRestContractToContract(contracts: RestContratos[]):Contrato[]{
      return contracts.map(this.mapTransformToObjectRestContractToContract)
    }

    static mapTransformToObjectRestContractToContract (contract:RestContratos) :Contrato{
        return{
        id_contrato: contract.referencia_del_proceso,
        nombre_entidad: contract.entidad,
        objeto_contrato: contract.descripci_n_del_procedimiento,
        fase_actual:contract.fase,
        fecha_publicacion:contract.fecha_de_publicacion_del,
        valor_contrato: contract.valor_total_adjudicacion,
        estado_contrato: contract.estado_del_procedimiento,
        detalle: contract.urlproceso.url,
        }
    }
}