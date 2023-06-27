
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';




function App() {
  const[mode,setMode]= useState('light')//wether dark mode is  enabled or not
  const[alert,setAlert]= useState(null);
   
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })  
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    }

  const toggleMode=()=>{
    if (mode === 'light') {
      setMode('dark')
      showAlert('dark Mode has been enabled' , "success");
      document.body.style.backgroundColor='#061743';
      // document.title =  "Textutils - Dark Mode";
    }else{
      setMode('light')
      showAlert('light Mode has been enabled' , "success");
      document.body.style.backgroundColor='white';
      // document.title =  "Textutils - Light Mode";
    }
  }

  return (
    <>
    <BrowserRouter>
     <Navbar title = "Textutils" aboutText ="About" mode={mode} toggleMode={toggleMode} ></Navbar>
     <Alert alert={alert}/>
     <div className="container my-3">
     <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact path="/" element={<Textform showAlert={showAlert} heading="Try Textutils- word counter, character counter " mode={mode}
                />
              }>
              </Route>
          </Routes>
     </div>      
     </BrowserRouter>      
     </>
  );
  }
export default App;
