import type { ReactElement } from "react";
import { Navbar } from "./Navbar";

export default function Layout({children}:{children :ReactElement}){

    return (
        <>
        <Navbar/>
        {children}
        
        </>
    )
}