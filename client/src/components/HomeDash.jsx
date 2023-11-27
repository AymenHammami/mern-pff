import React from 'react';
import { IoPeople, IoPieChart, IoMailSharp  } from 'react-icons/io5';
import { GoAlertFill } from "react-icons/go";


export default function HomeDash() {    

  return (
	<main className='w-full'>
      <div className="flex gap-4 p-5">
		<BoxWrapper>
		<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Customers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">34</strong>
						<span className="text-sm text-green-500 pl-2">+9</span>
					</div>
				</div>
		</BoxWrapper>
		<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600 ">
					<IoPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Listings</span>
					<div className="flex items-center">
					<strong className="text-xl text-gray-700 font-semibold">18</strong>
						<span className="text-sm text-green-500 pl-2">+2</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoMailSharp  className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Mails</span>
					<div className="flex items-center">
					<strong className="text-xl text-gray-700 font-semibold">12</strong>
						<span className="text-sm text-green-500 pl-2">+4</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<GoAlertFill className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Reports</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">2</strong>
						<span className="text-sm text-red-500 pl-2">-1</span>
					</div>
				</div>
			</BoxWrapper>
	</div>
	</main>
	)
}
 
function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

