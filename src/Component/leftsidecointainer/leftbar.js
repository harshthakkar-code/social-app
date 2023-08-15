import React from 'react';
import "./leftbar.css";
import image from "../image/galary.jpeg"
import like from "../image/like.jpeg"
import image2 from "../image/image2.jpg"
import image3 from "../image/image3.jpg"
import image4 from "../image/image4.jpg"
import image5 from "../image/image5.jpg"
import image6 from "../image/image6.jpg"
import image7 from "../image/image7.jpg"
import image8 from "../image/image8.jpg"

export default function Leftbar() {
  return (
    <div className='Leftbar'>
      <div className='NotificationsContainer'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p style={{marginLeft:'-14px'}}> Notification</p>
          <p style={{ color: '#aaa' , marginLeft:'-14px'}}>See all</p>
        </div>
        <div style={{display:'flex',alignContent:'center',marginTop:-13}}>
          <img src={`${image7}`} className='notificationimg' alt=''/>
          <p style={{marginLeft:'5px' , color:'#aaa',fontSize:13,width:'120px'}}>Madan like your post </p>
          <img src={`${image3}`} className='likeimage' alt=''/>
          </div>
          <div style={{display:'flex',alignContent:'center',marginTop:-13}}>
          <img src={`${image2}`} className='notificationimg' alt=''/>
          <p style={{marginLeft:'5px' , color:'#aaa',fontSize:13,textAlign:'start',width:'120px'}}>suman started to following you</p>
          <img src={`${image5}`} className='followinguserimage' alt=''/>
          </div>
          <div style={{display:'flex',alignContent:'center',marginTop:-13}}>
          <img src={`${image3}`} className='notificationimg' alt=''/>
          <p style={{marginLeft:'5px' , color:'#aaa',fontSize:13, width:'120px'}}>Madan like your post </p>
          <img src={`${image4}`} className='likeimage' alt=''/>
          </div>
          <div style={{display:'flex',alignContent:'center',marginTop:-13}}>
          <img src={`${image4}`} className='notificationimg' alt=''/>
          <p style={{marginLeft:'' , color:'#aaa',fontSize:13, width:'120px'}}>suman started to following you</p>
          <img src={`${image2}`} className='followinguserimage' alt=''/>
          </div>
          <div style={{display:'flex',alignContent:'center',marginTop:-13}}>
          <img src={`${image5}`} className='notificationimg' alt=''/>
          <p style={{marginLeft:'5px' , color:'#aaa',fontSize:13, width:'120px'}}>Madan like your post </p>
          <img src={`${image3}`} className='followinguserimage' alt=''/>
          </div>
          <div style={{display:'flex',alignContent:'center',marginTop:-13}}>
          <img src={`${image6}`} className='notificationimg' alt=''/>
          <p style={{marginLeft:'5px' , color:'#aaa',fontSize:13, width:'120px'}}>Madan like your post </p>
          <img src={`${image4}`} className='followinguserimage' alt=''/>
          </div>
      </div>

      <div className='NotificationsContainer'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p style={{marginLeft:'-20px'}}>Explore</p>
          <p style={{ color: '#aaa', marginLeft:'40px' }}>See all</p>
        </div>
        <div>
        <img src={`${image6}`} className='exploreimage' alt=''/>
        <img src={`${image2}`} className='exploreimage' alt=''/>
        <img src={`${image3}`} className='exploreimage' alt=''/>
        <img src={`${image4}`} className='exploreimage' alt=''/>
        <img src={`${image5}`} className='exploreimage' alt=''/>
        <img src={`${image6}`} className='exploreimage' alt=''/>
        <img src={`${image7}`} className='exploreimage' alt=''/>
        <img src={`${image8}`} className='exploreimage' alt=''/>
        </div>
        </div>
    </div>
  )
}