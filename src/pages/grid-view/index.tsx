/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Container, Drawer, Grid, Pagination, Slider, Switch, Text } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { useState } from "react";

import AppCard from "@/components/AppCard";
import type { GetStaticProps } from "next";
import Link from "next/link";
import ViewsHero from "@/components/ViewsHero";

const paymentsStatusColors:any = {
  paid: "bg-green-500/80",
  unpaid: "bg-red-500/80",
  "partially-paid": "bg-orange-500",
}


export default function GView({...props}:any) {
// console.log(props.data)
// const { data } = useQuery({queryKey:['invs'], queryFn:GetInvoices, initialData: invs}) 

// const data = invs.data as object[]
  const [opened, { open, close }] = useDisclosure(false);

  // const [endValue, setEndValue] = useState(50);
  const [gutter, setGutter] = useState<number>(50);
  const [padding, setPadding] = useState<number>(10);
  const [spanning, setSpanning] = useState<number>(4);
  const [isGrow, setGrow] = useState(false);

  return (
    <>
    {/* {data.map(data =>console.log(JSON.stringify(data)))} */}
     <Drawer classNames={{title: "text-white  font-bold mb-3  px-6 py-4 bg-white/10 w-full text-center", body: "app-grad", header: "app-grad p-0"}} title="Change grid styles" position="bottom" size={"200px"} opened={opened} onClose={close} withCloseButton={false} className="p-0 ">
     <Box maw={400} mx="auto" className="pt-1 space-y-4">

     <Box className="relative flex items-center justify-between">
        <Text size="sm" className="m-0 text-white">
        <b>{isGrow ? "Stretched" : "Compact"}</b>
        </Text>
        <Switch  className="" checked={isGrow} onChange={() => setGrow(!isGrow)} />
      </Box>

     <Box maw={400} mx="auto" className="flex-col items-center justify-center">
        <Text size="sm" className="m-0 text-white">
<b>{gutter}</b>
        </Text>
        <Slider
        className="after:content-['Gutter'] after:absolute after:-right-10 after:-top-3 transform after:-translate-x-1/2 after:-translate-y-1/2 after:text-3xl after:font-semibold after:text-white/10"
          labelAlwaysOn={false}
          value={gutter}
          onChange={setGutter}
        />
        </Box>
        <Box maw={400} mx="auto" className="flex-col items-center justify-center">
        <Text size="sm" className="m-0 text-white">
<b>{spanning}</b>
        </Text>
        <Slider
        className="after:content-['Spanning'] after:absolute after:-right-14 after:-top-3 transform after:-translate-x-1/2 after:-translate-y-1/2 after:text-3xl after:font-semibold after:text-white/10"
        labelAlwaysOn={false}
        value={spanning}
        onChange={setSpanning}
        max={12}
        />
        </Box>

        {/* <Text mt="md" size="sm">
          Padding: <b>{padding}</b>
        </Text>
        <Slider labelAlwaysOn value={padding} onChange={setPadding} max={20} /> */}
      </Box>
      </Drawer>

      <Container className="flex items-center justify-center md:mt-[4rem] md:mx-3 mt-32 lg:mx-auto overflow-hidden mb-10 p-0 mx-5 text-center bg-violet-200/10 rounded-lg">
{/* <div className="flex items-center justify-center py-5">
      </div> */}
<ViewsHero/>

        </Container>


      <Container className="md:mx-3 lg:mx-auto overflow-hidden mb-10 p-0 mx-5 text-center bg-violet-200/10 rounded-lg">
<div className="flex items-center justify-center py-5">
filters goes here!!! 
      </div>
<div className="flex w-full">

        <Button classNames={{label: "!p-0"}} className="rounded-none rounded-tr-md w-full md:w-fit px-1 py-1 h-fit inline-block duration-200 transition hover:bg-green-500/90 trasform hover:scale-105 relative text-[10px] font-medium text-violet-900 bg-green-500/80 outline-sky-400 focus-visible:outline-2  text-center" onClick={open}>Adjust the layout</Button>
</div>
        </Container>

      

      <Container className="md:mx-3 lg:mx-auto">
        <Grid grow={isGrow} gutter={gutter}>
          {props.data.map((inv:any) => (
            <Grid.Col
              className={`p-[${padding}px] min-h-max`}
              key={Math.random()*1000}
              span={spanning}
            >
{/* <AppCard data={inv}/> */}


<div key={inv.id} className={`bg-white/80 shadow-xl rounded-lg overflow-hidden ${'pad'} h-full`}>
    <div className={`relative bg-cover bg-center h-3 flex justify-end items-center ${paymentsStatusColors[inv.payment_status === 2 ? "paid" : inv.payment_status === 1 ? "unpaid" : "partially paid"]}`}>
    </div>

<div className="px-4 pb-3 pt-4 border-b border-violet-200 bg-violet-100/20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
        <Link href={'https://taricov.daftra.com/owner/staff/'+ inv.sales_person_id} target="_blank" className="sm:text-sm text-xs flex items-center hover:underline transition">
        <span className="line-clamp-1 md:line-clamp-0">
            {inv.sales_person_id === 0 ? "Admin" : inv.sales_person > 0 ? "No Sales Person" : "Admin"}
        </span>
        <span className="hidden md:inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" className='ml-1' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-1 0V12H3V3h3.5a.5.5 0 0 0 0-1H3Zm9.854.146a.5.5 0 0 1 .146.351V5.5a.5.5 0 0 1-1 0V3.707L6.854 8.854a.5.5 0 1 1-.708-.708L11.293 3H9.5a.5.5 0 0 1 0-1h3a.499.499 0 0 1 .354.146Z" clipRule="evenodd"/></svg>
        </span>
        </Link>
        </div>

<div className="flex items-center space-x-2">
<div className="transition duration-100 text-gray-500 hover:text-gray-500/80 cursor-pointer">
    <Link href={"http://taricov.daftra.com/owner/invoices/view/"+inv.id} target="_blank">
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
        <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Invoice: <div className="font-normal">{inv.no}</div></div>
        <div className="text-right text-xs uppercase font-bold text-gray-600 tracking-wide">Payment Status: <div className={`font-normal ${paymentsStatusColors[inv.payment_status === 2 ? "paid" : inv.payment_status === 1 ? "unpaid" : "partially paid"]} bg-clip-text text-transparent`}>{inv.payment_status === 2 ? "paid" : inv.payment_status === 1 ? "unpaid" : "partially paid"}</div></div>
    </div>
    <div className="p-4 w-full text-gray-700 flex justify-between items-start">
        <div>
            <p className="text-3xl text-gray-900 leading-none my-1">{inv.summary_total + " " + inv.currency_code}</p>
            <p className="text-xs w-full flex items-center">
                <span className=''>
                    Client:&nbsp;
                </span>
                <Link target="_blank" href={'https://'+  "taricov" +'.daftra.com/owner/clients/view/'+ inv.clients?.id} className="sm:text-sm text-xs flex items-center hover:underline transition">
        <span className="line-clamp-1 md:line-clamp-0">
                    {inv.clients?.business_name}
                </span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" className='hidden md:inline-block ml-1' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-1 0V12H3V3h3.5a.5.5 0 0 0 0-1H3Zm9.854.146a.5.5 0 0 1 .146.351V5.5a.5.5 0 0 1-1 0V3.707L6.854 8.854a.5.5 0 1 1-.708-.708L11.293 3H9.5a.5.5 0 0 1 0-1h3a.499.499 0 0 1 .354.146Z" clipRule="evenodd"/></svg>
                </span>
                </Link>
            </p>
            <p className="text-xs w-full">
                <span>
                Issued at:&nbsp;
                </span>
                
                <span>
                {inv.date}
                </span>
                </p>
            
            
        </div>
        <div className="leading-loose bg-gray-500/10 text-gray-900/50 p-1 px-2 rounded-lg uppercase text-xs tracking-wider">{inv.clients?.follow_up_status || "No Status"}</div>
    </div>
    <div className="flex justify-around items-center text-center p-4 border-t border-gray-300 text-gray-600">
            <p className="">
                <span className="text-sm pr-1">Discount</span>
                <span className="block text-gray-900 font-bold">{inv.summary_discount}</span>
            </p>

            <p className="">
                <span className="text-sm pr-1">Tax</span>
                <span className="block text-gray-900 font-bold">{inv.tax1}</span>
            </p>
            <p className="">
            <span className="text-sm pr-1">Items:</span> 
            <span className="block text-gray-900 font-bold">{2}</span>
            </p>
    </div>
   
</div>

            </Grid.Col>
          ))}
        </Grid>
      </Container>
      <Container className="flex items-center justify-center md:mx-3 py-5 !my-10 lg:mx-auto overflow-hidden p-0 mx-5 text-center bg-violet-200/10 rounded-lg">
{/* <div className="flex items-center justify-center py-5"> */}
      <Pagination total={20} siblings={2} defaultValue={10} classNames={{dots:"text-white", control:"text-white !bg-violet-300/20 hover:!bg-violet-300/50 transition duration-400 border-none"}}/>

      </Container>

    </>
  );
}


export const getStaticProps: GetStaticProps<any> = async () => {
  const apiKey = "24b476fdd8aa43091e0963ba01b98762155c9dd4"
  const url = 'https://taricov.daftra.com/v2/api/entity/invoice/list/1?per_page=10'
  const headers:{"Content-Type": string, [key: string]: string} = {
      "Content-Type": "application/json",
      "apikey": apiKey
  }
    const res = await fetch(url, {headers});
    const invs  = await res.json()
    return {
      props: invs
    }
  }
