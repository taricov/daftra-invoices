export type TypeTStyles<T extends string> = {
    [key in T]: boolean;
  };

//   export interface booleansMap0<T> {
//     T: boolean;
//   }
  export type TypeBooleanMap = Record<string, boolean>
  export type TypeUnknownMap = Record<string, unknown>

//   interface booleanMap {
//     [K: string]: boolean;
//   }

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}



export interface Inv {
  [key: string]: unknown
  }