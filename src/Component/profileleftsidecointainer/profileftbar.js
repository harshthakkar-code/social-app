import React from 'react';
import "./profileleftbar.css";
import image from "../image/galary.jpeg"
import like from "../image/like.jpeg"
import image2 from "../image/image2.jpg"
import image3 from "../image/image3.jpg"


export default function ProfileLeftbar() {
  return (
    <div className='ProfileLeftbar'>
      <div className='NotificationsContainer'>
        <img src={`${image3}`} className="ProfilepageCover" alt="" />
        <div style={{ display: 'flex', alignItems: 'center', marginTop: -30 }}>
          <img src={`${image2}`} className="Profilepageimage" alt="" />
          <div>
            <p style={{ marginLeft: 6, marginTop: 20, color: "black", textAlign: 'start' }}>suman</p>
            <p style={{ marginLeft: 6, marginTop: 20, color: "black", textAlign: "start", marginTop: -16, fontSize: 11 }}>Software Developer</p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: "black", marginLeft: 20, fontSize: "14px" }}>Followings</p>
          <p style={{ color: "black", marginRight: 20, fontSize: "12px", marginTop: 17 }}>3454334</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -20 }}>
          <p style={{ color: "black", marginLeft: 20, fontSize: "14px" }}>Followers</p>
          <p style={{ color: "black", marginRight: 20, fontSize: "12px", marginTop: 17 }}>345543</p>
        </div>
        <div style={{ marginTop: -20 }}>
          <h5 style={{ color: "black", marginLeft: 10, fontSize: "14px", marginRight: 30, marginTop: 30, textAlign: "start" }}>User bio</h5>
          <p style={{ color: "black", fontSize: "12px", marginTop: -20, textAlign: "start", marginLeft: "10px" }}>I would rather be despised of who I am, rather than loved by who I am not.</p>
        </div>
        <div className='NotificationsContainer'>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <p style={{ marginLeft: '-20px' }}>Explore</p>
            <p style={{ color: '#aaa', marginLeft: '40px' }}>See all</p>
          </div>
        </div>
      </div>
     </div>
        )
}