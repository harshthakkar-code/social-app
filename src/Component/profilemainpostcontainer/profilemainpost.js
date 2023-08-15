import React from 'react';
import "./profilemainpost.css";
import Contentpost from '../contentPostCointainer/contentPost';
import Postcointainer from '../postcointainer/post';
import coverimage from "../image/image6.jpg"

export default function Profilemainpost(){
 return (
    <div className='Profilemainpostcontainer'>
      <div>
      <img src={`${coverimage}`} className='profilecoverimg' alt=''/>
      <h2 style={{marginTop:-43,color:'white',textAlign:'start',marginLeft:'34px',}}></h2>
      </div>
      <Contentpost/>
      <Postcointainer/>
      <Postcointainer/>
    </div>
 )   
}