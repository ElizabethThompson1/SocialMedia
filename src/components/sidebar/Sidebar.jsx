import "./sidebar.css"
import {RssFeed, People, Comment, PersonAdd} from "@material-ui/icons"
//import { Feed } from "@mui/icons-material";

 function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className= "sidebarListItem">
                     <RssFeed className="sidebarIcon" />
                     <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className= "sidebarListItem">
                     <People className="sidebarIcon" />
                     <span className="sidebarListItemText">Friends</span>
                    </li>
                    <li className= "sidebarListItem">
                     <Comment className="sidebarIcon" />
                     <span className="sidebarListItemText">Comments</span>
                    </li>
                    <li className= "sidebarListItem">
                     <PersonAdd className="sidebarIcon" />
                     <span className="sidebarListItemText">FriendRequests</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="" alt=""/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;