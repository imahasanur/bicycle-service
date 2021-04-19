import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';
import Review from '../Review/Review';
import Services from '../Services/Services';
import AllBikes from '../AllBikes/AllBikes';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <News></News>
      <AllBikes></AllBikes>
      <Review></Review>
      <Footer></Footer>
            
    </div>
  );
};

export default Home;