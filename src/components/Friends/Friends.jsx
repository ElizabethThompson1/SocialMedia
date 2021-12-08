import "./closeFriends.css";


export default function friends({user}) {
    const PF = process.env
    return(
        <li className="sidebarFriend">
            <img className= "sidebarFriendImg" src={PF+user.profilePicture} alt=""/>
            <span className="sidebarFriend">{user.username}</span>
        </li>
    );
}