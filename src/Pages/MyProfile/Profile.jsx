import"./myProfile.css"
import Topbar from "../../components/topbar/topBar"
import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "./Feed/feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect,useState } from "react";
import axios from "axios"

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser] = useState({});

useEffect(() => {
    const fetcherUser = async () => {
        const res = await axios.get(`/user?username=jhon`);
        setUser(res.data);
    };
    fetcherUser();
}, []);

    return(
        <>
        <Topbar/>
            <div className="profile">
                <Sidebar />
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img className="profileCoverImg"
                                 src={user.coverImg || PF+"person/noCover.png"}
                                 alt=""
                                 />
                                 <img className="profileUserImg"
                                 src={user.profilePicture || PF+`person/noAvatar.jpg`}
                                 alt=""
                                 />
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            </div>
                        </div>
                    </div>
            </div>
            </>
    )
}