import React, { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState(false)

    return (   
        <>
    <section>
            <div id="sticky-header" className="consen_nav_manu header____">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="logo">
                            <a className="logo_img" title="consen" href="/">
                                <img src="./haaniya-logo-w.png" alt="logo" />
                                    </a>
                                    <a className="main_sticky" title="consen" href="/">
                                        <img src="./haaniya-logo-w.png" alt="logo" />
                                    </a>
                            </div>
                        </div>
                        <div className="col-lg-9 pl-0 pr-0">
                            <nav className="consen_menu">
                                <ul className="nav_scroll"> 
                                    <li><a href="#">Home</a></li>
                                    <li><a href="/#service">Our Services</a></li>
                                    <li><a href="/#about">About Us</a></li> 
                                    <li><a href="/#our-purpose">Hello! </a></li> 
                                    <li><a href="/#contact">Contact Us</a></li>
                                </ul>
                            </nav>
                         </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-area d-sm-block d-md-block d-lg-none header____">
                <div className="mobile-menu mean-container">
                    <div class="mean-bar" >
                        <a href="#nav" className="meanmenu-reveal" onClick={() => setToggle(!toggle)}>
                             <span></span> 
                            <span></span> 
                            <span></span>
                        </a>
				    	<nav className="mean-nav" style={{ display: toggle ? 'block' : 'none' }}>
							<ul className="nav_scroll">
									<li><a href="#">Home</a></li>
                                    <li><a href="/#service">Our Services</a></li>
                                    <li><a href="/#about">About Us</a></li> 
                                    <li><a href="/#our-purpose">Hello! </a></li> 
                                    <li><a href="/#contact">Contact Us</a></li>
							</ul>
					    </nav>
                    </div>
                    <div className="mean-push">
                    </div>
                 </div>
            </div>
</section>
            
            </>

    )
}

export default Header