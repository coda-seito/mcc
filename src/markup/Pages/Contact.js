import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import GoogleMaps from "simple-react-google-maps";
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var bgimg1 = require('./../../images/banner/bnr1.jpg');
var bgimg2 = require('./../../images/background/bg5.jpg');

class Contact extends Component{
	render(){
		const GOOG_ENV = process.env.REACT_APP_GOOG || "any-default-local-build_env";
		return(
			<>
			<Header />
			<div className="page-content bg-white">
				<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage: "url(" + bgimg1 + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Working hours</h1>
							<ul className="col-xl-6 mx-auto work-hour-list">
								<li>
									<span className="day"><span>Monday to Friday</span></span>
									<span className="timing">9AM - 12AM</span>
								</li>
								<li>
									<span className="day"><span>Saturday & Sunday</span></span>
									<span className="timing">12PM - 12AM</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="content-block">
					<div className="section-full content-inner-2 contact-form bg-white" style={{backgroundImage:"url(" +  bgimg2 + ")", backgroundSize:"100%" }}>
						<div className="container">
							<div className="row">
								<div className="col-xl-6 col-lg-6 col-md-6 d-flex m-md-b30 m-lg-b30">
									<div className="p-a30 border contact-area border-1 align-self-stretch radius-sm bg-white">
										<h3 className="m-b5">Quick Contact</h3>
										<p>If you have any questions simply use the following contact details.</p>
										<ul className="no-margin">
											<li className="icon-bx-wraper left m-b30">
												<div className="icon-bx-xs border-1 text-primary"> <Link to='/contact' className="icon-cell"><i className="ti-location-pin"></i></Link></div>
												<div className="icon-content">
													<h6 className="text-uppercase m-tb0 dlab-tilte">Address:</h6>
													<p>Rajiv Gandhi Salai Street, near RTS Food Street, Navalur, TN 600130</p>
												</div>
											</li>
											<li className="icon-bx-wraper left  m-b30">
												<div className="icon-bx-xs border-1 text-primary"> <Link to='/contact'
																										 onClick={() => window.location = 'mailto:yourmail@domain.com'} className="icon-cell"><i className="ti-email"></i></Link> </div>
												<div className="icon-content">
													<h6 className="text-uppercase m-tb0 dlab-tilte">Email:</h6>
													<p>mass.cakecafe@gmail.com</p>
												</div>
											</li>
											<li className="icon-bx-wraper left">
												<div className="icon-bx-xs border-1 text-primary"><a href={'tel:+917845963618'} className="icon-cell"><i className="ti-mobile"></i></a> </div>
												<div className="icon-content">
													<h6 className="text-uppercase m-tb0 dlab-tilte">PHONE</h6>
													<p><a href="tel:+917845963618">+91-7845963618</a></p>
												</div>
											</li>
										</ul>
										<div className="m-t20">
											<ul className="dlab-social-icon dlab-social-icon-lg">
												<li><Link to={''} className="fa fa-facebook bg-primary mr-1"></Link></li>
												<li><Link to={''} className="fa fa-twitter bg-primary mr-1"></Link></li>
												<li><Link to={''} className="fa fa-linkedin bg-primary mr-1"></Link></li>
												<li><Link to={''} className="fa fa-pinterest-p bg-primary mr-1"></Link></li>
												<li><Link to={''} className="fa fa-google-plus bg-primary "></Link></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 m-md-b30 m-lg-b30">
									<GoogleMaps
										apiKey={GOOG_ENV}
										style={{ height: "500px", width: "100%" }}
										zoom={19}
										center={{ lat: 12.848503075277147, lng: 80.22634045890878 }}
										markers={{ lat: 12.848503075277147, lng: 80.22634045890878 }} //optional
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			</>
		)
	}	
}


export default Contact;