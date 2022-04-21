import React from 'react'
import './Card.css'
const Card = (props) => {

  return (
    <div className="card">
  <img src={require("./pexels-simon-robben-614810.jpg")} className="rounded-circle" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center" style={{"margin-left":"4rem"}}>{props.name}</h5>
    <p className="card-text text-center">xyz</p>
    <div className="text-center">
      <div className="sched">
        <div className="sched-1">
        <p>{props.past}</p>
        <p>{props.upcoming}</p>
        </div>
        <div className="sched-2">
        <p>Past</p>
        <p>Upcoming </p>
        </div>
      </div>
    <a href="#" className="btn3">Send Message</a>
    </div>
  </div>
</div>
  )
}

export default Card
