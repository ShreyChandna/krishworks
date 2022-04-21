import React from 'react'
import './Notes.css'
const Notes = () => {
  return (
    <div className="card mb-3">
    <div className="card-header bg-transparent">Notes
    <a href="#" className='a'>See All</a>
    </div>
    <div className="card-body text-success">
    <input className="form-control form-control-lg" type="text" placeholder="Enter Notes"/>
    <a href="#" className="btn2">Save Note</a>
    </div>
    <div className="card-footer bg-transparent">
        <h6>lorem ipsum</h6>
        <p>Dr.Mega Nanade</p>
    </div>
  </div>
  )
}

export default Notes
