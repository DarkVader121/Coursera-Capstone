import {Routes, Route,Link } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Reservation from "../pages/Reservation";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";
import LittleLemonLogo from "../Image Assets/Logo.svg";
import { useState } from "react";


function Navigation() {
  const [savedReservation, setSavedReservation] = useState([]);
  const [reservation, setReservation] = useState({
    firstName: "",
    lastName: "", 
    email:"",
    phone:"",
    date: "",
    time:"",
    guest:"",
    occasion:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedReservation([...savedReservation, reservation]);
    setReservation({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guest: '',
      occasion: '',
    });
  };


    return (
   <>
   <div style={{justifyContent:"center"}}>
   
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding:"10px"}}>
        <img src={LittleLemonLogo} alt="Little Lemon Logo" style={{ marginRight:"40px"}}/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active" style={{ fontWeight:"bold"}}>
               <Link to="/" className="nav-link"  style={{backgroundColor:"transparent", padding:"25px",  padding:"25px",  
                      transition:"background-color 0.3s, color 0.3s"}} 
                      onMouseOver={(e) => {e.target.style.backgroundColor = "#f0cc00"; e.target.style.color = "white"; }} 
                      onMouseOut={(e) => {e.target.style.backgroundColor = "transparent"; e.target.style.color = "black";}} > 
                  Home
                </Link>
            </li>
            <li className="nav-item active" style={{ fontWeight:"bold"}}>
               <Link to="/about" className="nav-link"  style={{backgroundColor:"transparent", padding:"25px",   
                      transition:"background-color 0.3s, color 0.3s"}} 
                      onMouseOver={(e) => {e.target.style.backgroundColor = "#f0cc00"; e.target.style.color = "white"; }} 
                      onMouseOut={(e) => {e.target.style.backgroundColor = "transparent"; e.target.style.color = "black";}} > 
                  About
                </Link>
            </li>
            <li className="nav-item active" style={{ fontWeight:"bold"}}>
            <Link to="/menu" className="nav-link"  style={{backgroundColor:"transparent", padding:"25px",   
                      transition:"background-color 0.3s, color 0.3s"}} 
                      onMouseOver={(e) => {e.target.style.backgroundColor = "#f0cc00"; e.target.style.color = "white"; }} 
                      onMouseOut={(e) => {e.target.style.backgroundColor = "transparent"; e.target.style.color = "black";}} >
                  Menu
                </Link>
            </li>
            <li className="nav-item active" style={{ fontWeight:"bold"}}>
            <Link to="/reservation" className="nav-link"  style={{backgroundColor:"transparent", padding:"25px",   
                      transition:"background-color 0.3s, color 0.3s"}} 
                      onMouseOver={(e) => {e.target.style.backgroundColor = "#f0cc00"; e.target.style.color = "white"; }} 
                      onMouseOut={(e) => {e.target.style.backgroundColor = "transparent"; e.target.style.color = "black";}} >
                  Reservation
                </Link>
            </li>
            <li className="nav-item active" style={{ fontWeight:"bold"}}>
            <Link to="/orderOnline" className="nav-link"  style={{backgroundColor:"transparent", padding:"25px",   
                      transition:"background-color 0.3s, color 0.3s"}} 
                      onMouseOver={(e) => {e.target.style.backgroundColor = "#f0cc00"; e.target.style.color = "white"; }} 
                      onMouseOut={(e) => {e.target.style.backgroundColor = "transparent"; e.target.style.color = "black";}} >
                  Order Online
                </Link>
            </li>
            <li className="nav-item active" style={{ fontWeight:"bold"}}>
            <Link to="/login" className="nav-link"  style={{backgroundColor:"transparent", padding:"25px",   
                      transition:"background-color 0.3s, color 0.3s"}} 
                      onMouseOver={(e) => {e.target.style.backgroundColor = "#f0cc00"; e.target.style.color = "white"; }} 
                      onMouseOut={(e) => {e.target.style.backgroundColor = "transparent"; e.target.style.color = "black";}} >
                  Log-in
                </Link>
            </li>
          </ul>

        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation 
          reservation={reservation} 
          setReservation={setReservation}
          handleSubmit={handleSubmit}
          />} />
        <Route path="/orderOnline" element={<OrderOnline/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </div>
  </>
    );
  }

export default Navigation;