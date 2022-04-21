import React,{useState} from 'react'
import { motion } from 'framer-motion'
import {FaHome,FaSmileBeam} from 'react-icons/fa'
import { NavLink, Route } from 'react-router-dom'
import { FaBars, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation ,AiOutlineUser} from "react-icons/ai";
import {CgCircleci} from "react-icons/cg";
import {BiMessageRoundedDots} from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import {RiListSettingsFill} from "react-icons/ri";
import { HiOutlineCalendar } from "react-icons/hi";
import { AnimatePresence} from "framer-motion";
import Grid from './Grid';
import {MdOutlineArrowForwardIos} from "react-icons/md";
import Grid2 from './Grid2';
import Card from './Card';
import PatientDetails from './PatientDetails';
import Notes from './Notes';

const routes=[
  
    {
        path: "/overview",
        name: "Overview",
        icon: <CgCircleci />,
      },
      {
        path: "/calendar",
        name: "Calendar",
        icon: <HiOutlineCalendar />,
      },
      {
        path: "/patientlist",
        name: "Patient List",
        icon: <AiOutlineUser />,
      },
      {
        path: "/messages",
        name: "Messages",
        icon: <BiMessageRoundedDots />,
            

      },
      {
        path: "/payment",
        name: "Payment Information",
        icon: <BsCartCheck />,
      },
      {
        path: "/settings",
        name: "Settings",
        icon: <RiListSettingsFill />,
        exact: true,
       
      }
]

const Sidebar = (props) => {

    const [isOpen,setIsopen]=useState(false);
  

    const toggle=()=>{
        setIsopen(!isOpen);
    }
    

  return (
    <>
   
    <div className="main-container">
        <motion.div animate={{width:isOpen?"257px":"45px"}} className="sidebar">
    <div className="top-section">
        {isOpen &&<h1 className='logo'><FaSmileBeam className='he'/>ZENDATA</h1>}
        <div className='bars'>
            <FaBars onClick={toggle} />
        </div>
    </div>
        <section className='routes'>
           {routes.map((route)=>(
               <NavLink
                 to={route.path} key={route.name} className="link">
                   <div className="icon">
                      {route.icon} 
                   </div>
                   {isOpen && <div className="link_text">
                       {route.name}
                   </div>}
                   
               </NavLink>

           ))}

          
            <div className="link-1">
              <div className='i'>
              <img src={require("./pexels-simon-robben-614810.jpg")} className='image'/>
              </div>
             {isOpen &&<div className='link_text-1'>
                <h6 className='Dr'>{props.name}</h6>
                <p className='profession'>{props.specification}</p>
              </div>}
            </div>
                  <div>
                   </div>     
        </section>

        </motion.div>
        <main>
          {props.children}
        </main>
        
    </div>
    </>
  )
}

export default Sidebar
