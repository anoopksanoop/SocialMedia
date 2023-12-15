import React from 'react'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import { useContext } from 'react';
import { footContext } from '../../Context';
const RoomPage = () => {


  const data = useContext(footContext)
  const {value}=data
  console.log("valuess",value)

  const myMeeting=async (element)=>{
    const appID=1393827209 ;
    const serverSecret="5ed0192ebf987dad00b55b30d8f23e8d";
    const kitToken= ZegoUIKitPrebuilt.generateKitTokenForTest(appID,
      serverSecret,
      value,
      Date.now().toString(),
      " ");

const zc= ZegoUIKitPrebuilt.create(kitToken);
zc.joinRoom({
  container:element,
  sharedLinks:[
    {
name:"Copy Link",
url:`http://localhost:3000/room/${value}`
    }
],
  scenario:{
    mode:ZegoUIKitPrebuilt.OneONoneCall,
  },
  showScreenSharingButton:true
})

  }
  return (
    <div >
      <div data-aos="zoom-out-right">
        <h1  data-aos="fade-right">Room {value}</h1>
      </div>
        <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage