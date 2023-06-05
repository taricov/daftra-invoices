export type TypeTStyles<T extends string> = {
    [key in T]: boolean;
  };

//   export interface booleansMap0<T> {
//     T: boolean;
//   }
  export type booleanMap = Record<string, boolean>

//   interface booleanMap {
//     [K: string]: boolean;
//   }