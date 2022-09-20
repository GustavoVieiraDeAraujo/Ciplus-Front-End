import React, {useState} from "react";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Movies } from "./pages/Movies";
import { Plans } from "./pages/Plans";
import { Register } from "./pages/Register";
import { Tickets } from "./pages/Tickets";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import "./Global.css"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainLoading } from "./components/MainLoading";

export const App = () => {

  const [display, setDisplay] = useState("")

  setTimeout(() => {
    setDisplay("none")
  }, 5000);

  return (
    <BrowserRouter>
      <MainLoading display={display}/>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/plans" element={<Plans/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/tickets" element={<Tickets/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
