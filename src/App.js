import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";



function App() {
  const [mode , setMode]= useState('light');
  const[alert, setAlert]=useState(null);
const showAlert = (message , type)=>{
setAlert({
  msg: message,
  type: type
})
setTimeout(()=>{
setAlert(null);
},3000);
}
  

 
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("dark mode enabled" , "success")
    
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    showAlert("light mode enabled" , "success");
      
    }
  }
  

  return (
    <>
      <HashRouter>
        <Navbar
          title="TextAnalyzer"
          aboutText="AboutUs"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
  