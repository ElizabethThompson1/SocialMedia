import "./topBar.css"
import {Search, Person, Chat, Notifications}from "@material-ui/icons"

export default function topBar(){
    return(
        <div className="topbarContainer">
            <div className= "topbarLeft">
                <span className="logo">Sports Social Media</span>
            </div>
            <div className= "topbarCenter">
                <div className="searchbar">
                    <Search className="searchicon"/>
                    <input placeholder="Search for friends, videos, or posts" className="Search" />
                </div>
            </div>
            <div className= "topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbaricons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/Assets/Person/pic.jpeg" alt="" className= "topbarImg"/>
            </div>
            
        </div>
    );
}
