import React from "react";
import img1 from "../images/01.jpg";
import img2 from "../images/02.jpg";
import img3 from "../images/03.jpg";
import img4 from "../images/04.jpg";
import img5 from "../images/05.jpg";
import img8 from "../images/08.svg";
import img2svg from "../images/02.svg";
import img9svg from "../images/09.svg";
import img10svg from "../images/10.svg";
import img12svg from "../images/12.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "../Redux/UserSlice";
import { useDispatch } from "react-redux";
import { selectGroup } from "../Redux/Groupslice";
import AOS from 'aos'
const Condant = () => {
  AOS.init();
  // const dispatch=useDispatch()
  const group= useSelector(selectGroup)
  const user = useSelector(selectUser);

  console.log("gp",group.Groupdecs)

    return (
        <div className="col-md-8 col-lg-6 vstack gap-4" data-aos="fade-left">
        
      {/* <!-- Card END --> */ }

      {/* <div className="col-md-8 col-lg-6 vstack gap-4"> */}
          {/* <!-- Card START --> */}
          <div className="card">
            {/* <!-- Card header START --> */}
            <div className="card-header border-0 pb-0">
              <div className="row g-2">
                <div className="col-lg-2" >
                  {/* <!-- Card title --> */}
                  <h1 className="h4 card-title mb-lg-0">Group <br></br>{user.name}</h1>
                </div>
                <div className="col-sm-6 col-lg-3 ms-lg-auto">
                  {/* <!-- Select Groups --> */}
                  <select className="form-select js-choice choice-select-text-none" data-search-enabled="false">
                    <option value="AB">Alphabetical</option>
                    <option value="NG">Newest group</option>
                    <option value="RA">Recently active</option>
                    <option value="SG">Suggested</option>
                  </select>
                </div>
                  <div className="col-sm-6 col-lg-3">
                  {/* <!-- Button modal --> */}
                  <Link  to={"/GroupForm"}>
                  <a className="btn btn-primary-soft ms-auto w-100"  data-bs-toggle="modal" data-bs-target="#modalCreateGroup"> <i className="fa-solid fa-plus pe-1"></i> Create group</a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- Card header START --> */}
            {/* <!-- Card body START --> */}
            <div className="card-body">
              {/* <!-- Tab nav line --> */}
              <ul className="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start">
                <li className="nav-item"> <a className="nav-link active" data-bs-toggle="tab" href="#tab-1"> Friends' groups </a> </li>
                <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-2"> Suggested for you </a> </li>
                <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-3"> Popular near you </a> </li>
                <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-4"> More suggestions </a> </li>
              </ul>
              <div className="tab-content mb-0 pb-0">
{/* 
                <!-- Friends groups tab START --> */}
                <div className="tab-pane fade show active" id="tab-1">
                  <div className="row g-4">
                    <div className="col-sm-6 col-lg-4">
                      {/* <!-- Card START --> */}
                      <div className="card">
                        <div className="h-80px rounded-top"  style={{backgroundImage: `url(${img3})`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"         }}></div>
                          {/* <!-- Card body START --> */}
                          <div className="card-body text-center pt-0">
                            
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <a href="group-details.html"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src={img8} alt=""/></a>
                            </div>
                            {/* <!-- Info --> */}
                            <h5 className="mb-0"> <a href="group-details.html">All in the Mind</a> </h5>
                            <small> <i className="bi bi-lock pe-1"></i> Private Group</small>
                            {/* <!-- Group stat START --> */}
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">32k</h6>
                                <small>Members</small>
                              </div>
                             
                              <div className="vr"></div>
                             
                              <div>
                                <h6 className="mb-0">20</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                            {/* <!-- Group stat END -->
                            <!-- Avatar group START --> */}
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img4} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img3} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img2} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img5} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+22</span></div>
                              </li>
                            </ul>
                            {/* <!-- Avatar group END --> */}
                        </div>
                        {/* <!-- Card body END --> */}
                        {/* <!-- Card Footer START --> */}
                        <div className="card-footer text-center">
                          <a className="btn btn-success-soft btn-sm" href="#!"> Join group </a>
                        </div>
                        {/* <!-- Card Footer END --> */}
                      </div>
                      {/* <!-- Card END --> */}
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      {/* <!-- Card START --> */}
                      <div className="card">
                      <div className="h-80px rounded-top" style={{backgroundImage: `url(${img2})`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}></div>
                          {/* <!-- Card body START --> */}
                          <div className="card-body text-center pt-0">
                            {/* <!-- Avatar --> */}
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <a href="group-details.html"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src={img2svg} alt=""/></a>
                            </div>
                            {/* <!-- Info --> */}
                            <h5 className="mb-0"><a href="group-details.html">Beauty queens</a></h5>
                            <small> <i className="bi bi-globe pe-1"></i> Public Group</small>
                            {/* <!-- Group stat START --> */}
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">23k</h6>
                                <small>Members</small>
                              </div>
                              {/* <!-- Divider --> */}
                              <div className="vr"></div>
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">12</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                            {/* <!-- Group stat END -->
                            <!-- Avatar group START --> */}
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img2} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img5} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img12svg} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+13</span></div>
                              </li>
                            </ul>
                            {/* <!-- Avatar group END --> */}
                        </div>
                        {/* <!-- Card body END --> */}
                        {/* <!-- Card Footer START --> */}
                        <div className="card-footer text-center">
                          <a className="btn btn-success-soft btn-sm" href="#!"> Join group </a>
                        </div>
                        {/* <!-- Card Footer END --> */}
                      </div>
                      {/* <!-- Card END --> */}
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      {/* <!-- Card START --> */}
                      <div className="card">
                        <div className="h-80px rounded-top"  style={{backgroundImage: `url(${img3})`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"         }}></div>
                          {/* <!-- Card body START --> */}
                          <div className="card-body text-center pt-0">
                            {/* <!-- Avatar --> */}
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <a href="group-details.html"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src={img9svg} alt=""/></a>
                            </div>
                            {/* <!-- Info --> */}
                            <h5 className="mb-0"> <a href="group-details.html">Eternal triangle</a></h5>
                            <small> <i className="bi bi-globe pe-1"></i> Public Group</small>
                            {/* <!-- Group stat START --> */}
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">45k</h6>
                                <small>Members</small>
                              </div>
                              {/* <!-- Divider --> */}
                              <div className="vr"></div>
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">16</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                          
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img1} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img10svg} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+12</span></div>
                              </li>
                            </ul>
                            {/* <!-- Avatar group END --> */}
                        </div>
                        {/* <!-- Card body END --> */}
                        {/* <!-- Card Footer START --> */}
                        <div className="card-footer text-center">
                          <a className="btn btn-danger-soft btn-sm" href="#!"> Leave group </a>
                        </div>
                        {/* <!-- Card Footer END --> */}
                      </div>
                      {/* <!-- Card END --> */}
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      {/* <!-- Card START --> */}
                      <div className="card">
                        <div className="h-80px rounded-top" style={{backgroundImage: `url(${img2})`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"         }}></div>
                          {/* <!-- Card body START --> */}
                          <div className="card-body text-center pt-0">
                            {/* <!-- Avatar --> */}
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <a href="group-details.html"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src={img10svg} alt=""/></a>
                            </div>
                            {/* <!-- Info --> */}
                            <h5 className="mb-0"> <a href="group-details.html">Mountain movers</a></h5>
                            <small> <i className="bi bi-lock pe-1"></i> Private Group</small>
                            {/* <!-- Group stat START --> */}
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">32k</h6>
                                <small>Members</small>
                              </div>
                              {/* <!-- Divider --> */}
                              <div className="vr"></div>
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">05</h6>
                                <small>Post per day</small>
                              </div>
                            </div>

                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                            <img className="avatar-img rounded-circle" src={img12svg} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img1} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img5} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img3} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img2} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+08</span></div>
                              </li>
                            </ul>
                            {/* <!-- Avatar group END --> */}
                          </div>
                          {/* <!-- Card body END --> */}
                          {/* <!-- Card Footer START --> */}
                          <div className="card-footer text-center">
                            <a className="btn btn-danger-soft btn-sm" href="#!"> Leave group </a>
                          </div>
                          {/* <!-- Card Footer END --> */}
                        </div>
                        {/* <!-- Card END --> */}
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        {/* <!-- Card START --> */}
                        <div className="card">
                          <div className="h-80px rounded-top" style={{backgroundImage: `url(${img5})`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"  }}></div>
                            {/* <!-- Card body START --> */}
                            <div className="card-body text-center pt-0">
                              {/* <!-- Avatar --> */}
                              <div className="avatar avatar-lg mt-n5 mb-3">
                                <a href="group-details.html"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src={img12svg} alt=""/></a>
                              </div>
                              {/* <!-- Info --> */}
                              <h5 className="mb-0"> <a href="group-details.html">Hard workers</a></h5>
                              <small> <i className="bi bi-lock pe-1"></i> Private Group</small>
                              {/* <!-- Group stat START --> */}
                              <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                                {/* <!-- Group stat item --> */}
                                <div>
                                  <h6 className="mb-0">12k</h6>
                                  <small>Members</small>
                                </div>
                                {/* <!-- Divider --> */}
                                <div className="vr"></div>
                                {/* <!-- Group stat item --> */}
                                <div>
                                  <h6 className="mb-0">05</h6>
                                  <small>Post per day</small>
                                </div>
                              </div>
                             
                              <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                                <li className="avatar avatar-xs">
                                  <img className="avatar-img rounded-circle" src={img2} alt="avatar"/>
                                </li>
                                <li className="avatar avatar-xs">
                                  <img className="avatar-img rounded-circle" src={img8} alt="avatar"/>
                                </li>
                                <li className="avatar avatar-xs">
                                  <img className="avatar-img rounded-circle" src={img4} alt="avatar"/>
                                </li>
                                <li className="avatar avatar-xs">
                                  <img className="avatar-img rounded-circle" src={img5} alt="avatar"/>
                                </li>
                                <li className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+23</span></div>
                                </li>
                              </ul>
                              {/* <!-- Avatar group END --> */}
                          </div>
                          {/* <!-- Card body END -->
                          <!-- Card Footer START --> */}
                          <div className="card-footer text-center">
                            <a className="btn btn-success-soft btn-sm" href="#!"> Join group </a>
                          </div>
                          {/* <!-- Card Footer END --> */}
                        </div>
                        {/* <!-- Card END --> */}
                      </div>
  {/* maping the group  */}
  
                      <div className="col-sm-6 col-lg-4">
                      {/* <!-- Card START --> */}
                      {/* {group.value.map((item)=>{ */}
                      <div className="card">
                        
                        <div className="h-80px rounded-top"  style={{backgroundImage: `url(${img3})`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"         }}></div>
                          {/* <!-- Card body START --> */}
                          <div className="card-body text-center pt-0">
                            {/* <!-- Avatar --> */}
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <a href="group-details.html"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src={group.image} alt=""/></a>
                            </div>
                            {/* <!-- Info --> */}
                            <h5 className="mb-0"> <a href="group-details.html">{group.name}</a></h5>
                            <small> <i className="bi bi-globe pe-1"></i> Public Group</small>
                            {/* <!-- Group stat START --> */}
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">45k</h6>
                                <small>Members</small>
                              </div>
                              {/* <!-- Divider --> */}
                              <div className="vr"></div>
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">16</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                          
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img1} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={img10svg} alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+12</span></div>
                              </li>
                            </ul>
                            {/* <!-- Avatar group END --> */}
                        </div>
                        {/* <!-- Card body END --> */}
                        {/* <!-- Card Footer START --> */}
                        <div className="card-footer text-center">
                          <a className="btn btn-danger-soft btn-sm" href="#!"> Leave group </a>
                        </div>
                        {/* <!-- Card Footer END --> */}
                      </div>
                        {/* })}  */}
                      {/* <!-- Card END --> */}
                    </div>
                  
                    </div>
                  </div>
                  {/* <!-- Friends' groups tab END --> */}

                {/* <!-- Suggested for you START --> */}
                <div className="tab-pane fade" id="tab-2">
                  <div className="row g-4">
                    <div className="col-sm-6 col-lg-4">
                      {/* <!-- Card START --> */}
                      <div className="card">
                        <div className="h-80px rounded-top" style={{backgroundImage: `url(${img2})`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"  }}></div>
                          {/* <!-- Card body START --> */}
                          <div className="card-body text-center pt-0">
                            {/* <!-- Avatar --> */}
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <a href="group-details.html"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src="images/01.svg" alt=""/></a>
                            </div>
                            {/* <!-- Info --> */}
                            <h5 className="mb-0"><a href="group-details.html">Real humans</a></h5>
                            <small> <i className="bi bi-globe pe-1"></i> Public Group</small>
                            {/* <!-- Group stat START --> */}
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">23k</h6>
                                <small>Members</small>
                              </div>
                              {/* <!-- Divider --> */}
                              <div className="vr"></div>
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">12</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                            {/* <!-- Group stat END -->
                            <!-- Avatar group START --> */}
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="images/06.jpg" alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="images/07.jpg" alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="images/09.jpg" alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+12</span></div>
                              </li>
                            </ul>
                            {/* <!-- Avatar group END --> */}
                        </div>
                        {/* <!-- Card body END --> */}
                        {/* <!-- Card Footer START --> */}
                        <div className="card-footer text-center">
                          <a className="btn btn-danger-soft btn-sm" href="#!"> Leave group </a>
                        </div>
                        {/* <!-- Card Footer END --> */}
                      </div>
                      {/* <!-- Card END --> */}
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      {/* <!-- Card START --> */}
                      <div className="card">
                        <div className="h-80px rounded-top" style={{backgroundImage: `url(${img2})`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"  }}></div>
                          {/* <!-- Card body START --> */}
                          <div className="card-body text-center pt-0">
                            {/* <!-- Avatar --> */}

                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <a href="group-details.html"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src="images/03.svg" alt=""/></a>
                            </div>
                            {/* <!-- Info --> */}
                            <h5 className="mb-0"><a href="group-details.html">Strong signals</a></h5>
                            <small> <i className="bi bi-lock pe-1"></i> Private Group</small>
                            {/* <!-- Group stat START --> */}
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">45k</h6>
                                <small>Members</small>
                              </div>
                              {/* <!-- Divider --> */}
                              <div className="vr"></div>
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">16</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                            {/* <!-- Group stat END -->
                            <!-- Avatar group START --> */}
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="images/11.jpg" alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="images/10.jpg" alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+05</span></div>
                              </li>
                            </ul>
                            {/* <!-- Avatar group END --> */}
                        </div>
                        {/* <!-- Card body END -->
                        <!-- Card Footer START --> */}
                        <div className="card-footer text-center">
                          <a className="btn btn-success-soft btn-sm" href="#!"> Join group </a>
                        </div>
                        {/* <!-- Card Footer END --> */}
                      </div>
                      {/* <!-- Card END --> */}
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      {/* <!-- Card START --> */}
                      <div className="card">
                        <div className="h-80px rounded-top" style={{backgroundImage: `url(${img3})`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}  ></div>
                          {/* <!-- Card body START --> */}
                          <div className="card-body text-center pt-0">
                            {/* <!-- Avatar --> */}
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <a href="group-details.html"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src="images/05.svg" alt=""/></a>
                            </div>
                            {/* <!-- Info --> */}
                            <h5 className="mb-0"><a href="group-details.html">Team yes, we can</a></h5>
                            <small> <i className="bi bi-lock pe-1"></i> Private Group</small>
                            {/* <!-- Group stat START --> */}
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">32k</h6>
                                <small>Members</small>
                              </div>
                              {/* <!-- Divider --> */}
                              <div className="vr"></div>
                              {/* <!-- Group stat item --> */}
                              <div>
                                <h6 className="mb-0">05</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                            {/* <!-- Group stat END -->
                            <!-- Avatar group START --> */}
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="images/10.jpg" alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="images/14.jpg" alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="images/13.jpg" alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="images/12.jpg" alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="images/11.jpg" alt="avatar"/>
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+08</span></div>
                              </li>
                            </ul>
                            {/* <!-- Avatar group END --> */}
                        </div>
                        {/* <!-- Card body END -->
                        <!-- Card Footer START --> */}
                        <div className="card-footer text-center">
                          <a className="btn btn-success-soft btn-sm" href="#!"> Join group </a>
                        </div>
                        {/* <!-- Card Footer END --> */}
                      </div>
                      {/* <!-- Card END --> */}
                    </div>
                  </div>
                </div>



                
                {/* <!-- Suggested for you END --> */}

                {/* <!-- Popular near you START --> */}
                <div className="tab-pane fade" id="tab-3">
                   {/* <!-- Add group --> */}
                  <div className="my-sm-5 py-sm-5 text-center">
                    <i className="display-1 text-body-secondary bi bi-people"> </i>
                    <h4 className="mt-2 mb-3 text-body">No group founds</h4>
                    <button className="btn btn-primary-soft btn-sm" data-bs-toggle="modal" data-bs-target="#modalCreateGroup"> Click here to add </button>
                  </div>
                </div>
                {/* <!-- Popular near you END --> */}

                {/* <!-- More suggestions START --> */}
                <div className="tab-pane fade" id="tab-4">
                   {/* <!-- Add group --> */}
                  <div className="my-sm-5 py-sm-5 text-center">
                    <i className="display-1 text-body-secondary bi bi-people"> </i>
                    <h4 className="mt-2 mb-3 text-body">No group founds</h4>
                    <button className="btn btn-primary-soft btn-sm" data-bs-toggle="modal" data-bs-target="#modalCreateGroup"> Click here to add </button>
                  </div>
                </div>
                {/* <!-- More suggestions END --> */}

            </div>
          </div>
          {/* <!-- Card body END --> */}
          
        </div>
        {/* <!-- Card END --> */}
      </div>
    // </div >
  );
};

export default Condant;
