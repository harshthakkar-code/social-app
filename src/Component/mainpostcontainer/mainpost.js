import React from 'react';
import "./mainpost.css";
import Contentpost from '../contentPostCointainer/contentPost';
import Postcointainer from '../postcointainer/post';

export default function Mainpost(){
 return (
    <div className='mainpostcontainer'>
      <Contentpost/>
      <Postcointainer/>
      <Postcointainer/>
    </div>
 )   
}