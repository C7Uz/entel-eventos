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

export function useFormatDate(value: any) {
  let dateString = '';
  if(value){
      let parseDate = value.split('T');
      if(parseDate.length > 1){
          let newDate = parseDate[0];
          let newTime = parseDate[1].substring(0, 8);
          let newDateString = `${newDate} ${newTime}`;
          let month = moment(newDateString).format('MMMM');
          let monthEs = months[month.toUpperCase()];
          dateString = moment(newDateString).format('D [de]') + ' ' + monthEs;
      }
  }
  return dateString;
}
