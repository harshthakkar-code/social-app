import React from 'react';
import "./Navbar.css";
import searchIcon from "../image/1.jpg";
const Navbar = () =>{
 return (
    <div className='mainNavbar'>
      
      <div>
         <p>Social</p>
      </div>
      <div>
         <div>
            <img src={`${searchIcon}`} alt=''/>
            <input  type='text' id='' name=''/>
         </div>
      </div>
      <div>
            <img src='' alt=''/>
            <img src='' alt=''/>
            <div>
               <img src='' alt=''/>
               <p>suman</p>
            </div>
      </div>

   </div>
 )   
}
export default Navbar;