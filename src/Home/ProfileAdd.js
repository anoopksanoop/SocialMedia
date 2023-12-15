import React from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserSlice";

const ProfileAdd = () => {
    
  const user = useSelector(selectUser);
    const nav = useNavigate();
    
    const [image, setImage] = useState("")

    const [formImage, setFormImage] = useState({
        userId:user.id,
        image:""
    })

    
    const handleSubmit = async (e,id) => {
        e.preventDefault();
        const formdata=new FormData();
        formdata.append('image',image);
        formdata.append('userId', user.id)
    
        try {
          // Send signup data to the server using Axios
          const response = await axios.post(
            "http://localhost:3001/Grouprouter/profile",
            formdata
          );
    
          console.log(response.data);
        } catch (error) {
          console.log("Error upload:", error.message);
        }
        nav(`/Home/${user.id}`);
      };

      const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
    
        // Update the state with the selected image
        setImage(selectedImage);
    
        // Optionally, display the selected image immediately
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormImage({ ...formImage, image: reader.result });
        };
        reader.readAsDataURL(selectedImage);
    };
    

const HandleDeleteImage=(e)=>{
    setImage("")
    setFormImage({ ...formImage, image: "" });
  }
console.log("form",formImage)


  return (
    <Container >
    <Row className="justify-content-center mt-5">
      <Col md={6} style={{ marginTop: "30px" }}>
        <Form
          style={{
            color: "white",
            background: "#0b0b0be8",
            padding: "10%",
            borderRadius: "20px",
            backgroundColor: "#212529",
            paddingBottom: "10%",
          }}
         
        >
          <h1 className="sigin">Add IMAGE</h1>

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
      src={formImage.image} 
      alt=""
    />
  </div>
</div>

<div className="avatar-remove">
  <button
    type="button"
    style={{marginRight:"25px"}}
    id="avatar-reset-img"
    className="btn btn-light"
    onClick={HandleDeleteImage}
  >
    Delete
  </button>
  <button 
    type="button"
    id="avatar-reset-img"
    className="btn btn-light"
    onClick={handleSubmit}
  >
    Submit
  </button>
</div>
</div>
         
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default ProfileAdd