import moment from 'moment';

export function useFormatTime(value: any) {
  let dateString = '';
  if(value){
      let parseDate = value.split('T');
      if(parseDate.length > 1){
          let newDate = parseDate[0];
          let newTime = parseDate[1].substring(0, 8);
          let newDateString = `${newDate} ${newTime}`;
          dateString = moment(newDateString).format('hh:mm a');
      }
  }
  return dateString;
}
