import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../Redux/UserSlice";
import { addGroup } from "../../Redux/Groupslice";
import { useState } from "react";

const GroupForm = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = new useNavigate();

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [privacy,setPrivacy]=useState("")
    const [Groupdecs, setGroupdecs] = useState('')



const handleSubmit=(event,id)=>{
    event.preventDefault();

    dispatch(
        addGroup({
            id:"",
            name:name,
            image:image,
            privacy:privacy,
            Groupdecs:Groupdecs,
        })
      );

navigate(`/Home/${id}`);
      
}
const handleImageChange = (e) => {
    const selectedFile = e.target.files[0]; // Corrected typo: .files instead of .file
    setImage(URL.createObjectURL(selectedFile));
  };
  const HandleDeleteImage=(e)=>{
    setImage("")
  }

  function navHome(id) {
    navigate(`/Home/${id}`);
  }


  return (
    <div
      className="d-flex justify-content-center align-items-center"
      id="modalCreateGroup"
      tabindex="-1"
      aria-labelledby="modalLabelCreateGroup"
      aria-hidden="true"
    >
      <div className="modal-dialog w-50">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalLabelCreateGroup">
              Create Group
            </h5>
            <button
              onClick={() => navHome(user.id)}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">


                <label className="form-label">Group name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Group name here"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>

              <div className="mb-3">


                <label className="form-label">Group picture</label>

                <div className="d-flex align-items-center">
                  <div className="avatar-uploader me-3">
                    <div className="avatar-edit">
                      <input
                        type="file"
                        id="avatarUpload"
                        accept="image/*"
                      onChange={handleImageChange}
                       required
                      />
                      <label for="avatarUpload"></label>
                    </div>

                    <div className="avatar avatar-xl position-relative">
                      <img
                        id="avatar-preview"
                        className="avatar-img rounded-circle border border-white border-3 shadow"
                        src={image}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="avatar-remove">
                    <button
                      type="button"
                      id="avatar-reset-img"
                      className="btn btn-light"
                      onClick={HandleDeleteImage}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label d-block">Select audience</label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="PublicRadioOptions"
                    id="publicRadio1"
                    value={privacy}
                    onChange={(e)=>setPrivacy(e.target.value)}
                  />
                  <label className="form-check-label" for="publicRadio1">
                    Public
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="PublicRadioOptions"
                    id="privateRadio2"
                   value={privacy}
                   onChange={(e)=>setPrivacy(e.target.value)}
                  />
                  <label className="form-check-label" for="privateRadio2">
                    Private
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Group description </label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Description here"
                  value={Groupdecs}
                  onChange={(e)=>setGroupdecs(e.target.value)}
                ></textarea>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-success-soft" onClick={handleSubmit }>
              Create now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupForm;
