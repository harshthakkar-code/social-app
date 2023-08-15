import React from 'react';
import "./profile.css";
import Navbar1 from '../../Component/Navbar/Navbar1';
import ProfileRightbar from '../../Component/profilerightsidecontainer copy/profilerightbar';
import ProfileLeftbar from '../../Component/profileleftsidecointainer/profileftbar';
import Profilemainpost from '../../Component/profilemainpostcontainer/profilemainpost';


export default function Profile(){
 return (
    <div className='profilecontainer'>
     <Navbar1/>
     <div className='subprofilecointainer'>
        <ProfileLeftbar/>
        <Profilemainpost/>
        <ProfileRightbar/>
     </div>
    </div>
 )   
}