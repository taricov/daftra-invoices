/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useQuery, useMutation } from "@tanstack/react-query";

interface HttpResponse<T> extends Response {
    parsedBody?: T;
  }

const apiKey = "24b476fdd8aa43091e0963ba01b98762155c9dd4"
const url = 'https://taricov.daftra.com/v2/api/entity/invoice/list/1'
const headers = {
    "Content-Type": "application/json",
    "apikey": apiKey
}

export const fetchInvoices = async (): Promise<any> => {
            const res= await fetch(url, {headers});
            const json= await res.json();
            return json;
            // const data = await json.data
            // console.log(data)
            // return data;
            }


// const invQuery = useQuery({
//     queryKey: ['invoices'],
//     queryFn: fetchInvoices
//     })