/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /* eslint-disable @typescript-eslint/no-unsafe-return */
// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable @typescript-eslint/no-unsafe-call */
// /* eslint-disable @typescript-eslint/no-unsafe-member-access */
// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { useQuery, useMutation } from "@tanstack/react-query";

// interface HttpResponse<T> extends Response {
//     parsedBody?: T;
//   }
import type { Inv } from "@/types/types"

export const GetAllInvs = async(url:string, perPage:number, page:number, headers:{[key:string]:string}):Promise<unknown> =>{
  const invURL = `${url}?per_page=${perPage}&page=${page}`;
  const res = await fetch(invURL, {headers})
  const json = await res.json();
//   setData(json.data)
  return (json.data) as Inv[]
}



// export async  function GetInvoices<T>(url: string, headers:HeadersInit): Promise<T>{
//             const res = await fetch(url, {headers});
//             const json  = await res.json() as T
//             return json;
// }

//             // const data = await json.data
//             // console.log(data)
//             // return data;
//             }


// // const invQuery = useQuery({
// //     queryKey: ['invoices'],
// //     queryFn: fetchInvoices
// //     })