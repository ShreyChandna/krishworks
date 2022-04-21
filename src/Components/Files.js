import React from 'react'
import {AiFillFileAdd} from 'react-icons/ai'

import './Files.css'
import FilesList from './FilesList'
const Files = () => {
  return (
    <div className="card-files" >
  <div className="card-header"><b>Files/Documents</b>
  <a href="#" className='a2'><AiFillFileAdd className='add'/>Add Files</a>
  </div>
  <div className="card-body">
    <FilesList />
  </div>
</div>
  )
}

export default Files
