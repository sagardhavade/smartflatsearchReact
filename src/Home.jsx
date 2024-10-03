import React, { useEffect } from "react";
import Header from "./component/Header.jsx";
import Hero from "./component/Hero";
import About from "./component/Home/About";
import Feature from "./component/Home/Feature";
import LocationSection from "./component/Home/LocationSection.jsx";
import PropertyType from "./component/Home/PropertyType.jsx";
import PropertyType2 from "./component/Home/PropertyType2.jsx";
import Counter from "./component/Home/Counter.jsx";
import CallAction from "./component/Home/CallAction.jsx";
import Testimonial from "./component/Home/Testimonial.jsx";
import Card from "./component/Home/Card.jsx";
import Video from "./component/Home/Video.jsx";
import Blog from "./component/Blog.jsx";
import Brand from "./component/Brand.jsx";
import Agents from "./component/Home/Agents.jsx";
import Footer from "./component/Footer.jsx";

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${process.env.PUBLIC_URL}/assets/js/script.js`; // Updated to use PUBLIC_URL
    script.async = true; 
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Runs once, after the initial render
  let resizing = false;

  const resizeObserver = new ResizeObserver((entries) => {
    if (resizing) return; // Prevent further execution if already resizing
    resizing = true;
  
    for (let entry of entries) {
      // Perform necessary actions here without causing further layout changes
      console.log(entry.contentRect);
    }
  
    resizing = false; // Reset the flag
  });
  
  return (
    <>
      <Header />
      {/* <main className="main__content_wrapper"> */}
      <Hero />
      <About />
      <Feature />
      <LocationSection />
      <PropertyType />
      <PropertyType2 />
      <Counter />
      <CallAction />
      <Testimonial />
      <Card />
      <Video />
      <Blog />
      <Brand />
      <Agents />
      
      <Footer />
      {/* </main> */}
    </>
  );
};

export default Home;
