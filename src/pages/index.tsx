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
import AppAccess from "@/components/AppAccess";

// enum AvailableViews {
//   grd = 0,
//   tbl = 1
// }


const Home: NextPage = () => {
   // const [cuurentView, setCurrentView] = useState<AvailableViews>(
  // AvailableViews.grd
  // );
  const [disabled, setDisabled] = useState<boolean[]>([false, false]);
  const [toggledVal, toggleVal] = useToggle(["grd", "tbl"]);
  console.log(toggledVal);
  const onToggle = (e: any, v: any) => {
    toggleVal(v);

    if (e.target) {
      console.log(e.target);
    }
  };
  return (
    <>
      <MantineProvider>
        <Box className="px-3 py-1 flex items-start justify-start bg-gradient-to-r from-violet-600 to-indigo-900">
          {/* <Button.Group> */}
            <Button
              disabled={disabled[0]}
            className="text-white !bg-violet-800 !bg-opacity-0 hover:!bg-opacity-30 transition-all duration-300 font-medium rounded"
              onClick={(e) => onToggle(e, "grd")}
            >
              <BsFillGridFill/>
              <div className="ml-1">
                Grid
                </div>
            </Button>
            <Button
              disabled={disabled[1]}
              className="text-white !bg-violet-800 !bg-opacity-0 hover:!bg-opacity-30 transition-all duration-300 font-medium rounded"
              onClick={(e) => onToggle(e, "tbl")}
            >
              <BsTable/>
              <div className="ml-1">
              Table
              </div>
            </Button>
          {/* </Button.Group> */}
        </Box>
        <Container className="text-center mt-10 bg-violet-200 bg-opacity-10 rounded-lg py-14">
        <Badge className="bg-gradient-to-r from-violet-800 text-center to-black text-transparent bg-clip-text relative before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full py-1 px-4 before:bg-indigo-900 before:bg-opacity-10 before:w-full before:h-full">
          Free and Open-Source 
          </Badge>
            <Text component="h1" className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-black">D-Invoices </Text>
            <Text component="h3" className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-black">Invoice Manager 
    </Text>
            <Text component="h6" className="m-0 text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-black">For a better and more convenient ERP </Text>
        </Container>
<AppAccess/>

        <Container className="">{toggledVal === "tbl" ? <TView /> : <GView />}</Container>
      </MantineProvider>
    </>
  );
};

export default Home;
