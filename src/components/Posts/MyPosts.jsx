import "./post.css";
import {MoreVert} from "@material-ui/icons";
import {useState} from "react";
import {Users} from "../../dummyData";

export default function post({ post }){
    const[like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
}

}
return (
         <div className="post">
                           <div className="postWrapper">
                           <div className= "postTop">
                              <div className= "postTopLeft">
                              <img
                          className="postProfileimg" 
                                  src={User.filter((u) => u.id === post?.userId)[0].profilePicture}
                                alt=""
                                 />
                                     <span className="postUsername">
                                        {User.filter((u) => u.id === post?.userId) [0].username}</span>
                                        </div>
                                      <div className="postTopRight">
                                                    <MoreVert/>
                                                    </div>
                                                    </div>
                                                <div className="postCenter">
                                                    <span className="postText"></span>
                                                    <img className="postImg" src={PF+post.photo} alt=""/>
                                                    </div>
                                                    <div className="postBottom">
                                                        <div className="postBottomLeft">
                                                            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt=""/>
                                    <img className="postLikeCounter">{like} people like it</img>
                                    </div><div className="postBottomRight">
                                        </div> 

                                    </div>
                                                </div>
                </div>

)