import type { NextPage } from 'next';
import CartImage from '../components/CartImage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDetails from './CartDetails';
import FullWidthImage from './FullWidthImage';
import ProductSlider from './ProductSlider';

const Cart: NextPage = () => {
  return (
    <div>
      <div className="container mx-auto px-8 pl-2 py-8 md:flex">
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {[
            '/cart-item2.png',
            '/cart-item3.png',
            '/cart-item4.png',
            '/cart-item5.png',
            '/cart-item6.png',
            '/cart-item7.png',
            '/cart-item8.png',
            '/cart-item9.png',
            '/cart-item10.png',
            '/cart-item11.png',
            '/cart-item12.png',
            '/cart-item13.png',
          ].map((src, index) => (
            <CartImage key={index} src={src} alt={`Nike Air Max 97 SE ${index + 1}`} />
          ))}
        </div>
        <div className="md:w-1/2 ml-7">
          <CartDetails />
        </div>

      </div>
      <FullWidthImage src="/bg.png" alt="Nike Air Max 97 SE" topText="Explore the Nike Air Max 97 SE Men's Shoes." bottomText="Originally designed for performance running, the full-length Max Air unit adds soft cushioning." />
      <FullWidthImage src="/bg2.png" alt="Nike Air Max 97 SE 2" topText="" bottomText="The suede and synthetic leather upper with mesh underlays adds breathability and durability." />
      <FullWidthImage src="/bg-3.png" alt="Nike Air Max 97 SE 3" topText="" bottomText="Hidden lacing system was a first of its kind and delivers a streamlined look." />
      <div className="container mx-auto px-4 py-8"> <ProductSlider /> </div>
    </div>
  );
};

export default Cart;
