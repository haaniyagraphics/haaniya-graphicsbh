import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Testimonial = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ur1rlzr', 'template_x5p1dz4', form.current, 'CtvSZoTb8-dUOjwXD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div class="ceo-cod-area" id="our-purpose">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12 ">
                        <div class="consen-section-title">
                            <h2>  </h2>
                            <h2> Hello <span> Dears! </span></h2>
                            <div class="lines style-three pt-20 pb-10">
                                <div class="line"></div>
                            </div>
                                <p class="about-text"> “We help Our Customers to Build/Renew Their Business Function to Create Brandable Organizations” </p>
                                <p class="about-text2"></p>
                         </div>
                        <div class="dreamit-ceo-title">
                            <h4> Shanavas Parappan </h4><span>Director &amp; Founder</span>
                        </div>
                                    
                        <div class="about-button contact-us">
                            <div class="contact_from_box">
                                <div class="contact_title pb-4">
                                      <h3>Write your Review here!</h3>
                                 </div>

                                <form id="dreamit-form" ref={form} onSubmit={sendEmail}>

                                 <div class="row">
                                      <div class="col-lg-6">
                                            <div class="form_box mb-30">
                                                 <input type="text" name="user_name" placeholder="Name" />
                                          </div>
                                        </div>
                                         <div class="col-lg-6">
                                            <div class="form_box mb-30">
                                                <input type="email" name="user_email" placeholder="Email" />
                                            </div>
                                        </div>
	                                   <div class="col-lg-12">
	                                        <div class="form_box mb-30">
	                                        	<textarea name="message" id="message" cols="30" rows="10" placeholder="Writing something about us" />
	                                        </div>
	                                         <div class="quote_button">
		                                           <button class="btn" type="submit">Send</button>
	                                         </div>
	                                     </div>
	                                </div>
                                </form>
                            <div id="status"></div>
                        </div>
                            <form ref={form} onSubmit={sendEmail}>
                                        <label>Name</label>
                                         <input type="text" name="user_name" />
                                         <label>Email</label>
                                         <input type="email" name="user_email" />
                                         <label>Review</label>
                                         <textarea name="message" />
                                        <input type="submit" value="Send" />
                         </form>
                        </div>
                    </div>
                    
                    <div class="col-lg-6 col-md-12">
                        <div class="dreamit-about-thumb1">
                            <img src="./about2.png" />
                        </div>
                        
                        <div class="about-shape-box">
                            <div class="about-shape-thumb bounce-animate">
                                <img src="./ab-shape.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial