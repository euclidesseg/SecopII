export interface Contrato {
    id_contrato: string;
    nombre_entidad: string;
    objeto_contrato: string;
    face_actual:string;
    fecha_publicacion:Date
    valor_contrato: string; // La API lo devuelve como string a veces
    estado_contrato: string;
    fecha_inicio_ejecucion?: string;
    detalle:string
}