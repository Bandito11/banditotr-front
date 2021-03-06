// export const domain = 'http://localhost:5000'; //for dev
export const domain = '';
//  export const domain = 'http://banditotr.com'; //to test if CORS === *

export interface IBlog {
  id: string;
  title: string;
  date: string;
  headeralt: string;
  headersrc: string;
  contents: string;
}

export interface IResponse<T> {
  success: boolean;
  error: any;
  data: T;
  dateStamp: Date;
}

// export enum WEEKDAYS {
//   domingo,
//   lunes,
//   martes,
//   miércoles,
//   jueves,
//   viernes,
//   sábado
// }
// export enum MONTHS {
//   enero,
//   febrero,
//   marzo,
//   abril,
//   mayo,
//   junio,
//   julio,
//   agosto,
//   septiembre,
//   octubre,
//   noviembre,
//   diciembre
// }
export enum WEEKDAYS {
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday
}
export enum MONTHS {
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
    september,
    october,
    november,
    december
  }
