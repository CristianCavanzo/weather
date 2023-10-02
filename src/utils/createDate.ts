const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
];
const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];
export const getDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.getMonth();
    return `${days[date.getDay()]}  ${day} ${months[month]}`;
};
