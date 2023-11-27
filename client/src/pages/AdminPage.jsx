import { BrowserRouter, Routes, Route } from "react-router-dom";
import Charts from "../components/Charts";
import CustomersChart from "../components/CustomersChart";
import HomeDash from "../components/HomeDash";
import SidebarDash from "../components/SidebarDash";

export default function AdminPage() {
  return (
    <div className=" flex gap-4">
   <SidebarDash />
      <div className="flex-col w-full">
      <HomeDash />
      <div className="flex-row gap-4 flex pt-7">
       <Charts />
       <CustomersChart />
       </div>
   </div>
   </div>
  )
}
