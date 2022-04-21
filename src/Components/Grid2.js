import React from 'react'
import { BsPlusCircleFill} from "react-icons/bs";
import{IoNotificationsCircle}from "react-icons/io5";
import{IoIosArrowForward}from "react-icons/io";
import {AiOutlineUser,AiFillPrinter}  from "react-icons/ai";
import {BiEdit} from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import './Grid.css'
const Grid2 = (props) => {
  return (

      <nav className="navbar sticky-top navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand"><AiOutlineUser className='plus'/>Patient List<IoIosArrowForward  className='arrow'/>
    <div className="name">
    {props.name}
    </div>
    </a>
    <div className="d-flex">
      <button className='button2'><AiFillPrinter /></button>
      <button className='button3'><BiEdit />Edit Patient</button>
    </div>
  </div>
</nav>
    
  )
}

export default Grid2
