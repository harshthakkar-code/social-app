import React from 'react';
import "./rightbar.css";
import ads from "../image/ads.jpg"
import image2 from "../image/image2.jpg"
import image3 from "../image/image5.jpg"
import image4 from "../image/image4.jpg"
import image5 from "../image/image5.jpg"
import image6 from "../image/image6.jpg"
import image7 from "../image/image7.jpg"

import user from "../image/profile.png"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightcontainer'>
        <div className='adscontainer'>
          <img src={`${ads}`} className='adsimg' alt='' />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>Code Damy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontysize: '12px', marginTop: '-16px' }}>Buy code dammy course</p>
          </div>
        </div>
        <div className='adscontainer'>
          <img src={`${image2}`} className='adsimg' alt='' />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>Code Damy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontysize: '12px', marginTop: '-16px' }}>Buy code dammy course</p>
          </div>
        </div>
        <div className='adscontainer'>
          <img src={`${image3}`} className='adsimg' alt='' />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>Code Damy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontysize: '12px', marginTop: '-16px' }}>Buy code dammy course</p>
          </div>
        </div>
      </div>

      {/* <div className='rightcontainer2'>
        <div className='adscontainer'>
          <img src={`${ads}`} className='adsimg' alt='' />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>Code Damy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontysize: '12px', marginTop: '-16px' }}>Buy code dammy course</p>
          </div>
        </div>
        <div className='adscontainer'>
          <img src={`${image2}`} className='adsimg' alt='' />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>Code Damy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontysize: '12px', marginTop: '-16px' }}>Buy code dammy course</p>
          </div>
        </div>
        <div className='adscontainer'>
          <img src={`${image3}`} className='adsimg' alt='' />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>Code Damy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontysize: '12px', marginTop: '-16px' }}>Buy code dammy course</p>
          </div>
        </div>
      </div> */}
      <div className='rightcontainer2'>
        <h3 style={{textAlign:'start',marginLeft:'10px'}}>Suggested for you</h3>
        <div style={{marginTop:'-10px',}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center'}}>
              <img src={`${image3}`} className='profileimg' alt='' />
              <p style={{marginLeft:'10px',textAlign:'start'}}>suman</p>
              <p style={{marginLeft:'10px',textAlign:'start', marginTop:"-16px", fontSize:'11px',color:'#aaa'}}>Suggested for you</p>
            </div>
            <div style={{backgroundColor:'#aaa', padding:'10px', marginRight:13,borderRadius:"50%"}}>
            <img src={`${user}`} className='addfriend' alt='' />
            </div>
          </div>
        </div>
        <div style={{marginTop:'-10px',}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center'}}>
              <img src={`${image2}`} className='profileimg' alt='' />
              <p style={{marginLeft:'10px',textAlign:'start'}}>suman</p>
              <p style={{marginLeft:'10px',textAlign:'start', marginTop:"-16px", fontSize:'11px',color:'#aaa'}}>Suggested for you</p>
            </div>
            <div style={{backgroundColor:'#aaa', padding:'10px', marginRight:13,borderRadius:"50%"}}>
            <img src={`${user}`} className='addfriend' alt='' />
            </div>
          </div>
        </div>
         <div style={{marginTop:'-10px',}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center'}}>
              <img src={`${image4}`} className='profileimg' alt='' />
              <p style={{marginLeft:'10px',textAlign:'start'}}>rockey</p>
              <p style={{marginLeft:'10px',textAlign:'start', marginTop:"-16px", fontSize:'11px',color:'#aaa'}}>Suggested for you</p>
            </div>
            <div style={{backgroundColor:'#aaa', padding:'10px', marginRight:13,borderRadius:"50%"}}>
            <img src={`${user}`} className='addfriend' alt='' />
            </div>
          </div>
        </div>
         <div style={{marginTop:'-10px',}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center'}}>
              <img src={`${image5}`} className='profileimg' alt='' />
              <p style={{marginLeft:'10px',textAlign:'start'}}>love</p>
              <p style={{marginLeft:'10px',textAlign:'start', marginTop:"-16px", fontSize:'11px',color:'#aaa'}}>Suggested for you</p>
            </div>
            <div style={{backgroundColor:'#aaa', padding:'10px', marginRight:13,borderRadius:"50%"}}>
            <img src={`${user}`} className='addfriend' alt='' />
            </div>
          </div>
        </div>
        <div style={{marginTop:'-10px',}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center'}}>
              <img src={`${image6}`} className='profileimg' alt='' />
              <p style={{marginLeft:'10px',textAlign:'start'}}>kush</p>
              <p style={{marginLeft:'10px',textAlign:'start', marginTop:"-16px", fontSize:'11px',color:'#aaa'}}>Suggested for you</p>
            </div>
            <div style={{backgroundColor:'#aaa', padding:'10px', marginRight:13,borderRadius:"50%"}}>
            <img src={`${user}`} className='addfriend' alt='' />
            </div>
          </div>
        </div>
        <div style={{marginTop:'-10px',}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center'}}>
              <img src={`${image7}`} className='profileimg' alt='' />
              <p style={{marginLeft:'10px',textAlign:'start'}}>shera</p>
              <p style={{marginLeft:'10px',textAlign:'start', marginTop:"-16px", fontSize:'11px',color:'#aaa'}}>Suggested for you</p>
            </div>
            <div style={{backgroundColor:'#aaa', padding:'10px', marginRight:13,borderRadius:"50%"}}>
            <img src={`${user}`} className='addfriend' alt='' />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}