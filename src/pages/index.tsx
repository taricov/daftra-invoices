
import { Badge, Container, Text } from "@mantine/core";
import { type NextPage } from "next";
import Link from "next/link";
// import "./styles.css";
// import { api } from "@/utils/api"

const Home: NextPage = () => {
// const Home: NextPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {


  return (
    <>



<Container className="md:mt-[4rem] md:mx-3 lg:mx-auto mt-32 !mb-5 mx-5 text-center bg-violet-200/10 rounded-lg py-14">
        <Badge className="bg-gradient-to-r from-violet-900/60 to-black/50 via-slate-300 text-center text-transparent via- bg-clip-text relative before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full py-1 px-4 before:bg-indigo-900 before:bg-opacity-10 before:w-full before:h-full">
          Free and Open-Source 
          </Badge>
            <Text component="h1" className="text-center text-4xl sm:text-[5rem] sm:leading-[4rem] leading-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-black ">D-Invoices </Text>
            <Text component="h3" className="text-center text-xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-black">Invoice Manager 
    </Text>
            <Text component="h6" className="m-0 text-center text-sm sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-black">For a better and more convenient ERP experience</Text>

<Link href="#" className="transition duration-400 inline-flex justify-between items-center py-1 px-1 pr-4 my-7 text-sm text-violet-100 bg-violet-900/80 rounded-full  hover:bg-violet-900/100" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> 
            <span className="text-sm font-medium">Try it Now with a sample data!</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </Link>

<div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href="#" className="inline-flex justify-center items-center py-3 px-5 app-btn-light">
                Connect
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link href="#" className="app-btn inline-flex justify-center items-center py-3 px-5 ">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Watch video
            </Link>  
        </div>
<div className="flex items-center justify-center !mt-10 sm:m-0 mx-3 ">

  {/* <AppTabs/> */}
  </div>
        </Container>
        

      {/* <MantineProvider>
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
        

<GView data={data}/>
        {/* <Container className="">{toggledVal === "tbl" ? <TView /> : <GView />}</Container> */}

    </>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps<any> = async () => {
//   const apikey = "24b476fdd8aa43091e0963ba01b98762155c9dd4"
//   const url = 'https://taricov.daftra.com/v2/api/entity/invoice/list/1'
//   const res = await fetch(url,{
//     method: "GET",
//     headers:{
//       apikey,
//       "content-type": "application/json"
//     }
//   })
//   const data: Response = await res.json();
//   // console.log(data)
//   return {
//     props: data
//   }
// }