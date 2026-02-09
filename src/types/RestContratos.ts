export interface RestContratos {
    entidad:                         string;
    nit_entidad:                     string;
    departamento_entidad:            string;
    ciudad_entidad:                  string;
    ordenentidad:                    string;
    codigo_pci:                      CodigoPCI;
    id_del_proceso:                  string;
    referencia_del_proceso:          string;
    ppi:                             string;
    id_del_portafolio:               string;
    nombre_del_procedimiento:        string;
    descripci_n_del_procedimiento:   string;
    fase:                            string;
    fecha_de_publicacion_del:        Date;
    fecha_de_ultima_publicaci:       Date;
    fecha_de_publicacion_fase_3:     Date;
    precio_base:                     string;
    modalidad_de_contratacion:       string;
    justificaci_n_modalidad_de:      string;
    duracion:                        string;
    unidad_de_duracion:              string;
    fecha_de_recepcion_de:           Date;
    fecha_de_apertura_de_respuesta?: Date;
    fecha_de_apertura_efectiva?:     Date;
    ciudad_de_la_unidad_de:          Ciudad;
    nombre_de_la_unidad_de:          string;
    proveedores_invitados:           string;
    proveedores_con_invitacion:      string;
    visualizaciones_del:             string;
    proveedores_que_manifestaron:    string;
    respuestas_al_procedimiento:     string;
    respuestas_externas:             string;
    conteo_de_respuestas_a_ofertas:  string;
    proveedores_unicos_con:          string;
    numero_de_lotes:                 string;
    estado_del_procedimiento:        EstadoDelProcedimiento;
    id_estado_del_procedimiento:     string;
    adjudicado:                      Adjudicado;
    id_adjudicacion:                 string;
    codigoproveedor:                 string;
    departamento_proveedor:          string;
    ciudad_proveedor:                string;
    fecha_adjudicacion?:             Date;
    valor_total_adjudicacion:        string;
    nombre_del_adjudicador:          string;
    nombre_del_proveedor:            string;
    nit_del_proveedor_adjudicado:    string;
    codigo_principal_de_categoria:   string;
    estado_de_apertura_del_proceso:  EstadoDeAperturaDelProceso;
    tipo_de_contrato:                string;
    subtipo_de_contrato:             string;
    categorias_adicionales:          string;
    urlproceso:                      Urlproceso;
    codigo_entidad:                  string;
    estado_resumen:                  string;
}

export type Adjudicado  = "Si"|"No";

export interface Ciudad {
    LaVega : "La Vega",
}


export interface CodigoPCI {
    Centralizada : "Centralizada",
}

export type EstadoDeAperturaDelProceso = "Abierto"|"Cerrado";

export type EstadoDelProcedimiento =  "Cancelado"|" Evaluación"|" Seleccionado";


export interface Urlproceso {
    url: string;
}
