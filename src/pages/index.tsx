import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";

import { Box, Button, Container, MantineProvider, Text } from "@mantine/core";
import { useState } from "react";
import "./styles.css";
import { BsFillGridFill, BsTable } from "react-icons/bs";
import { useToggle } from "@mantine/hooks";
import TView from "./components/TView";
import GView from "./components/GView";

enum AvailableViews {
  grd = 0,
  tbl = 1
}


const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

};

export default Home;
