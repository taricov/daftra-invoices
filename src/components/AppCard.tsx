/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const paymentsStatusColors:any = {
    paid: "bg-green-500/80",
    unpaid: "bg-red-500/80",
    "partially-paid": "bg-orange-500",
}

export default function AppCard({...datta}:any) {
    const [data, setData] = useState<any>({})
    useEffect(()=>{
        setData(datta)
    }, [data])
    // const [inv, setInv] = useState<any>(null)
// console.log(d['0'].id)
//     const invQuery = useQuery({
//         queryKey: ['invoices'],
//         queryFn: fetchInvoices
//         })
//         const {
//           d,
//           isLoading,
//           isFetching,
//           error,
//         } = invQuery
// useEffect(() => {
//     //   console.log(d)

//     },[])
    //   console.log(d)

    // const pad:string = `p-[${data.p}px]` 
    return (
        <>
<div key={data.id} className={`bg-white/80 shadow-xl rounded-lg overflow-hidden ${'pad'}`}>
    <div className={`relative bg-cover bg-center h-3 flex justify-end items-center ${paymentsStatusColors[data.payment_status === 2 ? "paid" : data.payment_status === 1 ? "unpaid" : "partially paid"]}`}>
    </div>

<div className="px-4 pb-3 pt-4 border-b border-violet-200 bg-violet-100/20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
        <Link href={'https://taricov.daftra.com/owner/staff/'+ data.sales_person_id} target="_blank" className="sm:text-sm text-xs flex items-center hover:underline transition">
        <span className="line-clamp-1 md:line-clamp-0">
            {data.sales_person_id === 0 ? "Admin" : data.sales_person > 0 ? "No Sales Person" : "Admin"}
        </span>
        <span className="hidden md:inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" className='ml-1' viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-1 0V12H3V3h3.5a.5.5 0 0 0 0-1H3Zm9.854.146a.5.5 0 0 1 .146.351V5.5a.5.5 0 0 1-1 0V3.707L6.854 8.854a.5.5 0 1 1-.708-.708L11.293 3H9.5a.5.5 0 0 1 0-1h3a.499.499 0 0 1 .354.146Z" clip-rule="evenodd"/></svg>
        </span>
        </Link>
        </div>

<div className="flex items-center space-x-2">
<div className="transition duration-100 text-gray-500 hover:text-gray-500/80 cursor-pointer">
    <Link href={"http://taricov.daftra.com/owner/invoices/view/"+data.id} target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>
</Link>
</div>
<div className="transition duration-100 text-gray-500 hover:text-gray-500/80 cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10 17c0-3.31 2.69-6 6-6h3V5h-2v3H7V5H5v14h5v-2z" opacity=".3"/><path fill="currentColor" d="M10 19H5V5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2zm2-16c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/><path fill="currentColor" d="m18.01 13l-1.42 1.41l1.58 1.58H12v2h6.17l-1.58 1.59l1.42 1.41l3.99-4z"/></svg>

</div>
</div>

</div>

    <div className="w-full px-4 pb-3 pt-4 border-b border-gray-300 bg-gray-100 flex justify-between">
        <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Invoice: <div className="font-normal">{data.no}</div></div>
        <div className="text-right text-xs uppercase font-bold text-gray-600 tracking-wide">Payment Status: <div className={`font-normal ${paymentsStatusColors[data.payment_status === 2 ? "paid" : data.payment_status === 1 ? "unpaid" : "partially paid"]} bg-clip-text text-transparent`}>{data.payment_status === 2 ? "paid" : data.payment_status === 1 ? "unpaid" : "partially paid"}</div></div>
    </div>
    <div className="p-4 w-full text-gray-700 flex justify-between items-start">
        <div>
            <p className="text-3xl text-gray-900 leading-none my-1">{data.summary_total + " " + data.currency_code}</p>
            <p className="text-xs w-full flex items-center">
                <span className=''>
                    Client:&nbsp;
                </span>
                <Link target="_blank" href={'https://'+  "taricov" +'.daftra.com/owner/clients/view/'+ data.clients?.id} className="sm:text-sm text-xs flex items-center hover:underline transition">
        <span className="line-clamp-1 md:line-clamp-0">
                    {data.clients?.business_name}
                </span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" className='hidden md:inline-block ml-1' viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-1 0V12H3V3h3.5a.5.5 0 0 0 0-1H3Zm9.854.146a.5.5 0 0 1 .146.351V5.5a.5.5 0 0 1-1 0V3.707L6.854 8.854a.5.5 0 1 1-.708-.708L11.293 3H9.5a.5.5 0 0 1 0-1h3a.499.499 0 0 1 .354.146Z" clip-rule="evenodd"/></svg>
                </span>
                </Link>
            </p>
            <p className="text-xs w-full">
                <span>
                Issued at:&nbsp;
                </span>
                
                <span>
                {data.date}
                </span>
                </p>
            
            
        </div>
        <div className="leading-loose bg-gray-500/10 text-gray-900/50 p-1 px-2 rounded-lg uppercase text-xs tracking-wider">{data.clients?.follow_up_status || "No Status"}</div>
    </div>
    <div className="flex justify-around items-center text-center p-4 border-t border-gray-300 text-gray-600">
            <p className="">
                <span className="text-sm pr-1">Discount</span>
                <span className="block text-gray-900 font-bold">{data.summary_discount}</span>
            </p>

            <p className="">
                <span className="text-sm pr-1">Tax</span>
                <span className="block text-gray-900 font-bold">{data.tax1}</span>
            </p>
            <p className="">
            <span className="text-sm pr-1">Items:</span> 
            <span className="block text-gray-900 font-bold">{2}</span>
            </p>
    </div>
   
</div>
{/* <div className="text-gray-600 my-3 text-center"><i className="fas fa-ellipsis-v"></i></div>
<div className="text-xs uppercase text-gray-400 tracking-wider text-center leading-none">EST Flight Time: <span className="font-bold text-sm">2 hr 14 min</span></div>
<div className="text-gray-600 my-3 text-center"><i className="fas fa-ellipsis-v"></i></div> */}



        </>
    )
}