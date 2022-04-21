import React,{useState,useEffect} from 'react'
import TreatementDetails from './TreatementDetails'
import './Treatment.css'

const Treatment = () => {
  const[data,setData]=useState(null);
  async function getDetails(){
    const response= await fetch("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
    const datas= await response.json();
    const hel=datas[0];
    setData(hel['Upcoming Appointments']);
  }
  useEffect(()=>{
    getDetails();
  },[]);

    const[showDetails,setShowDetails]=useState(true);

    const showDetailsHandler=()=>{
        setShowDetails(true);
    }
    const notShowDetailsHandler=()=>{
      setShowDetails(false);
    }
  return (
    <div className="card-treatment">
    <div className="card-body">
      
    <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link " aria-current="page" href="#" onClick={showDetailsHandler}>Upcoming Appointments</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"onClick={notShowDetailsHandler}>Past Appointments</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#" onClick={notShowDetailsHandler}>Medical Records</a>
  </li>
</ul>
{showDetails && <TreatementDetails date={data && data.Date} treatment={data && data.Treatment} dentist={data && data.Dentist} nurse={data && data.Nurse} time={data && data.Time}/>}
   </div>
   </div>
  
  )
}

export default Treatment
