import React, { useEffect, useState } from 'react';
import "./post.css";
import profile from "../image/profile.png"
import Image1 from "../image/image1.jpg"
import likeIcon from "../image/like.jpeg"
import comment from "../image/massage.png"
import share from "../image/share.png"
import option from "../image/option.png"
import like2 from "../image/like2.jpeg"


export default function Postcointainer() {
    const [like, setLike] = useState(likeIcon);
    const [count, setCount] = useState(10);
    const [comments, setComments] = useState([]);
    const [commentwriting, setcommentwriting] = useState('');
    const [show, setshow] = useState(false);

    const handlelike = () => {
        if (like === likeIcon) {
            setLike(like2);
            setCount(count + 1);
        } else {
            setLike(likeIcon);
            setCount(count - 1);
        }
    }

    const addComment = () => {
        const comment = {
            "id": "74bhdfb3434",
            "username": "suman",
            "title": `${commentwriting}`,
        }
        setComments(comments.concat(comment));
    }


    const handlecomment = () => {
        addComment();
    }
    console.log(comments)

    const handleshow = () =>{
        if(show === false){
            setshow(true)
        }
        else{
            setshow(false)
        }
    }

    return (
        <div className='postcontainer'>
            <div className='subpostcointainer'>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <img src={`${profile}`} className='postimg' alt='' />
                        <div>
                            <p style={{ marginLeft: '5px', textAlign: 'start' }}>Suman</p>
                            <p style={{ fontSize: '11px', textAlign: 'start', marginLeft: 5, marginTop: -13, color: '#aaa' }}>Following by Suman</p>
                        </div>
                        <img src={`${option}`} style={{ marginLeft: 330 }} className='optionicon' alt='' />
                    </div>
                    <p style={{ textAlign: 'start', width: '97', marginLeft: 10, marginTop: 0 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry....
                    </p>
                    <img src={`${Image1}`} className='postimgs' alt='' />
                    <div style={{ display: 'flex', }}>
                        <div style={{ display: 'flex', marginLeft: '10px', }}>
                            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                <img src={`${like}`} onClick={handlelike} className='iconforpost' alt='' />
                                <p style={{ marginLeft: '6px' }}>{count} likes</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 20, cursor: 'pointer' }}>
                                <img src={`${comment}`} className='iconforpost' onClick={handleshow} alt='' />
                                <p style={{ marginLeft: '6px' }}>100k Comments</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 130, cursor: 'pointer' }}>
                            <img src={`${share}`} className='iconforpost' alt='' />
                            <p style={{ marginLeft: '6px' }}>share</p>
                        </div>
                    </div>
                    {show === true ?  
                    <div style={{padding:"10px",}}> 
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={`${profile}`} className='postimg' alt='' />
                        {/* <p style={{marginLeft:'6px'}}>Suman</p> */}
                        <input type='text' className='commentinput' placeholder='Wright Your Thought' onChange={(e) => setcommentwriting(e.target.value)} />
                        <button  className='addcommentbtn' onClick={handlecomment}>post</button>
                    </div>
                    {comments.map((item) => {
                        <div style={{ alignItems:'center',}}>
                            <div  style={{display:'flax', alignItems:'center',}}>
                            <img src={`${profile}`} className='postimg' alt='' />
                            <p style={{ marginLeft: '6px' , fontSize:"18",marginTop:6, }}>{item.username}</p>
                            </div>
                            <p style={{ marginLeft: '55px' , alignItems:'start' , marginTop:-16 }}> {item.title}</p>
                            <p style={{ marginLeft: '55px' , alignItems:'start' , marginTop:-10 , color:"#aaa",fontSize:11}}> Reply </p>

                        </div>
                    })}
                    </div> : ''}
                   
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}