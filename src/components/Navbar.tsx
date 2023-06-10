import Link from "next/link"
import AppAccess from "./AppAccess";



interface NavPorps  {
    label: string;
    to: string
}

export function Navbar() {
    const listItems:NavPorps[] = [
        {
            label: "Author",
            to: "/author"
        },
        {
            label: "D-Suite",
            to: "https://github.com/taricov"
        },
    ]
    return (
        <>
         <ul className="md:flex">
             <AppAccess />
            {listItems.map(item=> (
                <li key={item.label}><Link href={item.to} className="w-full md:w-fit px-3 py-2 inline-block duration-200 transition hover:text-white hover:bg-white/5 relative text-sm font-medium text-white/80 outline-sky-400 focus-visible:outline-2 rounded text-center">{item.label}</Link></li>

            ))
            }
      </ul>
      {/* <AppAccess openConnect={openConnect} setConnect={setConnect}/> */}
        </>
    )
}