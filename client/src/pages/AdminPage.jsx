import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarDash from "../components/SidebarDash";

export default function AdminPage() {
  return (
    <div className="flex">
   <SidebarDash />
   <div className='p-7'>
          <h1 className='text-2xl font-semibold'>Dashboard result</h1>
    </div>
   </div>
  )
}
