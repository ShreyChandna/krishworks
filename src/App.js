import { useEffect,useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Grid from './Components/Grid';
import Payment from './Components/Payment';
import Sidebar from './Components/Sidebar';
import PatientList from './Pages/PatientList';

const App=()=> {
  const[data,setData]=useState(null);
  async function getDetails(){
    const response= await fetch("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
    const datas= await response.json();
    setData(datas[0]);
    console.log(data);
  }
  useEffect(()=>{
    getDetails();
  },[]);

  
 
    return (
    <>

    <Router>
      <Sidebar name={data && data.name} specification={data && data.specification}>
      <Routes>
      <Route path='/home' exact />
        <Route path='/overview' exact />
        <Route path='/calendar' exact />
        <Route path='/patientlist' exact element={<PatientList/>}/>
        <Route path='/messages' exact />
        <Route path='/payment' exact />
        <Route path='/settings' exact />
      </Routes>
     
      </Sidebar>
     
    </Router>
    </>
  );
}

export default App;
