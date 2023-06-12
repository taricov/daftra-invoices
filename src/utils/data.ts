// /* eslint-disable @typescript-eslint/no-unsafe-return */
// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable @typescript-eslint/no-unsafe-call */
// /* eslint-disable @typescript-eslint/no-unsafe-member-access */
// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { useQuery, useMutation } from "@tanstack/react-query";

// interface HttpResponse<T> extends Response {
//     parsedBody?: T;
//   }





export async  function GetInvoices<T>(url: string, headers:HeadersInit): Promise<T>{
            const res = await fetch(url, {headers});
            const json  = await res.json() as T
            return json;
}

//             // const data = await json.data
//             // console.log(data)
//             // return data;
//             }


// // const invQuery = useQuery({
// //     queryKey: ['invoices'],
// //     queryFn: fetchInvoices
// //     })