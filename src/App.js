
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import About from './components/About';
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({msg:message,type:type});
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode is on","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is on","success");
    }
  }
  return (
    <Router>
    <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
      <Route exact path="/about"    element={<About mode={mode}/>}></Route>
      <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
