import React,{useState,useEffect} from 'react'
import Card from '../Components/Card'
import Grid from '../Components/Grid'
import Grid2 from '../Components/Grid2'
import Notes from '../Components/Notes'
import PatientDetails from '../Components/PatientDetails'
import {MdOutlineArrowForwardIos} from "react-icons/md";
import Treatment from '../Components/Treatment'
import Files from '../Components/Files'


const PatientList = () => {

  const[data,setData]=useState(null);

  async function getDetails(){
    const response= await fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
    const datas= await response.json();
    setData(datas[0]);
    console.log(data);
  }
  useEffect(()=>{
    getDetails();
  },[]);

  return (
    <main>
        
   <Grid  name={data && data.name}/>
   <Grid2 name={data && data.name} icon={<MdOutlineArrowForwardIos />}/>
   <div className='cards'>
   <Card name={data && data.name} past={data && data.Past} upcoming={data && data.Upcoming}/>
   <PatientDetails gender={data && data.Gender} phone={data && data['Phone Number']} birthday={data && data.Birthday} address={data && data['Street Address']} zipcode={data && data['ZIP Code']} member={data && data['Member Status']} date={data && data['Register Date']}/>
   <Notes />
   </div>
   <div style={{display:"flex"}}>
   <Treatment />
   <Files />
   </div>
</main>
  
  )
}

export default PatientList
