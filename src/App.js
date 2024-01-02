// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import Header from './components/header/Header';
import Center from './components/center/Center';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';
import Categories from './components/categories/Categories';
import Catagories1 from './components/categories/Catagories1';
import Carousel1 from './components/carousel/Carousel1';
import Navbar2 from './components/navbar/Navbar2';
import { myInterceptor1 } from './utils/MyInterceptors';

function App() {
  return (
   <div>
    {/* myInterceptor1(); */}
    {/* <Header /> */}
    <Navbar />
    {/* <Navbar2/> */}
    {/* <Catagories1/> */}
    {/* <Categories /> 
     <Carousel /> */}
    {/* <Carousel1/> */}
    <Center />
    <Footer />
    
   </div>
  );
}

export default App;
