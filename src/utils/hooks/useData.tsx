// import { useQuery } from '@tanstack/react-query'

// const apiKey = "24b476fdd8aa43091e0963ba01b98762155c9dd4"
// const url = 'https://taricov.daftra.com/v2/api/entity/invoice/list/1'
// const headers = {
//     "Content-Type": "application/json",
//     "apikey": apiKey
// }

// const GetInvoices = async () => {
//             const res = await fetch(url, {headers});
//             const json = await res.json();
//             return json;
// }

// export const useData = () =>{
//  const invs = useQuery(['get-invs'], GetInvoices)
//  return invs

// }