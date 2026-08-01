/* eslint-disable no-unreachable */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React ,{useState} from "react"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = ()=>
{

 return (
    <nav className="w-full shadow-md bg-white">
   <div className=" max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
    <h1 className="text-3xl font-bold
    text-blue-600">
     TravelX
    </h1>
    <ul className="flex items-center gap-8">
        <li className="cursor-pointer hover:text-blue-600
        transition duration-300">
         Home
        </li>
        <li className="cursor-pointer hover:text-blue-600
        transition duration-300">
         Destinations
        </li>
        <li className="cursor-pointer hover:text-blue-600
        transition duration-300">
         Services
        </li>
        <li className="cursor-pointer hover:text-blue-600
        transition duration-300">
         Gallery
        </li>
        <li className="cursor-pointer hover:text-blue-600
        transition duration-300">
         Contact
        </li>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-700">
            Book Now
        </button>

    </ul>
   </div>
    </nav>
 )
}

export default Navbar