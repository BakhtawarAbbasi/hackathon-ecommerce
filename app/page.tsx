import React from 'react';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';

const Home: React.FC = () => {
  return (
    <div>
      <TopNavbar/>
      <Navbar/>
      <ProductList />
    </div>
  );
};

export default Home;
