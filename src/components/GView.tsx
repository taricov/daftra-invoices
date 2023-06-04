import { Box, Container, Grid, Slider, Switch, Text } from "@mantine/core";
import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button } from '@mantine/core';

import AppCard from "./AppCard";

export default function GView() {
  const [opened, { open, close }] = useDisclosure(false);

  // const [endValue, setEndValue] = useState(50);
  const [gutter, setGutter] = useState<number>(50);
  const [padding, setPadding] = useState<number>(10);
  const [spanning, setSpanning] = useState<number>(4);
  const [isGrow, setGrow] = useState(false);

  const invs = [
    { id: 1, label: "label1" },
    { id: 2, label: "label1" },
    { id: 3, label: "label1" },
    { id: 4, label: "label1" },
    { id: 5, label: "label1" },
    { id: 6, label: "label1" },
    { id: 6, label: "label1" },
    { id: 7, label: "label1" },
    { id: 8, label: "label1" },
    { id: 1, label: "label1" },
    { id: 1, label: "label1" },
    { id: 1, label: "label1" },
    { id: 1, label: "label1" }
  ];
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

      <Group position="center">
        <Button onClick={open}>Open Drawer</Button>
      </Group>
      

      <Container>
        <Grid grow={isGrow} gutter={gutter}>
          {invs.map((inv) => (
            <Grid.Col
              className={`p-[${padding}px]`}
              key={Math.random()*1000}
              span={spanning}
            >
              <AppCard p={padding}/>
              {/* <div className=" bg-blue-300">{inv.id}</div> */}
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
}
