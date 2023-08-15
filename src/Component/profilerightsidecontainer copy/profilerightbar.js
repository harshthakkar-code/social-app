import React from 'react';
import "./profilerightbar.css";
import ads from "../image/ads.jpg"
import image2 from "../image/image2.jpg"
import image3 from "../image/image5.jpg"
import image4 from "../image/image4.jpg"
import image5 from "../image/image5.jpg"
import image6 from "../image/image6.jpg"
import image7 from "../image/image7.jpg"

import user from "../image/profile.png"

export default function ProfileRightbar() {
  return (
    <div className='Profilerightbar'>
      <div className='profilerightcontainer'>
        <h3>Friend Request</h3>
        <div>
          <div>
            <div style={{display:'flex', alignItems:'center',marginLeft:10,cursor:'pointer'}}>
            <img src={`${image2}`} className="Friendsimage" alt="" />
            <p style={{textAlign:'start',marginLeft:'10px',}}>Rin jusion want to make you friends</p>
            </div>
            <div style={{display:'flax',justifyContent:'space-around'}}>
              <button style={{paddingLeft:'30px', paddingRight:'30px',paddingTop:5, border:'none', background:'black', color:'white',borderRadius:'10px'}}>Accept</button>
              <button style={{paddingLeft:'30px', paddingRight:'30px',paddingTop:5, border:'none', background:'black', color:'white',borderRadius:'10px'}}>Deny</button>,
              </div>
              <div style={{display:'flex', alignItems:'center',marginLeft:10,cursor:'pointer'}}>
            <img src={`${image5}`} className="Friendsimage" alt="" />
            <p style={{textAlign:'start',marginLeft:'10px',}}>Rin jusion want to make you friends</p>
            </div>
            <div style={{display:'flax',justifyContent:'space-around'}}>
              <button style={{paddingLeft:'30px', paddingRight:'30px',paddingTop:5, border:'none', background:'black', color:'white',borderRadius:'10px'}}>Accept</button>
              <button style={{paddingLeft:'30px', paddingRight:'30px',paddingTop:5, border:'none', background:'black', color:'white',borderRadius:'10px'}}>Deny</button>,
              </div>
              <div style={{display:'flex', alignItems:'center',marginLeft:10,cursor:'pointer'}}>
            <img src={`${image7}`} className="Friendsimage" alt="" />
            <p style={{textAlign:'start',marginLeft:'10px',}}>Rin jusion want to make you friends</p>
            </div>
            <div style={{display:'flax',justifyContent:'space-around'}}>
              <button style={{paddingLeft:'30px', paddingRight:'30px',paddingTop:5, border:'none', background:'black', color:'white',borderRadius:'10px'}}>Accept</button>
              <button style={{paddingLeft:'30px', paddingRight:'30px',paddingTop:5, border:'none', background:'black', color:'white',borderRadius:'10px'}}>Deny</button>,
              </div>
          
          </div>



        </div>

      </div>
    </div>
  )
}