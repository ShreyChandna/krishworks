import React from 'react'
import {CgNotes} from'react-icons/cg'
const TreatementDetails = (props) => {
  
  return (
    <div className="card-treatment2">
    <div className="card-body2">
    <nav className="navbar sticky-top navbar-light bg-light ">
   <div className="container-fluid">
     <a className="navbar-brand">Root Canal Treatment</a>
     
     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Show Previous Treatment
           </a>
 </div>
 
 </nav>
 <div className="appointment">
 <div className="lines">
 <div className='linecir'>
 <div className='line'></div>
 <div className='linecircle'>
 </div>
 <div className='line'></div>    
 <div className='line'></div>
 <div className='linecircle'>
 
 </div>
 
 <div className='line'></div>
     </div>
      </div>
     <div className="cards-container">
 <div className="card-treatment3">
    <div className="card-body3">
        <div className="content">
            <div className='content-items'>
        <h5>{props.date}</h5>
        <footer>{props.time}</footer>
        </div>
        <div className='content-items'>
        <h6 className='header'>Treatment</h6 >
        <h4 className='he'>{props.treatment}</h4>
        </div>
        <div className='content-items'>
        <h6 className='header'>Dentist</h6>
        <h4 className='he'>{props.treatment}</h4>
        </div>
        <div className='content-items'>
        <h6 className='header'>Nurse</h6 >
        <h4 className='he'>{props.nurse}</h4>
        </div>
        <a href="#" style={{"margin-top":"1.3rem"}}><CgNotes />Note</a> 
        </div>
 </div>
 </div>
 <div className="card-treatment3">
    <div className="card-body3">
    <div className="content">
            <div className='content-items'>
        <h5>{props.date}</h5>
        <footer>{props.time}</footer>
        </div>
        <div className='content-items'>
        <h6 className='header'>Treatment</h6 >
        <h4 className='he'>{props.treatment}</h4>
        </div>
        <div className='content-items'>
        <h6 className='header'>Dentist</h6>
        <h4 className='he'>{props.dentist}</h4>
        </div>
        <div className='content-items'>
        <h6 className='header'>Nurse</h6 >
        <h4 className='he'>{props.nurse}</h4>
        </div>
        <a href="#" style={{"margin-top":"1.3rem"}}><CgNotes />Note</a> 
        </div>

 </div>
 </div>
 </div>
        </div>
        </div>
        </div>
    
  )
}

export default TreatementDetails
