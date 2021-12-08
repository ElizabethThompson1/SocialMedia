import "./rightbar.css";
import Online from "../Online/Online";


export default function Rightbar({profile}){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = () => {
        return(
            <>
            <div className="birthdayContainer">
                <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b> Pola Foster</b> and <b> 3 other friends</b> have a birthday today.
                    </span>
            </div>
            <img className="rightbarAd" src="assets/ad.png" alt=""/>
            <span className="rightbarTitile"> Online Friends </span>
            <u1 className="rightbarFriendList">
                {User.map((u) => (
                    <Online key = {u.id} user = {u} />
                        ))}
                 </u1>
            </>
        );
    }
}



// const ProfileRightbar = () => {
//     return(
//       <>
//             <h4 className="rightbarTitle">User information</h4>
//             <div className="rightbarInfo">
//                 <div className="rightbarInfoItem">
//                     <span className="rightbarInfoKey">City:</span>
//                     <span className="rightbarInfoValue">{user.from}</span>
//                 </div>
//                 <div className="rightbarInfoItem">
//                     <span className="rightbarInfoKey">From:</span> 
//                     <span className="rightbarInfoValue">{user.from}</span>
//             </div>
//             <div className="rightbarInfoItem">
//                 <span className="rightbarInfoKey">Relationship:</span>
//                 <span className="rightbarInfoValue">{user.relationship ===1 ? "Single" : user.relationship ===1 ? "Married" :"-"} </span>
//         </>
//     )
// }
