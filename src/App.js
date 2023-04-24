import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b314e";
      document.body.style.color = "white";
      document.querySelector(".form-check-label").style.color = "black";
      showAlert("Dark Mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode is enabled", "success");
    }
  };

  // const greenMode = () => {
  //   document.body.style.backgroundColor = "green";
  //   document.body.style.color = "black";
  //   const btns = document.querySelectorAll(".btn-primary");
  //   btns.forEach((b1) => (b1.style.background = "green"));
  // };

  // const redMode = () => {
  //   document.body.style.backgroundColor = "red";
  //   document.body.style.color = "black";
  //   const btns = document.querySelectorAll(".btn-primary");
  //   btns.forEach((b1) => (b1.style.background = "red"));
  // };

  // const yellowMode = () => {
  //   document.body.style.backgroundColor = "yellow";
  //   document.body.style.color = "black";
  //   const btns = document.querySelectorAll(".btn-primary");
  //   btns.forEach((b1) => (b1.style.background = "yellow"));
  // };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
          // greenMode={greenMode}
          // redMode={redMode}
          // yellowMode={yellowMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/home"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
