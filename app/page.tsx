import React from 'react';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';
import HomePage from './components/HomePage';
const Home: React.FC = () => {
  return (
    <div>
      <TopNavbar/>
      <Navbar/>
      <HomePage/>
    </div>
  );
};

export default Home;
