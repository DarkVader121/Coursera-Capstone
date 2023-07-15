import {Routes, Route,Link } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

function Navigation() {
    return (
      <div className="navigation" style={{ display: 'flex', justifyContent: 'center' }}>
        <nav>
          <ul className="navigation__list" style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
            <li style={{ marginRight: '10px' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ marginRight: '10px' }}>
              <Link to="/about">About</Link>
            </li>
            <li style={{ marginRight: 0 }}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }

export default Navigation;