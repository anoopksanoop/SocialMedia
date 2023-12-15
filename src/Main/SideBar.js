import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
 import {fetchdata} from "../Redux/Userdatas";
  
const SideBar = () => {
  const dispatch=useDispatch()
  const DataList= useSelector((state)=>state.datas);
  useEffect(()=>{
    dispatch(fetchdata())
    //  (DataList)
  },[dispatch,DataList]);


  
 
  const [selectedUser, setSelectedUser] = useState(null); 

  console.log("hyyy",DataList)
 
  const handleRoomCreation = (userId) => {
    if (selectedUser === userId) {
      // If the same user is selected, do nothing or display a message.
      alert("You've already selected this user");
    } else {
      // If a different user is selected, create a room.
      setSelectedUser(userId);
      // Implement the room creation logic here, e.g., navigate to the chat room with the selected user.
      // You can use the selected user's ID to create a unique room.
    
    }
  };

  
  return (
    
    <div className="col-lg-4 col-xxl-3" id="chatTabs" role="tablist">
      <div className="d-flex align-items-center mb-4 d-lg-none">
        <button
          className="border-0 bg-transparent"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="btn btn-primary">
            <i className="fa-solid fa-sliders-h"></i>
          </span>
          <span className="h6 mb-0 fw-bold d-lg-none ms-2">Chats</span>
        </button>
      </div>

      <div className="card card-body border-end-0 border-bottom-0 rounded-bottom-0">
        <div className=" d-flex justify-content-between align-items-center">
          <h1 className="h5 mb-0">
            Active chats{" "}
            <span className="badge bg-success bg-opacity-10 text-success">
              6
            </span>
          </h1>

          <div className="dropend position-relative">
            <div className="nav">
              <a
                className="icon-md rounded-circle btn btn-sm btn-primary-soft nav-link toast-btn"
                data-target="chatToast"
                href="h"
              >
                {" "}
                <i className="bi bi-pencil-square"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-light navbar-expand-lg mx-0">
        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset ms-auto"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body p-0">
            <div className="card card-chat-list rounded-end-lg-0 card-body border-end-lg-0 rounded-top-0 overflow-auto">
              <form className="position-relative">
                <input
                  className="form-control py-2"
                  type="search"
                  placeholder="Search for chats"
                  aria-label="Search"
                />
                <button
                  className="btn bg-transparent text-secondary px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                  type="submit"
                >
                  <i className="bi bi-search fs-5"></i>
                </button>
              </form>

              <div className="mt-4 h-100">
                <div className="chat-tab-list custom-scrollbar">
                  <ul className="nav flex-column nav-pills nav-pills-soft">

                    {/* maping */}
                 {DataList.data.map((item) => (
                      <li data-bs-dismiss="offcanvas" key={item.id} >
                        <Link
                        onClick={() => handleRoomCreation(item.id)}
                          to={`/chatBox/${item.id}`}
                          className="nav-link active text-start"
                          id={`chat-${item.id}-tab`}
                          data-bs-toggle="pill"
                          role="tab"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0 avatar avatar-story me-2 status-online">
                              <img
                                className="avatar-img rounded-circle"
                                src={`http://localhost:3001/${item.image}`}
                                alt=""
                                onClick={() => handleRoomCreation(item.id)}
                              />
                            </div>
                            <div className="flex-grow-1 d-block">
                              <h6 className="mb-0 mt-1">{item.name}</h6>
                              <div className="small text-secondary">
                                Frances sent a photo.
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                    {/*              
              <li data-bs-dismiss="offcanvas">
                <a href="#chat-2" className="nav-link text-start" id="chat-2-tab" data-bs-toggle="pill" role="tab">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar me-2 status-offline">
                      <img className="avatar-img rounded-circle" src={img11} alt=""/>
                    </div>
                    <div className="flex-grow-1 d-block">
                      <h6 className="mb-0 mt-1">Carolyn Ortiz</h6>
                      <div className="small text-secondary">You missed a call form🤙</div>
                    </div>
                  </div>
                </a>
              </li> */}

                    {/* <li data-bs-dismiss="offcanvas">
                <a href="#chat-3" className="nav-link text-start" id="chat-3-tab" data-bs-toggle="pill" role="tab">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar avatar-story me-2">
                      <img className="avatar-img rounded-circle" src={img12} alt=""/>
                    </div>
                    <div className="flex-grow-1 d-block">
                      <h6 className="mb-0 mt-1">Billy Vasquez</h6>
                      <div className="small text-secondary">Day sweetness 😊</div>
                    </div>
                  </div>
                </a>
              </li>
             
              <li data-bs-dismiss="offcanvas">
                <a href="#chat-4" className="nav-link text-start" id="chat-4-tab" data-bs-toggle="pill" role="tab">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar me-2">
                      <ul className="avatar-group avatar-group-two">
                        <li className="avatar avatar-xs">
                          <img className="avatar-img rounded-circle" src={img1} alt="avatar"/>
                        </li>
                        <li className="avatar avatar-xs">
                          <img className="avatar-img rounded-circle" src={img2} alt="avatar"/>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-grow-1 d-block">
                      <h6 className="mb-0 mt-1">Dennis, Ortiz</h6>
                      <div className="small text-secondary">Ortiz: I'm adding jhon</div>
                    </div>
                  </div>
                </a>
              </li>
              */}
                    {/* <li data-bs-dismiss="offcanvas">
                <a href="#chat-5" className="nav-link text-start" id="chat-5-tab" data-bs-toggle="pill" role="tab">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar me-2">
                      <ul className="avatar-group avatar-group-three">
                        <li className="avatar avatar-xs">
                          <img className="avatar-img rounded-circle" src={img3} alt="avatar"/>
                        </li>
                        <li className="avatar avatar-xs">
                          <img className="avatar-img rounded-circle" src={img4} alt="avatar"/>
                        </li>
                        <li className="avatar avatar-xs">
                          <img className="avatar-img rounded-circle" src={img5} alt="avatar"/>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-grow-1 d-block">
                      <h6 className="mb-0 mt-1">Knight, Billy, Bryan</h6>
                      <div className="small text-secondary">Billy: Thank you!</div>
                    </div>
                  </div>
                </a>
              </li>

              <li data-bs-dismiss="offcanvas">
                <a href="#chat-6" className="nav-link text-start" id="chat-6-tab" data-bs-toggle="pill" role="tab">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar me-2">
                      <ul className="avatar-group avatar-group-four">
                        <li className="avatar avatar-xxs">
                          <img className="avatar-img rounded-circle" src={img6} alt="avatar"/>
                        </li>
                        <li className="avatar avatar-xxs">
                          <img className="avatar-img rounded-circle" src={img7} alt="avatar"/>
                        </li>
                        <li className="avatar avatar-xxs">
                          <img className="avatar-img rounded-circle" src={img8} alt="avatar"/>
                        </li>
                        <li className="avatar avatar-xxs">
                          <img className="avatar-img rounded-circle" src={imgPH} alt="avatar"/>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-grow-1 d-block overflow-hidden">
                      <h6 className="mb-0 mt-1 text-truncate w-75">Webestica crew </h6>
                      <div className="small text-secondary">You: Okay thanks, everyone.</div>
                    </div>
                  </div>
                </a>
              </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    // </div>
    // </div>
  );
};

export default SideBar;
