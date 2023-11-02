import React from 'react'
import img from "../images/01.jpg"
import img7 from "../images/07.jpg"
import homeImg from "../images/home-outline-filled.svg";
import personImg from "../images/person-outline-filled.svg"
import earthImg from  "../images/earth-outline-filled.svg"
import calenderImg from "../images/calendar-outline-filled.svg"
import chatImg from "../images/chat-outline-filled.svg"
import notificationImg from "../images/notification-outlined-filled.svg" 
import cogImg from "../images/cog-outline-filled.svg"
const SideNav = () => {
  return (
    
  <div className="col-lg-3">

 
<div className="d-flex align-items-center d-lg-none">
  <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
    <span className="btn btn-primary"><i className="fa-solid fa-sliders-h"></i></span>
    <span className="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
  </button>
</div>
 
<nav className="navbar navbar-expand-lg mx-0"> 
  <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSideNavbar">
     
    <div className="offcanvas-header">
      <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
     
    <div className="offcanvas-body d-block px-2 px-lg-0">
     
       
      <div className="card overflow-hidden"> 
         
        <div className="h-50px" style={{backgroundImage:`url(${img})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat:" no-repeat"}}></div>
          
           
          <div className="card-body pt-0">
            <div className="text-center">
        
             
            <div className="avatar avatar-lg mt-n5 mb-3">
              <a href="#!"><img className="avatar-img rounded border border-white border-3" src={img7} alt=''/></a>
            </div>
             
             
            <h5 className="mb-0"> <a href="#!">Sam Lanson </a> </h5>
            <small>Web Developer at Webestica</small>
            <p className="mt-3">I'd love to change the world, but they won’t give me the source code.</p>

             
             
            <div className="hstack gap-2 gap-xl-3 justify-content-center">
             
              <div>
                <h6 className="mb-0">256</h6>
                <small>Post</small>
              </div>
            
              <div className="vr"></div>
            
              <div>
                <h6 className="mb-0">2.5K</h6>
                <small>Followers</small>
              </div>
             
              <div className="vr"></div>
              
              <div>
                <h6 className="mb-0">365</h6>
                <small>Following</small>
              </div>
            </div>
          
          </div>

          
          <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
            <li className="nav-item">
              <a className="nav-link" href="my-profile.html"> <img className="me-2 h-20px fa-fw" src={homeImg} alt=''/><span>Feed </span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="my-profile-connections.html"> <img className="me-2 h-20px fa-fw" src={personImg} alt=''/><span>Connections </span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html"> <img className="me-2 h-20px fa-fw" src={earthImg} alt=''/><span>Latest News </span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="events.html"> <img className="me-2 h-20px fa-fw" src={calenderImg} alt=''/><span>Events </span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="groups.html"> <img className="me-2 h-20px fa-fw" src={chatImg} alt=''/><span>Groups </span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="notifications.html"> <img className="me-2 h-20px fa-fw" src={notificationImg} alt=''/><span>Notifications </span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="settings.html"> <img className="me-2 h-20px fa-fw" src={cogImg} alt=''/><span>Settings </span></a>
            </li>
          </ul>
          
        </div>
         {/* Card footer */}
        <div className="card-footer text-center py-2">
          <a className="btn btn-link btn-sm" href="my-profile.html">View Profile </a>
        </div>
      </div>
       {/* Card END  */}

      
      <ul className="nav small mt-4 justify-content-center lh-1">
        <li className="nav-item">
          <a className="nav-link" href="my-profile-about.html">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="settings.html">Settings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" href="https://support.webestica.com/login">Support </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" href="docs/index.html">Docs </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="help.html">Help</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="privacy-and-terms.html">Privacy &amp; terms</a>
        </li>
      </ul>
      
      <p className="small text-center mt-1">©2023 <a className="text-reset" target="_blank" href="https://www.webestica.com/"> Webestica </a></p>
    </div>
  </div>
</nav>
 {/* Navbar END */}
</div>
    
  )
}

export default SideNav