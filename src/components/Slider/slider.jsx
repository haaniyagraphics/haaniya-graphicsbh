import React from "react";
import "./slider.css";

const YellowComponentStyle = {
    color: '#f4ba00',
 }
 const GreenComponentStyle = {
    color: '#48a84f',
 }

 const BlueComponentStyle = {
    color: '#5086f7',
 }

const Slider = () => {
    return (
    
        <div class="slider-area d-flex align-items-center">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-6">
                    <div class="slider-content">
                        <h3> Excellent Design With</h3>
                        <h1> <span>HAANIYA</span></h1>
                        <h1> <span>G</span>
                             <span style={YellowComponentStyle}>r</span>
                             <span style={GreenComponentStyle}>a</span>
                             <span style={BlueComponentStyle}>p</span>
                             <span>h</span>
                             <span style={YellowComponentStyle}>i</span>
                             <span style={GreenComponentStyle}>c</span>
                             <span style={BlueComponentStyle}>s</span> 
                        </h1>
                        <p> If you are looking for a graphic design company that can help you with your design needs,
                             you have come to the right place. We are a team of professional and passionate graphic designers who have the skills, 
                             experience, and vision to bring your ideas to life. 
                             Whether you need a logo for your brand, a website for your business, a poster for your event, or anything in between, 
                             we can handle it. We will work with you closely to understand your goals, preferences, and expectations, 
                             and deliver high-quality designs that meet your standards and budget.</p>
                    </div>
                    <div class="lines pt-20 pb-40">
                            <div class="line">
                            </div>
                    </div>
                    <div class="banner-buttons">
                        <div class="slider-button">
                                 <a href="http://wa.me/97333244069" target="_blank"> Reach Us <i class="bi bi-whatsapp"></i> </a>
                        </div>
                        <div class="slider-contact-box">
                                <a class="contact-icon" href="#">
                                     <img src="./call.png" alt="call icon" /> 
                                </a>
                            <div class="contact-number">
                                    <h3><a href="tel:+97317694069">+973 1769 4069</a></h3>
                                    <h3><a href="tel:+97333244069">+973 3324 4069</a> </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 ">
                    <div class="slider-thumb">
                             <img src="./slide-img.png" />
                    </div>
                </div>
                         <div class="slider-shape">
                            <div class="slider-shape-thumb">
                                <img src="./Haaniya-shape-bg.png" />
                            </div>
                            <div class="slider-shape-thumb2">
                                    <img src="./hero-shape2.png" />
                            </div>
                           </div>
                        </div>
          </div>
      </div>
          )
        }
        
        export default Slider