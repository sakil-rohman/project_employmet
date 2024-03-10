import React, { useState } from 'react'
import { Navbar, Nav, Row, Col, Container,Carousel  } from 'react-bootstrap'
import '../../index'
import './TopNavbar'
import '../App2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, Link } from "react-router-dom";

function Header() {

    const [showDate, setShowDate] = useState(new Date().toDateString())
    const [showTime, setshowTime] = useState(new Date().toLocaleTimeString())

    const [style, setStyle] = useState("navbar-nav  sidebar sidebar-dark accordion");
    const changeStyle = () =>{
        if(style == "navbar-nav  sidebar sidebar-dark accordion"){
            setStyle("navbar-nav  sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav  sidebar sidebar-dark accordion");
        }
    }
    const changeStyle1 = () =>{
        if(style == "navbar-nav  sidebar sidebar-dark accordion"){
            setStyle("navbar-nav  sidebar sidebar-dark accordion toggled1");
        }
        else{
            setStyle("navbar-nav  sidebar sidebar-dark accordion");
        }
    }
    return (
       
        <>
           
           
{/* <!-- Sidebar --> */}



<ul className={style} id="accordionSidebar">
    {/* <!-- Sidebar - Brand --> */}
    <div className="text-center d-none d-md-inline pt-3 ">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
    </div>
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
    <Link to="/sliderimage-view">
        <div className="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-pencil-ruler"></i>
        </div>
        <div className="sidebar-brand-text mx-3">CMS Admin </div>
    
    </Link>


    </a>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider my-0" />

    {/* <!-- Nav Item - Dashboard --> */}
    <li className="nav-item active">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider" />

    {/* <!-- Heading --> */}
    <div className="sidebar-heading">
        Interface
    </div>

    {/* <!-- Nav Item - Pages Collapse Menu --> */}
    <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                {/* <Link className="collapse-item" to="/sliderimage-view">Slider</Link> */}
                <Link className='collapse-item' to="/sliderimage-view">Sldider</Link>
                <Link className='collapse-item' to="/ministry-view">Ministry</Link>
                <Link className="collapse-item" to="/notification-view">Notification</Link>
                <Link className="collapse-item" to="/eventcards-view">Event Cards</Link>
                <Link className="collapse-item" to="/galleryimage-view">Gallery Image</Link>
                {/* <Link className="collapse-item" to="cards.html">Mid-Cards</Link> */}
            </div>
        </div>
    </li>

    {/* <!-- Nav Item - Utilities Collapse Menu --> */}
    <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
        </a>
        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Utilities:</h6>
                <Link className="collapse-item" to="/footeraddress-view">Address & Contact</Link>
                {/* <Link className="collapse-item" to="utilities-border.html">Borders</Link>
                <Link className="collapse-item" to="utilities-animation.html">Animations</Link> */}
                <Link className="collapse-item" to="utilities-other.html">Other</Link>
            </div>
        </div>
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider" />

    {/* <!-- Heading --> */}
    <div className="sidebar-heading">
        Addons
    </div>

    {/* <!-- Nav Item - Pages Collapse Menu --> */}
    <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
        </a>
        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Custom Pages:</h6>
                
                <Link className="collapse-item" to="/guideline-view">Guidelines</Link>
                <Link className="collapse-item" to="/contactus-view">Contact Us</Link>
                <Link className="collapse-item" to="/aboutus-view">About Us</Link>
                <Link className="collapse-item" to="/schemes-view">Schemes</Link>
                <Link className="collapse-item" to="/resources-view">Resources</Link>
                {/* <Link className="collapse-item" to="register.html">Register</Link>
                <Link className="collapse-item" to="forgot-password.html">Forgot Password</Link>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Other Pages:</h6> */}
                <Link className="collapse-item" to="404.html">404 Page</Link>
                <Link className="collapse-item" to="blank.html">Blank Page</Link>
            </div>
        </div>
    </li>
    <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTable"
            aria-expanded="true" aria-controls="collapseTable">
            <i className="fas fa-fw fa-table"></i>
            <span>Table</span>
        </a>
        <div id="collapseTable" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Custom Tables:</h6>
                
                <Link className="collapse-item" to="/contacttable-view">Contact Table</Link>
                
            </div>
        </div>
    </li>

    {/* <!-- Nav Item - Charts --> */}
    {/* <li className="nav-item">
        <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></a>
    </li> */}

    {/* <!-- Nav Item - Tables --> */}
    {/* <li className="nav-item">
        <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
    </li> */}

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider d-none d-md-block" />

    {/* <!-- Sidebar Toggler (Sidebar) --> */}
    {/* <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
    </div> */}

    {/* <!-- Sidebar Message --> */}
    {/* <div className="sidebar-card d-none d-lg-flex">
        <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
        <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
        <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
    </div> */}

</ul>
{/* <!-- End of Sidebar --> */}

<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow ml-2">
           <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
    <i className="fa fa-bars"></i>
</button>
            </nav>
        </>
    )
}
    

export default Header

