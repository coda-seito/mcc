import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var bgfoter = require('./../../images/background/bg2.jpg');	


class Footer extends Component{
	
	render(){
		return(
			<footer className="site-footer " style={{backgroundImage: "url(" + bgfoter + ")", backgroundSize: 'cover'}} >
				
				<div className="footer-top bg-line-top">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_getintuch">
									<h5 className="footer-title text-white">Contact Us</h5>
									<ul>
										<li>
											<i className="fa fa-map-marker"></i> 
											<p>Rajiv Gandhi Salai Street, near RTS Food Street, Navalur</p>
										</li>
										<li>
											<i className="fa fa-mobile"></i> 
											<p>(+91) 7845963618</p>
										</li>
										<li>
											<i className="fa fa-envelope"></i>
											<p>mass.cakecafe@gmail.com</p>
										</li>
										<li>
											<i className="fa fa-globe"></i>
											<p>www.masscakecafe.com</p>
										</li>
										<li>
											<i className="fa fa-instagram"></i>
											<p>@mass.cakecafe</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_services border-0">
								   <h4 className="footer-title">Quick Links</h4>
									<ul className="list-2">
										<li><Link to={'/'}>Home</Link></li>
										<li><Link to={'/about-1'}>About</Link></li>
										<li><Link to={'/menu'}>Our Menu</Link></li>
										<li><Link to={'/shop'}>Shop</Link></li>
										<li><Link to={'/contact'}>Contact</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget border-0">
								   <h4 className="footer-title">Working Hours</h4>
									<ul className="work-hour-list">
										<li>
											<span className="day"><span>Monday to Friday</span></span> 
											<span className="timing">10AM - 12AM</span>
										</li>
										<li>
											<span className="day"><span>Saturday & Sunday</span></span>
											<span className="timing">9AM - 12AM</span>
										</li>
										<li>
											<span className="day"><span>Phone Order</span></span>
											<span className="timing">24 Hours</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 text-left"> <span>Copyright © 2023 EC2 Software, Los Angeles. All rights reserved.</span> </div>
							<div className="col-lg-6 col-md-6 text-right"> 
								<div className="widget-link"> 
									<ul>
										<li><Link to={'about-1'}>About Us</Link></li>
										<li><Link to={'faq'}>Faq</Link></li> 
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			
		)
		
	}
}

export default Footer;