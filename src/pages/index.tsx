/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextPage } from "next"
import { Badge, Box, Button, Container, MantineProvider, Text } from "@mantine/core";
import { useState } from "react";
// import "./styles.css";
import { BsFillGridFill, BsTable } from "react-icons/bs";
import { useToggle } from "@mantine/hooks";
import TView from "@/components/TView";
import GView from "@/components/GView";
// import AppAccess from "@/components/AppAccess";
import AppTabs from "@/components/AppTabs";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

// enum AvailableViews {
//   grd = 0,
//   tbl = 1
// }


const Home: NextPage = () => {

  return (
    <>
      <MantineProvider>
        <div className="p-1 shadow fixed top-0 z-50 w-full backdrop-blur">
   <Navbar/>
        </div>

        <Container className="md:mt-12 mt-32 !mb-5 mx-5 md:mx-auto text-center bg-violet-200/10 rounded-lg py-14">
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
<GView/>
        {/* <Container className="">{toggledVal === "tbl" ? <TView /> : <GView />}</Container> */}
      </MantineProvider>

    </>
  );
};

export default Home;
