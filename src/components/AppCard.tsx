/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { fetchInvoices, invQuery } from '@/utils/data';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const StatusColors = {
    paid: "bg-green-500",
    unpaid: "bg-red-500",
    "partially-paid": "bg-orange-500",
}
export default function AppCard({...props}) {
    // const [inv, setInv] = useState<any>(null)

    const invQuery = useQuery({
        queryKey: ['invoices'],
        queryFn: fetchInvoices
        })
        const {
          data,
          isLoading,
          isFetching,
          error,
        } = invQuery
useEffect(() => {
      console.log(data)

    },[])
    //   console.log(data)

    // const pad:string = `p-[${props.p}px]` 
    return (
        <>
        		{/* <div className="text-gray-600 my-3 text-center"><i className="fas fa-ellipsis-v"></i></div> */}
                {/* ${StatusColors[inv[]]} */}
<div className={`bg-white shadow-xl rounded-lg overflow-hidden ${'pad'}`}>
    <div className={` bg-cover bg-center h-16 p-4 flex justify-end items-center`}>
        <p className="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg">DFW <span className="tracking-normal"></span> SEA</p>
    </div>

<div className="px-4 pb-3 pt-4 border-b border-gray-300 bg-gray-100 flex items-center justify-between">
<div className="flex items-center space-x-4 ">
<div className="rounded-full w-4 h-4 border border-purple-500"></div>
<div className="text-md font-bold">Investors Meeting</div>
</div>
<div className="flex items-center space-x-4">
<div className="cursor-pointer">
<img className="w-5 h-5 rounded-lg" src="https://i.pravatar.cc/300" />
</div>
<div className="text-gray-500 hover:text-gray-300 cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>
</div>
<div className="text-gray-500 hover:text-gray-300 cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
</svg>
</div>
</div>
</div>

    <div className="px-4 pb-3 pt-4 border-b border-gray-300 bg-gray-100 flex justify-between">
        <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">TSA: <span className="font-normal">5-12 min</span></div>
        <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Airport Status: <span className="font-normal text-green-600">Normal</span></div>
    </div>
    <div className="p-4 text-gray-700 flex justify-between items-start">
        <div>
            <p className="text-3xl text-gray-900 leading-none my-1">AA 792</p>
            <p className="text-xs w-56">American Airlines</p>
            <p className="text-sm w-56">7:11 am -- 10:10 am</p>
            
            
        </div>
        <div className="leading-loose bg-green-500 text-white p-1 px-2 rounded-lg uppercase text-xs tracking-wider">On Time</div>
    </div>
    <div className="flex justify-between items-center p-4 border-t border-gray-300 text-gray-600">
        <div className="flex items-center">
            <p><span className="text-sm pr-1">Terminal</span> <span className="text-gray-900 font-bold">C</span></p>
        </div>
        <div className="flex items-center">
            <p><span className="text-sm pr-1">Gate</span> <span className="text-gray-900 font-bold">C24</span></p>
        </div>
        <div className="flex items-center">
            <p><span className="text-sm pr-1">Seats</span> <span className="text-gray-900 font-bold">12D, 12E</span></p>
        </div>
    </div>
   
</div>

{/* <div className="text-gray-600 my-3 text-center"><i className="fas fa-ellipsis-v"></i></div>
<div className="text-xs uppercase text-gray-400 tracking-wider text-center leading-none">EST Flight Time: <span className="font-bold text-sm">2 hr 14 min</span></div>
<div className="text-gray-600 my-3 text-center"><i className="fas fa-ellipsis-v"></i></div> */}



        </>
    )
}