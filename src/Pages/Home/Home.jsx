import TopBar from "../../components/Topbar/topBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"


 function Home(){
    return(
     <>
        <TopBar />
        <div className="homecontainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
     </>
    );
}
export default Home;