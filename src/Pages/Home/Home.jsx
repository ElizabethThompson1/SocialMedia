//  import TopBar from "../../components/Topbar/topBar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
// import "./home.css"

 function Home(){
    
   async function handleSubmit(event) {
      event.preventDefault();
      let response = await axios.post("http://localhost:5000/api/users/login",{
       email: email,
       password: password
       });
       console.log(response.data)
       // Save token in local storage and refresh page
       localStorage.setItem('token', response.data);
       window.location = '/';
    }
 


    return(
     <div>
        <h1>Profile</h1>
    </div>

    );
}
export default Home;