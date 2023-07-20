import Header from "./components/Header/header";
import Slider from "./components/Slider/slider";
import Services from "./components/Services/service";
import About from "./components/About/about";
import Testimonial from "./components/Testimonial/testimonial";
import Footer from "./components/Footer/footer";
import $ from 'jquery';
import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    $('.service-button button').on('click', function(){
      $('.em-service-text p').toggleClass('-expanded');
      
      if ($('.em-service-text p').hasClass('-expanded')) {
        $('.service-button button').html('Collapse Content');
      } else {
        $('.service-button button').html('Continue Reading');
      }
    });
  })
  return (
    <div className="App">
        <Header />
        <Slider />
        <Services />
        <About />
        <Testimonial />
        <Footer />
    </div>

  );
}

export default App;
