/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { InferGetStaticPropsType, type NextPage } from "next"
import { Badge, Box, Button, Container, MantineProvider, Text } from "@mantine/core";
import { useEffect, useState } from "react";
// import "./styles.css";
import { BsFillGridFill, BsTable } from "react-icons/bs";
import { useToggle } from "@mantine/hooks";
import TView from "@/components/TView";
import GView from "@/components/GView";
// import AppAccess from "@/components/AppAccess";
import AppTabs from "@/components/AppTabs";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
// import { api } from "@/utils/api"
import { GetStaticProps } from "next";

const Home: NextPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
// console.log(data);
  // const {data} = api.invoices.GeyAll.useQuery()
  // const [data, setData] = useState<any>([])

  useEffect(() =>{
    // if(data?.ok) setData(data)
    // if(!data?.ok) setData("No data available! Please try again")
  },[data]);

  return (
    <>
      <MantineProvider>
        <div className="p-1 shadow fixed top-0 z-50 w-full backdrop-blur">
   <Navbar/>
        </div>

        <Container className="md:mt-[4rem] md:mx-3 lg:mx-auto mt-32 !mb-5 mx-5 text-center bg-violet-200/10 rounded-lg py-14">
        <Badge className="bg-gradient-to-r from-violet-900/60 to-black/50 via-slate-300 text-center text-transparent via- bg-clip-text relative before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full py-1 px-4 before:bg-indigo-900 before:bg-opacity-10 before:w-full before:h-full">
          Free and Open-Source 
          </Badge>
            <Text component="h1" className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-black">D-Invoices </Text>
            <Text component="h3" className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-black">Invoice Manager 
    </Text>
            <Text component="h6" className="m-0 text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-black">For a better and more convenient ERP experience</Text>
<div className="flex items-center justify-center !mt-10 sm:m-0 mx-3 ">
  <AppTabs/>
  </div>
        </Container>
        
{/* <AppAccess/> */}
<GView data={data}/>
        {/* <Container className="">{toggledVal === "tbl" ? <TView /> : <GView />}</Container> */}
      </MantineProvider>

    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<any> = async () => {
  const apikey = "24b476fdd8aa43091e0963ba01b98762155c9dd4"
  const url = 'https://taricov.daftra.com/v2/api/entity/invoice/list/1'
  const res = await fetch(url,{
    method: "GET",
    headers:{
      apikey,
      "content-type": "application/json"
    }
  })
  const data: Response = await res.json();
  // console.log(data)
  return {
    props: data
  }
}