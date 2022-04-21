import React from 'react'
import './PatientDetails.css'
const PatientDetails = (props) => {
  return (
    <div className="card2">
  <div className="card-body">
    
  <div className="container">
  <div className="row">
    <div className="col-sm">
     <h6>Gender</h6>
     <p>{props.gender}</p>
    </div>
    <div className="col-sm">
    <h6>Birthday</h6>
    <p>{props.birthday}</p>
    </div>
    <div className="col-sm">
    <h6>Phone Number</h6>
    <p>{props.phone}</p>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-sm">
     <h6>Street Address</h6>
     <p>{props.address}</p>
    </div>
    <div className="col-sm">
    <h6>City</h6>
    <p>calcopa</p>
    </div>
    <div className="col-sm">
    <h6>Zip code</h6>
    <p>{props.zipcode}</p>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-sm">
     <h6>Member Status</h6>
     <p>{props.member}</p>
    </div>
    <div className="col-sm">
    <h6>Registered Date</h6>
    <p>{props.date}</p>
    </div>
     <div className="col-sm">
  
    </div>
  </div>
</div>
</div>
</div>

  )
}

export default PatientDetails
