// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import {Route,Routes} from "react-router-dom"
function App() {
  const [mode, setMode]=useState('light'); //Whether dark mode is enabled or not
  
  const [alert,setAlert]=useState(null)

  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode= () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='black';
     
      showAlert("Dark Mode has been enabled","success")
      // document.title="TextUtils-Dark Mode"   //changing title dynamically

      // setInterval(() => {
      // alert ( "Install TextUtils Now")
      // }, 1000);    //to get alert every sec    
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
     
      showAlert("Light Mode has been enabled","success")
      // document.title="TextUtils-Light Mode"

    }

  }

  return (
   <>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>

    <Alert alert={alert} />
   
    <div className="container my-3">
<Routes>
  <Route exact path='/' element={ <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>}/>
  <Route exact path='/about' element={<About/>}/>
</Routes>
     
      
      
   
    </div>

   </>
  );
}

export default App;
