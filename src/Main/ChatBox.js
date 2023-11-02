import React from 'react'
import "../css/all.min.css"
import "../css/bootstrap-icons.css"
import "../css/OverlayScrollbars.min.css"
import '../css/style.css'
import logo3 from '../images/10.jpg';
import logo4 from '../images/05.jpg';
import logo5 from '../images/11.jpg';


const ChatBox = () => {
  return (
   
    // <div className="container">
    
         <div className="col-lg-8 col-xxl-9">
        <div className="card card-chat rounded-start-lg-0 border-start-lg-0">
          <div className="card-body h-100">
            <div className="tab-content py-0 mb-0 h-100" id="chatTabsContent">
         
              <div className="fade tab-pane show active h-100" id="chat-1" role="tabpanel" aria-labelledby="chat-1-tab">
              
                <div className="d-sm-flex justify-content-between align-items-center">
                  <div className="d-flex mb-2 mb-sm-0">
                    <div className="flex-shrink-0 avatar me-2">
                      <img className="avatar-img rounded-circle" src={logo3} alt=""/>
                    </div>
                    <div className="d-block flex-grow-1">
                      <h6 className="mb-0 mt-1">Judy Nguyen</h6>
                      <div className="small text-secondary"><i className="fa-solid fa-circle text-success me-1"></i>Online</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                   
                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i className="bi bi-telephone-fill"></i></a>
                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i className="bi bi-camera-video-fill"></i></a>
                  
                    <div className="dropdown">
                      <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></a>               
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon"></i>Mark as read</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-mic-mute me-2 fw-icon"></i>Mute conversation</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon"></i>View profile</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon"></i>Delete chat</a></li>
                        <li className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon"></i>Archive chat</a></li>
                      </ul>
                    </div>
                  
                  </div>
                </div>
                
                
               
                <div className="chat-conversation-content custom-scrollbar overflow-auto">
               
                  <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
              
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/10.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Applauded no discovery in newspaper allowance am northward😊</div>
                          <div className="small my-2">6:15 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">With pleasure</div>
                      </div>
                    </div>
                  </div>
             
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">No visited raising gravity outward subject my cottage Mr be.</div>
                        <div className="d-flex my-2">
                          <div className="small text-secondary">6:20 AM</div>
                          <div className="small ms-2"><i className="fa-solid fa-check-double text-info"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src={logo3} alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Please find the attached updated files</div>
                         
                          <div className="small my-2">12:16 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
               
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src={logo3} alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">How promotion excellent curiosity yet attempted happiness Gay prosperous impression😮</div>
                          <div className="small my-2">3:22 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
               
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/10.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            <p className="small mb-0">Congratulations:</p>
                            <div className="card shadow-none p-2 border border-2 rounded mt-2">
                              <img src="images/14.svg" alt=""/>
                            </div>
                          </div>
                          <div className="small my-2">3:22 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">And sir dare view but over man So at within mr to simple assure Mr disposing.</div>
                      
                        <div className="d-flex my-2">
                          <div className="small text-secondary">5:35 PM</div>
                          <div className="small ms-2"><i className="fa-solid fa-check"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
              
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <img className="rounded h-200px" src={logo4} alt=""/>
                        <div className="small my-2">5:36 PM</div>
                      </div>
                    </div>
                  </div>
               
                  <div className="text-center small my-2">2 New Messages</div>
                 
                  <div className="d-flex mb-2">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src={logo3} alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Traveling alteration impression 🤐 six all uncommonly Chamber hearing inhabit joy highest private.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src={logo3} alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-3 rounded-2">
                            <div className="typing d-flex align-items-center">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             
              </div>
              
              <div className="fade tab-pane h-100" id="chat-2" role="tabpanel" aria-labelledby="chat-2-tab">
             
                <div className="d-sm-flex justify-content-between align-items-center">
                  <div className="d-flex mb-2 mb-sm-0">
                    <div className="flex-shrink-0 avatar me-2">
                      <img className="avatar-img rounded-circle" src={logo5} alt=""/>
                    </div>
                    <div className="d-block flex-grow-1">
                      <h6 className="mb-0 mt-1">Carolyn Ortiz</h6>
                      <div className="small text-secondary"><i className="fa-solid fa-circle text-danger me-1"></i>Last active 2 days</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                   
                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i className="bi bi-telephone-fill"></i></a>
                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i className="bi bi-camera-video-fill"></i></a>
                  
                    <div className="dropdown">
                      <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown2" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></a>               
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown2">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon"></i>Mark as read</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-mic-mute me-2 fw-icon"></i>Mute conversation</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon"></i>View profile</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon"></i>Delete chat</a></li>
                        <li className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon"></i>Archive chat</a></li>
                      </ul>
                    </div>
              
                  </div>
                </div>
           
                
               
                <div className="chat-conversation-content overflow-auto custom-scrollbar">
               
                  <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/11.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Night signs creeping yielding green Seasons.</div>
                          <div className="small my-2">6:15 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
               
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">Creeping earth under was You're without which image.</div>
                        <div className="d-flex my-2">
                          <div className="small text-secondary">6:20 AM</div>
                          <div className="small ms-2"><i className="fa-solid fa-check-double text-info"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
              
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/11.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Thank you for prompt response</div>
                          <div className="small my-2">12:16 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/11.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Won't that fish him whose won't also. </div>
                          <div className="small my-2">3:22 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">Moving living second beast Over fish place beast.</div>
                        <div className="d-flex my-2">
                          <div className="small text-secondary">5:35 PM</div>
                          <div className="small ms-2"><i className="fa-solid fa-check"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
             
                  <div className="text-center small my-2">2 New Messages</div>
                
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/11.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Thing they're fruit together forth day.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/11.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            Fly replenish third to said void life night yielding for heaven give blessed spirit.</div>
                          <div className="small my-2">9:30 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
             
              <div className="fade tab-pane h-100" id="chat-3" role="tabpanel" aria-labelledby="chat-3-tab">
               
                <div className="d-sm-flex justify-content-between align-items-center">
                  <div className="d-flex mb-2 mb-sm-0">
                    <div className="flex-shrink-0 avatar me-2">
                      <img className="avatar-img rounded-circle" src="images/12.jpg" alt=""/>
                    </div>
                    <div className="d-block flex-grow-1">
                      <h6 className="mb-0 mt-1">Billy Vasquez</h6>
                      <div className="small text-secondary">Last active a month</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                   
                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i className="bi bi-telephone-fill"></i></a>
                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i className="bi bi-camera-video-fill"></i></a>
                    
                    <div className="dropdown">
                      <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown3" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></a>               
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown3">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon"></i>Mark as read</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-mic-mute me-2 fw-icon"></i>Mute conversation</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon"></i>View profile</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon"></i>Delete chat</a></li>
                        <li className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon"></i>Archive chat</a></li>
                      </ul>
                    </div>
                   
                  </div>
                </div>
               
            
             
                <div className="chat-conversation-content overflow-auto custom-scrollbar">
            
                  <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">Hello</div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">Made and For saw Creepeth place shall Moving.</div>
                        <div className="d-flex my-2">
                          <div className="small text-secondary">6:20 AM</div>
                          <div className="small ms-2"><i className="fa-solid fa-check-double text-info"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/12.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Thank you for prompt response</div>
                          <div className="small my-2">12:16 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
               
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/12.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-3 rounded-2">
                            <div className="typing d-flex align-items-center">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
             
              <div className="fade tab-pane h-100" id="chat-4" role="tabpanel" aria-labelledby="chat-4-tab">
               
                <div className="d-sm-flex justify-content-between align-items-center">
                  <div className="d-flex mb-2 mb-sm-0">
                    <div className="flex-shrink-0 avatar me-2">
                      <ul className="avatar-group avatar-group-two">
                        <li className="avatar avatar-xs">
                          <img className="avatar-img rounded-circle" src="images/01.jpg" alt="avatar"/>
                        </li>
                        <li className="avatar avatar-xs">
                          <img className="avatar-img rounded-circle" src="images/02.jpg" alt="avatar"/>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-grow-1 d-block">
                      <h6 className="mb-0 mt-1">Dennis, Ortiz</h6>
                      <div className="small text-secondary">Ortiz: I'm adding jhon</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                
                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i className="bi bi-telephone-fill"></i></a>
                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i className="bi bi-camera-video-fill"></i></a>
                   
                    <div className="dropdown">
                      <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown4" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></a>               
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown4">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon"></i>Mark as read</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-mic-mute me-2 fw-icon"></i>Mute conversation</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon"></i>View profile</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon"></i>Delete chat</a></li>
                        <li className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon"></i>Archive chat</a></li>
                      </ul>
                    </div>
              
                  </div>
                </div>
               
                
               
                <div className="chat-conversation-content overflow-auto custom-scrollbar">
         
                  <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/01.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Firmament day life also let subdue.</div>
                          <div className="small my-2">6:15 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">Yes</div>
                      </div>
                    </div>
                  </div>
               
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">Hold do at tore in park feet near my case.</div>
                        <div className="d-flex my-2">
                          <div className="small text-secondary">6:20 AM</div>
                          <div className="small ms-2"><i className="fa-solid fa-check-double text-info"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/01.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">78958642-589</div>
                          <div className="small my-2">12:16 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
            
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/01.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Void Fowl greater upon moveth bring gathering.</div>
                          <div className="small my-2">3:22 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
            
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">Kind had stars cattle Good fill divide Multiply.</div>
                        <div className="d-flex my-2">
                          <div className="small text-secondary">5:35 PM</div>
                          <div className="small ms-2"><i className="fa-solid fa-check"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="text-center small my-2">2 New Messages</div>
                 
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src={logo5} alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">She'd Darkness beast don't deep One above.</div>
                        </div>
                      </div>
                    </div>
                  </div>
              
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/01.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Signs creepeth replenish which fourth may Seasons.</div>
                          <div className="small my-2">9:30 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             
              </div>
            
              <div className="fade tab-pane h-100" id="chat-5" role="tabpanel" aria-labelledby="chat-5-tab">
         
                <div className="d-sm-flex justify-content-between align-items-center">
                  <div className="d-flex mb-2 mb-sm-0">
                    <div className="flex-shrink-0 avatar me-2">
                      <ul className="avatar-group avatar-group-three">
                        <li className="avatar avatar-xs">
                          <img className="avatar-img rounded-circle" src="images/03.jpg" alt="avatar"/>
                        </li>
                        <li className="avatar avatar-xs">
                          <img className="avatar-img rounded-circle" src="images/04.jpg" alt="avatar"/>
                        </li>
                        <li className="avatar avatar-xs">
                          <img className="avatar-img rounded-circle" src="images/05.jpg" alt="avatar"/>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-grow-1 d-block">
                      <h6 className="mb-0 mt-1">Knight, Billy, Bryan</h6>
                      <div className="small text-secondary">Billy: Thank you!</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                
                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i className="bi bi-telephone-fill"></i></a>
                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i className="bi bi-camera-video-fill"></i></a>
                  
                    <div className="dropdown">
                      <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown5" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></a>               
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown5">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon"></i>Mark as read</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-mic-mute me-2 fw-icon"></i>Mute conversation</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon"></i>View profile</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon"></i>Delete chat</a></li>
                        <li className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon"></i>Archive chat</a></li>
                      </ul>
                    </div>
                  
                  </div>
                </div>
               
            
              
                <div className="chat-conversation-content overflow-auto custom-scrollbar">
              
                  <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                 
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/01.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Night signs creeping yielding green Seasons.</div>
                          <div className="small my-2">6:15 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
               
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/02.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Thank you for prompt response</div>
                          <div className="small my-2">12:16 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/03.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Won't that fish him whose won't also. </div>
                          <div className="small my-2">3:22 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="text-center small my-2">2 New Messages</div>
                 
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/11.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Thing they're fruit together forth day.</div>
                        </div>
                      </div>
                    </div>
                  </div>
               
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/11.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            Fly replenish third to said void life night yielding for heaven give blessed spirit.</div>
                          <div className="small my-2">9:30 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
           
              <div className="fade tab-pane h-100" id="chat-6" role="tabpanel" aria-labelledby="chat-6-tab">
               
                <div className="d-sm-flex justify-content-between align-items-center">
                  <div className="d-flex mb-2 mb-sm-0">
                    <div className="flex-shrink-0 avatar me-2">
                      <ul className="avatar-group avatar-group-four">
                        <li className="avatar avatar-xxs">
                          <img className="avatar-img rounded-circle" src="images/06.jpg" alt="avatar"/>
                        </li>
                        <li className="avatar avatar-xxs">
                          <img className="avatar-img rounded-circle" src="images/07.jpg" alt="avatar"/>
                        </li>
                        <li className="avatar avatar-xxs">
                          <img className="avatar-img rounded-circle" src="images/08.jpg" alt="avatar"/>
                        </li>
                        <li className="avatar avatar-xxs">
                          <img className="avatar-img rounded-circle" src="images/placeholder.jpg" alt="avatar"/>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-grow-1 d-block overflow-hidden">
                      <h6 className="mb-0 mt-1 text-truncate w-75">Webestica crew </h6>
                      <div className="small text-secondary">You: Okay thanks, everyone.</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                
                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i className="bi bi-telephone-fill"></i></a>
                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i className="bi bi-camera-video-fill"></i></a>
                   
                    <div className="dropdown">
                      <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown6" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></a>               
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown6">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon"></i>Mark as read</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-mic-mute me-2 fw-icon"></i>Mute conversation</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon"></i>View profile</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon"></i>Delete chat</a></li>
                        <li className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon"></i>Archive chat</a></li>
                      </ul>
                    </div>
                
                  </div>
                </div>
               
                
                
                <div className="chat-conversation-content custom-scrollbar">
              
                  <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                  
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/02.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Applauded no discovery in newspaper allowance am northward😍</div>
                          <div className="small my-2">6:15 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/03.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Please find the attached updated files</div>
                          
                          <div className="small my-2">12:16 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/04.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">How promotion excellent 🥰 curiosity yet attempted happiness Gay prosperous impression.</div>
                          <div className="small my-2">3:22 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
              
                  <div className="text-center small my-2">2 New Messages</div>
                 
                  <div className="d-flex mb-2">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/05.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Traveling alteration impression six all uncommonly Chamber hearing inhabit joy highest privat.</div>
                        </div>
                      </div>
                    </div>
                  </div>
            
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/06.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">Attempted happiness Gay prosperous impression.</div>
                          <div className="small my-2">3:22 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img className="avatar-img rounded-circle" src="images/07.jpg" alt=""/>
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-3 rounded-2">
                            <div className="typing d-flex align-items-center">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             
              </div>
           
            </div>
          </div>
          <div className="card-footer">
            <div className="d-sm-flex align-items-end">
              <textarea className="form-control mb-sm-0 mb-3" data-autoresize="" placeholder="Type a message" rows="1"></textarea>
              <button className="btn btn-sm btn-danger-soft ms-sm-2"><i className="fa-solid fa-face-smile fs-6"></i></button>
              <button className="btn btn-sm btn-secondary-soft ms-2"><i className="fa-solid fa-paperclip fs-6"></i></button>
              <button className="btn btn-sm btn-primary ms-2"><i className="fa-solid fa-paper-plane fs-6"></i></button>
            </div>
          </div>
        </div>
      </div>
// </div>

  )
}

export default ChatBox