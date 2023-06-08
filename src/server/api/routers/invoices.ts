/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
const apikey = "24b476fdd8aa43091e0963ba01b98762155c9dd4"
const url = 'https://taricov.daftra.com/v2/api/entity/invoice/list/1'
// type AsyncFunction <A,O> = ({...args:A}) => Promise<O> 
// type SearchFn = AsyncFunction<[string], string>

// export const invoicesRouter = createTRPCRouter({
//   GeyAll: publicProcedure.query (async ({ctx}): Promise<Response> => {
    // return ctx.prisma.example.findMany();
    // const res = await fetch(url,{
    //   method: "GET",
    //   headers:{
    //     apikey,
    //     "content-type": "application/json"
    //   }
    // })
    // const data: Response = await res.json();
    // console.log(data)
//     return data
//   }),
// });
