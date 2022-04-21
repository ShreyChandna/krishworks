import React from 'react'
import { IoIosArrowForward,BsPlusCircleFill} from "react-icons/bs";
import{IoNotificationsCircle}from "react-icons/io5";
import {AiOutlineUser}  from "react-icons/ai";
import './Grid.css'
const Grid = (props) => {
  return (
    
<nav className="navbar sticky-top navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand"><AiOutlineUser className='plus'/>{props.name}</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /><BsPlusCircleFill className='plus' /> <IoNotificationsCircle className='noti' />
    </form>
  </div>
</nav>
  )
}

export default Grid
