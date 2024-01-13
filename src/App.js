
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const toggleMode=()=>{
    console.log('toggleMode');
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success');
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert('Dark mode has been enabled','success');
    }
  }

  const showAlert=(message,type)=>
  {
    setAlert({
      message:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500)

  }
  return (
    <>
      <Router>
        <Navbar title='TextUtils2' aboutText='About Us' mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}/>
        <div className='container my-3'>
          
          {/* <About></About> */}
        
          <Routes>
            
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading='Enter the text to analyze below:' showAlert={showAlert} mode={mode}></TextForm>} />
          </Routes>
        </div>
      </Router>
      
      
    </>
      );
}

export default App;
