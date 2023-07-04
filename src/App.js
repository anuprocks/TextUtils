import React, { useState } from 'react';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert2 from './components/Alert2';
// import { BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  const [mode, setmode] = useState(`light`);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success")
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success")
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert2 alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/" element={<TextForm heading="enter the text to analyze below" mode={mode} />} /> */}
          <TextForm heading="enter the text to analyze below" mode={mode} />
          {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
    {/* </BrowserRouter> */}

    </>
  );
}

export default App;
