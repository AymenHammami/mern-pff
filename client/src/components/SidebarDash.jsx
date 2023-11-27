import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaAngleRight } from "react-icons/fa6";
import { IoMailSharp, IoSearchOutline } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import { TfiAnnouncement } from "react-icons/tfi";
import { GoProject } from "react-icons/go";
import { IoAnalytics } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";







export default function AdminPage() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Users" },
    { title: "Listings", icon: <TfiAnnouncement />  },
    { title: "Projects",
        icon: <GoProject />,
        spacing: true,
        submenu :true,
        submenuItems: [
          {title: "Submenu 1"},
          {title: "Submenu 2"},
          {title: "Submenu 3"},
        ],
      },
    { title: "Analytics", icon: <IoAnalytics /> },
    { title: "Inbox", icon: <IoMailSharp /> },
    { title: "Profile", spacing:true, icon: <Link to={'/profile'}><CgProfile /></Link>  },
    { title: "Settings", icon: <IoSettingsSharp /> },
    { title: "Logout", icon: <IoMdLogOut /> },
  ]; 

  return (
    <div>
      <div className={`bg-slate-600 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
          <FaAngleRight className={`bg-white text-slate-700 text-2xl rounded-full absolute -right-3 top-9 border border-slate-700
              cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}  />
          <div className='inline-flex'>
              <RiDashboardFill className={`text-white text-3xl rounded cursor-pointer
              block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
              <h1 className={`text-white origin-left font-medium text-2xl
              duration-300 ${!open && "scale-0"}`}>Dashboard</h1>
          </div>
          <div className={`flex items-center rounded-md bg-slate-500 mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2 `}>
              <IoSearchOutline className={`text-white text-lg block float-left cursor-pointer
              ${open && "mr-2"}`} />
              <input
                 type={"search"}
                 placeholder="Search"
                 className={`text-base bg-transparent w-full text-white focus:outline-none
                 ${!open && "hidden"}`}
                 />
          </div>
          <ul className='pt-2'>
              {Menus.map((menu, index) => (
                <>
                  <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2
                  hover:bg-slate-500 rounded-md ${menu.spacing ? "mt-8" : "mt-2"}`}>
                      <span className='text-white text-xl'>
                        {menu.icon ? menu.icon :<FaUser />}
                      </span>
                      <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                      {menu.submenu && open && (
                        <FaChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={ () => setSubmenuOpen(!submenuOpen) }/>
                      )}
                  </li>
                  {menu.submenu && submenuOpen && open &&(
                    <ul>
                      {menu.submenuItems.map((submenuItems, index) => (
                        <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5
                        hover:bg-slate-500 rounded-md'>
                          {submenuItems.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ))}
          </ul>
      </div>
      
    </div>
  )
}
