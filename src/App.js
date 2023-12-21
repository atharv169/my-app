// import logo from './logo.svg';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert'
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enable","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success")
    }
  }
  return (
    <>
    
    {/* <Router> */}
    <Navbar title="TextUtil2"  mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
        <div className='container my-3'>
           {/* <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/"> */}
                <TextForm heading="Enter the text to analyze" mode={mode}/>
              {/* </Route>
          </Switch> */}
        </div>
    {/* </Router> */}
{/*<About/>*/}


    </>
  );
}

export default App;
