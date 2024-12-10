import Login from "../components/Login";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";

export default function LoginPage() {
    return(
      <>
      <TopNavbar/>
      <Navbar/>
        <Login/>
      </>
      
    );
  }
