import { Box, Container, Grid, Slider, Switch, Text } from "@mantine/core";
import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button } from '@mantine/core';

import AppCard from "./AppCard";

interface invProps {
  id: string;
  code: string;
  status: string;
  createdAt: string;
  dueDate: string;
  clientName: string;
  amount: string;
  clientStatus: string;
  currency: string;
  paymentStatus: string;
  salesman: string;
  totalDiscount: string;
  totalTax: string;
  items: string[];

}

const invs: invProps[] = [
  {
      id: "22",
      code: "#3322",
      clientStatus: "Fraud",
      status: "draft",
      paymentStatus: "unpaid",
      createdAt: "21/03/2023",
      dueDate: "21/04/2023",
      clientName: "Hussain Hussain",
      amount: "400",
      items: ["2", "2","@"],
      totalDiscount: "100",
      totalTax: "30",
      currency: "SAR",
      salesman: "Samir Ahmed",
  }
]

export default function GView() {
  const [opened, { open, close }] = useDisclosure(false);

  // const [endValue, setEndValue] = useState(50);
  const [gutter, setGutter] = useState<number>(50);
  const [padding, setPadding] = useState<number>(10);
  const [spanning, setSpanning] = useState<number>(4);
  const [isGrow, setGrow] = useState(false);

  return (
    <>
     <Drawer classNames={{body: "app-grad"}} title="Change grid styles" position="bottom" size={"200px"} opened={opened} onClose={close} withCloseButton={false}>
     <Box maw={400} mx="auto" className="my-10">
        <Text mt="md" size="sm">
          Gutter: <b>{gutter}</b>
        </Text>
        <Slider
          labelAlwaysOn
          value={gutter}
          onChange={setGutter}
          // onChangeEnd={setEndValue}
        />
        <Text mt={5} size="sm">
          Grow is: <b>{isGrow ? "t" : "f"}</b>
        </Text>
        <Switch checked={isGrow} onChange={() => setGrow(!isGrow)} />
        <Text mt="md" size="sm">
          Spanning <b>{spanning}</b>
        </Text>
        <Slider
          labelAlwaysOn
          value={spanning}
          onChange={setSpanning}
          // onChangeEnd={setEndValue}
          max={12}
        />
        <Text mt="md" size="sm">
          Padding: <b>{padding}</b>
        </Text>
        <Slider labelAlwaysOn value={padding} onChange={setPadding} max={20} />
      </Box>
      </Drawer>

      <Container className="overflow-hidden mb-10 p-0 mx-5 md:mx-auto text-center bg-violet-200/10 rounded-lg">
<div className="flex items-center justify-center py-5">
filters goes here!!! 
      </div>
<div className="flex w-full">

        <Button classNames={{label: "!p-0"}} className="rounded-none rounded-tr-md w-full md:w-fit px-1 py-1 h-fit inline-block duration-200 transition hover:bg-green-500/90 trasform hover:scale-105 relative text-[10px] font-medium text-violet-900 bg-green-500/80 outline-sky-400 focus-visible:outline-2  text-center" onClick={open}>Adjust the layout</Button>
</div>
        </Container>

      

      <Container>
        <Grid grow={isGrow} gutter={gutter}>
          {Array(20).fill(invs).map((inv) => (
            <Grid.Col
              className={`p-[${padding}px]`}
              key={Math.random()*1000}
              span={spanning}
            >
<AppCard {...inv}/>
              {/* <div className=" bg-blue-300">{inv.id}</div> */}
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
}
