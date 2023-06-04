import { motion } from "framer-motion";
import { useState } from "react";
import { BsFillGridFill, BsTable } from "react-icons/bs";


interface TabProps {
    id:string;
     label:string;
     icon:any;
    }

const  tabs: TabProps[] = [
  { id: "g", label: "Grid", icon:(<BsFillGridFill/>)},
  { id: "t", label: "Table",icon:(<BsTable/>) },
];

export default function AppTabs() {
  const [activeTab, setActiveTab] = useState<string | undefined>(tabs[0]?.id);
  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } relative px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2 flex items-center justify-center`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white bg-opacity-10"
              style={{ borderRadius: 5 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <div className="mr-1">
            
          {tab.icon}
          </div>
          <div className="mr-1">
          {tab.label}
          </div>
        </button>
      ))}
    </div>
  );
}
