import React from 'react'
import FileItems from './FileItems'
import './FileItems.css'
const FilesList = () => {
  return (
    <div className='Filelist'>

        <FileItems text= "Check up result.pdf" file='para1' />
        <FileItems text= "Dental X-ray result2.pdf"  file='para2'  />
        <FileItems text= "Medical Prescription.pdf"  file='para3' />
        <FileItems text= "Dental X-ray result.pdf"  file='para4' />
        
      
    </div>
  )
}

export default FilesList
