
import React,{ useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Routes,Route } from 'react-router-dom';

function App() {
const [mode, setMOde]=useState('light')

const [alert, setAlert]=useState(null)

const showAlert =(message,type)=>{
    setAlert({
      meg :message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
}

const toggleMode=()=>{
      if(mode==='light'){
        setMOde('dark')
        document.body.style.backgroundColor='#092a47'
        showAlert('Dark mode has been enable', "success")
        document.title="TextUtils-Dark"

        //For Flax the title (koi v chij chmkane k liea we can use thease thing)
       /* setInterval(() => {
          document.title="TextUtils-Dark Amazing"
        }, 2000);
        setInterval(() => {
          document.title="Install TextUtils-Light"
        }, 1500);*/
    }
    else{
      setMOde('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enable", "success")
      document.title="TextUtils-Light"
      
    }

}


  return (
    <div>
     
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

    <Alerts alert={alert}/>

    <div className='container my-3' >
    
        
    
    <Routes>
      
      <Route path='about'element={<About/>}/>
      <Route path='home' element={<TextForm showAlert={showAlert} heading="Enter The Text" mode={mode}/>}/>
    </Routes>
   </div>
      
    </div>
    
  );
}

export default App;
