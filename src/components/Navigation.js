import {Routes, Route,Link } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Reservation from "../pages/Reservation";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";
import LittleLemonLogo from "../Image Assets/Logo.svg";


const listStyle = {
  fontFamily: 'Karla, sans-serif', 
  textDecoration: 'none', 
  color: '#333', 
  marginRight: '25px', 
  marginLeft: '25px', 
  fontWeight: 'bold',
  backgroundColor: 'transparent',
}
function Navigation() {

    return (
      <div className="Container" >
        <nav className="nav-container" style={{display: 'flex', justifyContent: 'center', alignItems:'center'}} >
          <img src={LittleLemonLogo} alt="Little Lemon Logo"/>
            <ul className="nav-list" style={{listStyle:'none', display: 'flex',   marginTop: '20px', marginBottom: '20px', }}>
              <li>
                <Link to="/" className="nav-link"  style={listStyle}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link" style={listStyle}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" className="nav-link" style={listStyle}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="nav-link" style={listStyle}>
                  Reservation
                </Link>
              </li>
              <li>
                <Link to="/orderOnline" className="nav-link" style={listStyle}>
                  Order Online
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link" style={listStyle}>
                  Log-in
                </Link>
              </li>
            </ul>
        </nav>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/orderOnline" element={<OrderOnline/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    );
  }

export default Navigation;