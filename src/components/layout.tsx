import type { ReactElement } from "react";
import { Navbar } from "./Navbar";

export default function Layout({children}:{children :ReactElement}){

    return (
        <>
     <div className="p-1 shadow fixed top-0 z-50 w-full backdrop-blur">
   <Navbar/>
   </div>
        {children}
        
        </>
    )
}