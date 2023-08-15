import React from 'react';
import "./contentPost.css";
import video from "../image/video.jpg"
import smile from "../image/smile.jpg"
import profile from "../image/profile.png"


export default function Contentpost() {
  return (
    <div>
      <div className='ContentuploadContainer'>
        <div style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
          <img src={`${profile}`} className='profileimg' alt='' />
          <input type='text' className='contentwritingpart' placeholder=' Write Your real Thought......' />
        </div>
        <div style={{ display: 'flex', marginLeft: '10px', }}>
          <div> 
            <img src={`${profile}`} className='icon' alt='' />
            <img src={`${smile}`} className='icon' alt='' />
            <img src={`${video}`} className='icon' alt='' />
            <button style={{marginLeft:'310px', paddingLeft:'20px',paddingRight:'20px' , paddingTop:6, paddingBottom:6, border:'none', background:'black', color:'white', borderRadius:'5px'}}>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}