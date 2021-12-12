// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
// import "./home.css"
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Like from "../../components/Likes/Likes"


function Home() {
  const [userProfile, setUserProfile] = useState();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [like, setlike] = useState(0);

  const [newPost, setNewPost] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let registerPost = {
      desc: desc,
      img: img,
      like: like,
    };
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };
    await axios
      .post("http://localhost:5000/api/posts/", registerPost, configObject)
      .then((res) => setUserProfile(res.data));
  };

  const getCurrentUser = async () => {
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };
    await axios
      .get(`http://localhost:5000/api/users/current`, configObject)
      .then((res) => setUserProfile(res.data));
  };


  useEffect(() => {
    getCurrentUser();
  }, [newPost]);


  return (
    <div>
      <h1> {userProfile && userProfile.name}</h1>
      <div className="Comment">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="card">
            <div className="card-header">Post</div>
            <div class="card-body">
              <blockquote className="blockquote mb-0">
                <div className="form-group" size="lg" controlId="name">
                  <label className="form-label">
                    post
                    <input
                      autoFocus
                      type="desc"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                    <label>
                    Image
                    <div>
                    post
                    <input
                      autoFocus
                      type="file"
                      value={img}
                      onChange={(e) => setImg(e.target.value)}
                    />
                      <img src={setImg}/>
                    </div>
                    </label>
                    <button type="submit">post</button>
                    
                  </label>
                </div>
                
              </blockquote>
            </div>
          </div>
        </form>
      </div>
      {/* Pascal helped with the optional chaining */}
      <ul>
        {userProfile &&
          userProfile.posts?.map((post, i) => (
            <>
              <div className="card w-75">
                <div className="cardcomment" >
                <li key={i}>Comment:  {post.desc}</li>
              <ul>
                  <li key={i}>Image{post.img}</li>
              </ul>
              <ul>
                <li key={i}>{post.createdAt}</li>
              </ul>
                </div>
              </div>
            </>
          ))}
      </ul>
      
    </div>
  );
}
export default Home;
