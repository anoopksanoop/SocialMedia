import { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import "./PostBox.css"
import { Link } from "react-router-dom";

const PostBox = ({ Newpost ,onDelete}) => {
  // debugger
    const [ post, setPost ] = useState({});
    const [ backgroundImage, setBackgroundImage ] = useState();
   
    let postBoxRef = useRef(null);

    const backgroundStyle = {
    backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}
    // debugger 
    // 
    


    // useEffect(() => {
    //   // debugger 
    //   setBackgroundImage(Newpost.image);
    //   return () => {

    //   }
    // },[])  


    useEffect(() => {
      if(postBoxRef){
        // debugger 
        postBoxRef.style.backgroundImage = 'url("'+backgroundImage+'")';    
      }
    }, [backgroundImage])
    

    useEffect(() => {
      setPost(Newpost);
       
        setTimeout(() => {
            // debugger 
          // backgroundImage = Newpost.image; 
           setBackgroundImage(Newpost.image)
            
        }, 200);
        
    }, [Newpost])

    const handleDeleteClick = async () => {
        try {
          // Make an API call to delete the post
          await axios.delete(`http://localhost:3001/Grouprouter/posts/${post.id}`);
    
          // Trigger the onDelete callback to update the state in the parent component
          onDelete(post.id);
        } catch (error) {
          console.error("Error deleting post:", error.message);
          // Handle error cases, if needed
        }
      };

      const [liked, setLiked] = useState(Newpost.likes > 0);

      const handleLikeClick = () => {
        setLiked(!liked);
      };

      if(!post){
        return <></>
      }


      
    return (
      <div  id={`post-${post.id}`} key={post.id} >
      {/* <!-- Card START --> */}
      {/* {group.value.map((item)=>{ */}
      <div className="card-pic" >

        
         
        <div ref={ el =>  postBoxRef = el } className="h-80px rounded-top" data-image-url={backgroundImage}  style={ backgroundStyle}></div>
      
          <div className="card-body text-center pt-0">
          
            <div className="avatar avatar-lg mt-n5 mb-3">
               <Link to={`/post/${post.id}`}><img className="avatar-img rounded-circle border border-white border-3 bg-white" 
               src={post.image} alt=""/></Link>
            </div>
            
            <h5 className="mb-0"> <Link to={`/post/${post.id}`}>{post.imgdecs || 'General'}</Link></h5>
          
        </div>
     
        <div className="card-footer mt-4 text-center">
        {sessionStorage.user && (
          <a className="btn btn-danger-soft btn-sm" onClick={handleDeleteClick} > Delete picture </a>
        )}
     <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
      <div className="like-wrapper">
        <div className="ripple"></div>
        <svg className="heart" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
        </svg>
        <div className="particles" style={{ '--total-particles': 6 }}>
          <div className="particle" style={{ '--i': 1, '--color': '#7642F0' }}></div>
          <div className="particle" style={{ '--i': 2, '--color': '#AFD27F' }}></div>
          <div className="particle" style={{ '--i': 3, '--color': '#DE8F4F' }}></div>
          <div className="particle" style={{ '--i': 4, '--color': '#D0516B' }}></div>
          <div className="particle" style={{ '--i': 5, '--color': '#5686F2' }}></div>
          <div className="particle" style={{ '--i': 6, '--color': '#D53EF3' }}></div>
        </div>
      </div>
    </button>

        </div>

        
        {/* <!-- Card Footer END --> */}
      </div>
        {/* })}  */}
      {/* <!-- Card END --> */}
    </div>
)
}
export default PostBox;