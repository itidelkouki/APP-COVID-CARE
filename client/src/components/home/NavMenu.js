
import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Nav.css';
import { Link } from "react-router-dom";
import { logout } from '../../js/actions/authActions';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
const NavMenu = () =>{
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuthDoctor = useSelector((state) => state.authReducer.isAuthDoctor);
  const isAuth = useSelector((state) => state.authPatientReducer.isAuth);
  const doctor = useSelector((state) => state.authReducer.doctor);
  
  const toggle = () => setIsOpen(!isOpen);

  const logoutUser = () => {
    dispatch(logout());
  };
  const authLinks = (
    //<div className="doctor-nav">
    <div classNameName="home" style={{textTransform:' uppercase',letterSpacing: '0.2rem',fontFamily:'"Open Sans", sans-serif'}} >
    <nav className="nav">
    <div className="container" >
    <Fragment>
      <div className="logout">
    
    <li><a href="/" onClick={logoutUser} >Logout</a></li>
    {/* <Link to="/Appointment" ><li><a href="/Appointment"></a></li> </Link>
    <Link to="/ListRdv" ><li><a href="/ListRdv"></a></li> </Link> */}


    </div>
    </Fragment>
    </div>
    </nav>
    </div>
  );

  const guestLinks = (
    <div classNameName="home">
    <nav className="nav" style={{letterSpacing: '0.1rem',fontFamily:'"Open Sans", sans-serif'}}>
    <div className="logocovid">
    <img  style={{width:'50px',height:'50px',borderRadius:'50%'
          
        }}src='https://png.pngtree.com/png-clipart/20200701/original/pngtree-yellow-coronavirus-vector-illustration-png-image_5342658.jpg'/>
      <h2 className="logo"><a href="/">Covid-Care.tn</a></h2>
      </div>
      <div>
      <ul>
      <Link to="/">
        <li><a className="current">About us</a></li>
        </Link>
        <li><a href="/services">Ours Services</a></li>
        <Link to="/patient">
        <li><a >For patient</a></li>
        </Link>
        <Link to="/doctors">
        <li><a>For doctor</a></li>
        </Link>
      </ul>
      </div>
  </nav>
  </div>
  );


    return(
      <Navbar  dark expand="sm" className="mb-5">
      <Container>
      <NavbarBrand href="/"></NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isAuth || isAuthDoctor ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    )};

    export default NavMenu

/* <Link to="/doctordashboard">
          <span className="navbar-text mr-3">
            <strong>{doctor ? `Welcome ${doctor.name}` : null}</strong>
          </span>
        </Link>
          <NavLink href="/doctors" onClick={logoutUser}>
        Logout
      </NavLink>
      
     
      <NavLink href="/doctordashboard">
        Back to dashboard
      </NavLink>
     
        
        <li><a href="/doctordashboard"> Back to dashboard</a></li>
        
        */