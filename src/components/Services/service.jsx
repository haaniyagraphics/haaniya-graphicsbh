
import React, { useState } from "react";

import $ from 'jquery'


const Services = () => {
    
    const [toggle, setToggle] = useState(false)
    const [toggleOne, setOneToggle] = useState(false)
    const [toggleTwo, setTwoToggle] = useState(false)
    const [toggleThree, setThreeToggle] = useState(false)
    const [toggleFour, setFourToggle] = useState(false)
    const [toggleFive, setFiveToggle] = useState(false)

        //alert("Great Shot!");
    return (
<div class="service-area" id="service">
    <div class="container">
        <div class="row align-items-center mb-90">
            <div class="col-lg-7 col-md-8 pl-0">
                <div class="consen-section-title mobile-center">
                    <h2>What We <span>Do </span></h2>
                </div>
            </div>
            <div class="col-lg-5 col-md-4">
                <div class="consen-button text-right">
                    <a href="/#service">Our Services</a>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-lg-4 col-sm-6 p-0">
                <div class="dreamit-service-box">
                    <div class="service-box-inner">
                        <div class="em-service-icon">
                            <img src="./haaniya-graphic-design.png" />
                        </div>
                         <div class="em-service-title">
                            <h2> Graphic Design </h2>
                        </div>
                        <div class="service-number">
                            <h1> 01 </h1>
                        </div>
                        <div class="em-service-text">
                            <p style={{ maxHeight: toggle ? '100vh' : '' }}> Graphic design is a creative process that combines art and technology to communicate ideas. It involves the use of visual elements such as typography, images, 
                                colors, shapes, and layouts to create effective and attractive designs for various purposes.
                                 { toggle && (<p> Graphic designers can work on a variety of projects, such as logos, websites, posters, flyers, brochures, magazines, books, packaging, signage, and more.</p> )}
                            </p>
                               
                       
                       </div>
                        <div class="service-button">
                        <a href="#na" onClick={() => setToggle(!toggle)}> Read More <i class="bi bi-plus"> </i> </a>
                         </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-sm-6 p-0">
                <div class="dreamit-service-box">
                    <div class="service-box-inner">
                        <div class="em-service-icon">
                            <img src="./haaniya-social-media-marketing.png" />
                        </div>
                        <div class="em-service-title">
                            <h2> Social Media Marketing </h2>
                        </div>
                        <div class="service-number">
                            <h1> 02 </h1>
                        </div>
                        <div class="em-service-text">
                            <p style={{ maxHeight: toggleOne ? '100vh' : '' }}>  We are offering a wide range of digital marketing solutions dedicated to our client's brands. 
                                Do you have specific goals in mind you want help with? 
                                { toggleOne && (<p>We help you consider outsourcing some of digital marketing such as SEO,
                                Email Marketing, Social Media Marketing,Social Media Promotions,Sponsor Ads and more </p>) } </p>
                        </div>
                        <div class="service-button">
                            <a href="#na" onClick={() => setOneToggle(!toggleOne)}> Read More<i class="bi bi-plus"> </i> </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-sm-6 p-0">
                <div class="dreamit-service-box">
                    <div class="service-box-inner">
                            <div class="em-service-icon">
                                <img src="./haaniya-branding.png" />
                            </div>
                            <div class="em-service-title">
                                <h2> Branding </h2>
                            </div>
                            <div class="service-number">
                                <h1> 03 </h1>
                            </div>
                            <div class="em-service-text">
                                 <p style={{ maxHeight: toggleTwo ? '100vh' : '' }}>Every Business should have a Unique story behind thier brand identity mark. We help in building brand image and values for your business. 
                                 { toggleTwo && (<p>We offer comprehensive brand and design services that include research,
                                     brand strategy and positioning, visual identity creation, rebranding and web design.</p>) } </p>
                            </div>
                            <div class="service-button">
                                <a href="#na" onClick={() => setTwoToggle(!toggleTwo)}> Read More <i class="bi bi-plus"> </i> </a>
                            </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-4 col-sm-6 p-0">
                <div class="dreamit-service-box">
                    <div class="service-box-inner">
                        <div class="em-service-icon">
                            <img src="./haarniya-autocad.png" />
                         </div>
                        <div class="em-service-title">
                            <h2> AUTOCAD </h2>
                         </div>
                        <div class="service-number">
                            <h1> 04 </h1></div>
                            <div class="em-service-text">
                                <p style={{ maxHeight: toggleThree ? '100vh' : '' }}> Our experienced technicians provide AutoCAD drafting services including 2D drafting of residential and commercial projects.
                                     We create and transform existing drawings,
                                     { toggleThree && (<p>Architecture Plans,Space Planing,Shop Drawing,Alteration,Renovation plan and more.</p>)}
                                     </p>
                            </div>
                        <div class="service-button">
                                 <a href="#na" onClick={() => setThreeToggle(!toggleThree)}> Read More <i class="bi bi-plus"> </i> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 p-0">
                <div class="dreamit-service-box">
                    <div class="service-box-inner">
                        <div class="em-service-icon">
                            <img src="./haaniya-printing.png" />
                        </div>
                         <div class="em-service-title">
                            <h2> Printing</h2>
                        </div>
                        <div class="service-number">
                            <h1> 05 </h1>
                        </div>
                        <div class="em-service-text">
                            <p style={{ maxHeight: toggleFour ? '100vh' : '' }}>Printing Services: Printing services are a convenient and cost-effective way to create and order various printed products online.
                                 Whether you need to print documents, photos, flyers, posters, brochures, banners, stickers, labels, cards, invitations, calendars, mugs, t-shirts, or any other custom product, you can find the best printing service for your needs here. 
                                 { toggleFour && (<p>You can choose from a variety of printing options, such as paper type, size, color, finish, binding, and more. 
                                  Printing services offer high-quality prints at competitive prices and fast delivery.</p>) }
                                  </p>
                        </div>
                        <div class="service-button">
                                <a href="#na" onClick={() => setFourToggle(!toggleFour)}> Read More <i class="bi bi-plus"> </i> </a>
                         </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 p-0">
                <div class="dreamit-service-box">
                    <div class="service-box-inner">
                        <div class="em-service-icon">
                            <img src="./haaniya-mobile-app-website.png" />
                        </div>
                         <div class="em-service-title">
                            <h2>Websites & Mobile App</h2>
                        </div>
                        <div class="service-number">
                            <h1> 06 </h1>
                        </div>
                        <div class="em-service-text">
                            <p style={{ maxHeight: toggleFive ? '100vh' : '' }}>We will help you build your website and app in quick, better and cost-effective.
                                Your idea is a more valuable asset to your company. You will convert your idea into the latest industry-standard mobile app and website, 
                                { toggleFive && (<p> with the help of us. Our professional team will help you develop and deliver your website and app in a quick, better, cost-effective and on-time.</p> )}
                            </p>
                        </div>
                        <div class="service-button">
                            <a href="#na" onClick={() => setFiveToggle(!toggleFive)}> Read More<i class="bi bi-plus"> </i> </a>
                         </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
</div>
   )
}

export default Services