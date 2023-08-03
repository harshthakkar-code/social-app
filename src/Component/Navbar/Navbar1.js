import searchIcon from "../image/search.png";
import notification from "../image/notification.png";
import massage from "../image/massage.png";
import profile from "../image/profile.png";
// import massage from "../image/massage.png";
import "./Navbar.css";

const Navbar1 = () =>{
    return(
        <div className='mainNavbar'>
      
        <div className="logoContainer">
           <p>Social</p>
        </div>
        <div>
           <div className="searchInputContainer">
              <img src={`${searchIcon}`} className='searchIcon' alt=''/>
              <input  type='text'className="searchInput" placeholder='Search Your Friends' name=''/>
           </div>
        </div>
        <div className="IconsContainer ">
              <img src={`${notification}`} className='Icons  ' alt=''/>
              <img src={`${massage}`} className='Icons' alt=''/>
              <div style={{display:'flax',alignItems:'center'}}>
                 <img src={`${profile}`} className='ProfileImage' alt=''/>
                 {/* <p style={{marginLeft:'10px'}}>suman</p> */}
              </div>
        </div>
     </div>
    )
}

export default Navbar1;

