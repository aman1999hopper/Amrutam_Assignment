import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Main } from "./Pages/Main";
import { Doctors } from "./Components/Doctors/Doctors";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path="/Doctor's" element={<Doctors/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
