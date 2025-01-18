import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import TopNavbar from "../components/TopNavbar";

export default function ProductPage() {
    return(
      <>
      <TopNavbar/>
      <Navbar/>
        <ProductList/>
      </> 
    );
  }
