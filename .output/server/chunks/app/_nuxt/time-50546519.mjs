import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import moment from 'moment';

const months = {
  JANUARY: "Enero",
  FEBRUARY: "Febrero",
  MARCH: "Marzo",
  APRIL: "Abril",
  MAY: "Mayo",
  JUNE: "Junio",
  JULY: "Julio",
  AUGUST: "Agosto",
  SEPTEMBER: "Septiembre",
  OCTOBER: "Octubre",
  NOVEMBER: "Noviembre",
  DECEMBER: "Diciembre"
};
const days = {
  SUNDAY: "Domingo",
  MONDAY: "Lunes",
  TUESDAY: "Martes",
  WEDNESDAY: "Mi\xE9rcoles",
  THURSDAY: "Jueves",
  FRIDAY: "Viernes",
  SATURDAY: "S\xE1bado"
};
function useFormatDateDay(value) {
  let dateString = "";
  if (value) {
    let parseDate = value.split("T");
    if (parseDate.length > 1) {
      let newDate = parseDate[0];
      let newTime = parseDate[1].substring(0, 8);
      let newDateString = `${newDate} ${newTime}`;
      let day = moment(newDateString).format("dddd");
      let month = moment(newDateString).format("MMMM");
      let monthEs = months[month.toUpperCase()];
      let dayEs = days[day.toUpperCase()];
      dateString = dayEs + " " + moment(newDateString).format("D [de]") + " " + monthEs;
    }
  }
  return dateString;
}
function useFormatTime(value) {
  let dateString = "";
  if (value) {
    let parseDate = value.split("T");
    if (parseDate.length > 1) {
      let newDate = parseDate[0];
      let newTime = parseDate[1].substring(0, 8);
      let newDateString = `${newDate} ${newTime}`;
      dateString = moment(newDateString).format("hh:mm a");
    }
  }
  return dateString;
}
const _imports_1 = "" + buildAssetsURL("time.7476fc15.svg");

export { _imports_1 as _, useFormatTime as a, useFormatDateDay as u };
//# sourceMappingURL=time-50546519.mjs.map
