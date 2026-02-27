import type { FiltrosSecop } from "../types/filters";

export const validateForm = (filtros:FiltrosSecop): boolean => {
    const {nitEntidad, fechaDesde, fechaHasta} = filtros;
    if (!nitEntidad || nitEntidad.trim() === "") {
        alert("El campo NIT de la entidad es obligatorio.");
        return false;
    }
    if (fechaDesde && fechaHasta && fechaDesde > fechaHasta) {
        alert("La fecha desde no puede ser posterior a la fecha hasta.");
        return false;
    }
    return true;
}