import React from 'react';
import "./home.css"
import Navbar1 from '../../Component/Navbar/Navbar1';
import Leftbar from '../../Component/leftsidecointainer/leftbar';
import Rightbar from '../../Component/rightsidecontainer/rightbar';
import Mainpost from '../../Component/mainpostcontainer/mainpost';
export default function Home(){
 return (
    <div className='home'>
      <Navbar1 />
      <div className='ComponentCointainer'>
        <Leftbar/>
        <Mainpost/>
        <Rightbar/>
      </div>
    </div>
 )   
}