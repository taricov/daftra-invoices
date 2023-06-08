/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Box, Container, Grid, Slider, Switch, Text } from "@mantine/core";
import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button } from '@mantine/core';

import AppCard from "./AppCard";

// interface invProps {
//   id: string;
//   code: string;
//   status: string;
//   createdAt: string;
//   dueDate: string;
//   clientName: string;
//   amount: string;
//   clientStatus: string;
//   currency: string;
//   paymentStatus: string;
//   salesman: string;
//   totalDiscount: string;
//   totalTax: string;
//   items: string[];

// }

// const invs: invProps[] = [
//   {
//       id: "22",
//       code: "#3322",
//       clientStatus: "Fraud",
//       status: "draft",
//       paymentStatus: "unpaid",
//       createdAt: "21/03/2023",
//       dueDate: "21/04/2023",
//       clientName: "Hussain Hussain",
//       amount: "400",
//       items: ["2", "2","@"],
//       totalDiscount: "100",
//       totalTax: "30",
//       currency: "SAR",
//       salesman: "Samir Ahmed",
//   }
// ]

export default function GView(props:any) {
  const [opened, { open, close }] = useDisclosure(false);

  // const [endValue, setEndValue] = useState(50);
  const [gutter, setGutter] = useState<number>(50);
  const [padding, setPadding] = useState<number>(10);
  const [spanning, setSpanning] = useState<number>(4);
  const [isGrow, setGrow] = useState(false);

// console.log(props)

  return (
    <>
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
              className={`p-[${padding}px]`}
              key={Math.random()*1000}
              span={spanning}
            >
<AppCard inv={inv}/>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
}
