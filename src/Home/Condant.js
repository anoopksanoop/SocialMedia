import React from "react";
import img1 from "../images/01.jpg";
import img2 from "../images/02.jpg";
import img3 from "../images/03.jpg";
import img4 from "../images/04.jpg";
import img5 from "../images/05.jpg";
import img8 from "../images/08.svg";
import img1svg from "../images/01.svg";
import img2svg from "../images/02.svg";
import img3svg from "../images/03.svg";
import img5svg from "../images/05.svg";
import img9svg from "../images/09.svg";
import img10svg from "../images/10.svg";
import img12svg from "../images/12.svg";

const Condant = () => {
    return (
        <div className="col-md-8 col-lg-6 vstack gap-4">
            {/* <!-- Card START --> */}
            <div className="card">
                {/* <!-- Card header START --> */}
                <div className="card-header border-0 pb-0">
                    <div className="row g-2">
                        <div className="col-lg-2">
                            {/* <!-- Card title --> */}
                            <h1 className="h4 card-title mb-lg-0">Group</h1>
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
                            <a className="btn btn-primary-soft ms-auto w-100" href="#" data-bs-toggle="modal" data-bs-target="#modalCreateGroup"> <i className="fa-solid fa-plus pe-1"></i> Create group</a>
                        </div>
                    </div>
                </div>
                {/* <!-- Card header START -->
            <!-- Card body START --> */}
                <div className="card-body">
                    {/* <!-- Tab nav line --> */}
                    <ul className="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start">
                        <li className="nav-item"> <a className="nav-link active" data-bs-toggle="tab" href="#tab-1"> Friends' groups </a> </li>
                        <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-2"> Suggested for you </a> </li>
                        <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-3"> Popular near you </a> </li>
                        <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-4"> More suggestions </a> </li>
                    </ul>
                    <div className="tab-content mb-0 pb-0">
                        {/* Tab Contemt */}
                        {/* end Tab Content */}
                    </div>
                </div>
            </div>
            {/* <!-- Card body END --> */}
        
      {/* <!-- Card END --> */ }
    </div >
  );
};

export default Condant;
