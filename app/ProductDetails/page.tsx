import Navbar from "../components/Navbar";
import ProductDetails from "../components/ProductDetails";
import TopNavbar from "../components/TopNavbar";

export default function ProductDetail() {
    return(
      <>
      <TopNavbar/>
      <Navbar/>
        <ProductDetails/>
      </>
      
    );
  }
