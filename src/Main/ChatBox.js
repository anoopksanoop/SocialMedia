import { footContext } from "../Context";
import { useContext ,useEffect,useState} from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./ChatBox.css"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
  import {fetchdata} from "../Redux/Userdatas";
  import { useNavigate } from "react-router";
  import { selectUser } from "../Redux/UserSlice";

const ChatBox = () => {

  const navigate=useNavigate();
  const {socket,messageList,setMessageList,setShowChat} = useContext(footContext);
  const dispatch=useDispatch()
  const DataList= useSelector((state)=>state.datas);
  const user = useSelector(selectUser);

  const [room, setRoom] = useState("");
  const [currentMessage, setCurrentMessage] = useState('');
  const [username, setUsername] = useState("");

  useEffect(()=>{
    dispatch(fetchdata())
    //  (DataList)
  },[]);
 
  const {id}=useParams();
  const currentUser = (DataList.data || []).find((p) => p.id=== parseInt(id));
    
  const handleJoinRoom=()=>{
    // setLoginUser(parseInt(id))
    navigate("/HomePage")
  }




  
  useEffect(() => {
    if (socket && currentUser) {
      
      // Set the room based on sender and receiver's IDs
      // const otherUserId = parseInt(id); // Assuming this is the ID of the other user you are chatting with
      const senderId = currentUser.id;
      const room = `room_${Math.min(senderId, user.id)}_${Math.max(senderId, user.id)}`;
      setRoom(room);

      const username = currentUser.name;
      setUsername(username);
      setShowChat(true);

      socket.emit("join_room", room, user.id);

      socket.on('user_joined', (userId) => {
        console.log(`User with ID ${userId} joined the room`);
        // Handle the user joined event (e.g., show a notification)
      });

      socket.on('receive_message', (data) => {
        if (Array.isArray(data)) {
          // If data is an array, it's the chat history
          setMessageList(data);
        } else {
        
          // If data is a single message
          setMessageList((list) =>{
            //debugger 
            if(list && Array.isArray(list)){
              return [...list, data]
            }
            return [ data ]
            
          });
        }
      });
    
    
    
    }
  }, [socket, id, currentUser]);


  
  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        username: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getTime(),
      };

      axios.post('http://localhost:3001/send_message', messageData)
      .then((response) => {
        console.log('Message sent to server:', response.data);
      })
      .catch((error) => {
        console.error('Error sending message to server:', error);
      });

      await socket.emit('send_message', messageData);
      // setMessageList((list) => {
      //   // debugger 
      //   return [...list, messageData]
      // });
      setCurrentMessage(''); // Clear the input field after sending the message
    }
  };
 

  // console.log("id:"+id);
  const UserId=(DataList.data||[]).find((p)=>p.id===parseInt(id))
  // console.log(UserId);

  if (!UserId) {
    return <div style={{position:" absolute",
      top: "50%",
      left: "50%",
      transform:" translate(10px, 10px)"}}>Please select a valid user to chat with.</div>;
  }


console.log(setShowChat,"showcchat")
  return (
   

    <div className="col-lg-8 col-xxl-9">
      <div className="card card-chat rounded-start-lg-0 border-start-lg-0">
        <div className="card-body h-100">
          
              <div className="d-sm-flex justify-content-between align-items-center">
                <div className="d-flex mb-2 mb-sm-0" key={UserId.id} >
                  <div className="flex-shrink-0 avatar me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src={`http://localhost:3001/${UserId.image}`}
                      alt=""
                    />
                  </div>
                  <div className="d-block flex-grow-1">
                    <h6 className="mb-0 mt-1">{UserId.name}</h6>
                    <div className="small text-secondary">
                      <i className="fa-solid fa-circle text-success me-1"></i>
                      Online
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <a
                    href=" "
                    className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Audio call"
                  >
                    <i className="bi bi-telephone-fill"></i>
                  </a>
                  
                  <a
                  onClick={handleJoinRoom}
                    href=" "
                    className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Video call"
                  >
                    <i className="bi bi-camera-video-fill"></i>
                  </a>
             
                  <div className="dropdown">
                    <a
                      className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                      href=" "
                      id="chatcoversationDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                  
                      <i className="bi bi-three-dots-vertical"></i>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="chatcoversationDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href=" ">
                          <i className="bi bi-check-lg me-2 fw-icon"></i>Mark as
                          read
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href=" ">
                          <i className="bi bi-mic-mute me-2 fw-icon"></i>Mute
                          conversation
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="h">
                          <i className="bi bi-person-check me-2 fw-icon"></i>
                          View profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="h">
                          <i className="bi bi-trash me-2 fw-icon"></i>Delete
                          chat
                        </a>
                      </li>
                      <li className="dropdown-divider"></li>
                      <li>
                        <a className="dropdown-item" href="h">
                          <i className="bi bi-archive me-2 fw-icon"></i>Archive
                          chat
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            
                
<div className="chat-conversation-content custom-scrollbar ">

{messageList.map((messageContent,index)=>(
              <div  className="" key={index} >
                <div className="text-center small my-2">
                {new Date(messageContent.time).toLocaleString()}
                </div>
          
        <div id={username === messageContent.username ? 'you' : 'other'}>{messageContent.message}</div>
   
  
   </div>
           
           ))}
           </div>
           </div>


        
        <div className="card-footers">
          <div className="d-sm-flex align-items-end">
            <textarea
              className="form-control mb-sm-0 mb-3"
              data-autoresize=""
              placeholder="Type a message"
              rows="1"
              value={currentMessage}
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
            ></textarea>
            <button className="btn btn-sm btn-danger-soft ms-sm-2" >
              <i className="fa-solid fa-face-smile fs-6"></i>
            </button>
            <button className="btn btn-sm btn-secondary-soft ms-2">
              <i className="fa-solid fa-paperclip fs-6"></i>
            </button>
            <div></div>
            <button className="btn btn-sm btn-primary ms-2" onClick={ e => sendMessage()}>
              <i className="fa-solid fa-paper-plane fs-6"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
     
  );
};

export default ChatBox;
