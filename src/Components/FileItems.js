import React from 'react'
import './FileItems.css'
import {CgNotes} from 'react-icons/cg'
import {AiOutlineDelete} from 'react-icons/ai'
import {HiDownload} from 'react-icons/hi'
const FileItems = (props) => {
  return (
    <div className='card-file'>
    <div className="card-body">
    <div className="files" style={{display:"flex"}}>
        <div>
    <p className={props.file}><CgNotes className='cg' />{props.text}</p>
    </div>
    <div>
        <AiOutlineDelete className='ai' />
    </div>
    <div>
        <HiDownload className='hi' />
    </div>
    </div>
  </div>
  </div>
  )
}

export default FileItems
