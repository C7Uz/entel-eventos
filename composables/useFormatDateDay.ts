import moment from 'moment';
const months: any = {
  JANUARY: 'Enero',
  FEBRUARY: 'Febrero',
  MARCH: 'Marzo',
  APRIL: 'Abril',
  MAY: 'Mayo',
  JUNE: 'Junio',
  JULY: 'Julio',
  AUGUST: 'Agosto',
  SEPTEMBER: 'Septiembre',
  OCTOBER: 'Octubre',
  NOVEMBER: 'Noviembre',
  DECEMBER: 'Diciembre',
};

const days: any = {
  SUNDAY: 'Domingo',
  MONDAY: 'Lunes',
  TUESDAY: 'Martes',
  WEDNESDAY: 'Miércoles',
  THURSDAY: 'Jueves',
  FRIDAY: 'Viernes',
  SATURDAY: 'Sábado',
};

export function useFormatDateDay(value: any) {
  let dateString = '';
  if(value){
      let parseDate = value.split('T');
      if(parseDate.length > 1){
          let newDate = parseDate[0];
          let newTime = parseDate[1].substring(0, 8);
          let newDateString = `${newDate} ${newTime}`;
          let day = moment(newDateString).format('dddd');
          let month = moment(newDateString).format('MMMM');
          let monthEs = months[month.toUpperCase()];
          let dayEs = days[day.toUpperCase()];
          dateString = dayEs + ' ' +  moment(newDateString).format('D [de]') + ' ' + monthEs;
      }
  }
  return dateString;
}
