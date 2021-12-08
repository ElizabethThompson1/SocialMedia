import topBar from "../../components/topbar/topBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"


 function Home(){
    return(
     <>
        <topBar />
        <div className="homecontainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
     </>
    );
}
export default Home;