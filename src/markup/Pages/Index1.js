import React, {Component} from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Link} from 'react-router-dom';
import Slider from './../Element/Slider';

//Images	
var img1 = require('./../../images/background/bg5.jpg');
var serblog1 = require('./../../images/our-services/cone.jpg');
var serblog2 = require('./../../images/our-services/s-l1600.png');
var serblog3 = require('./../../images/our-services/pic31.webp');
var serblog4 = require('./../../images/our-services/pic4.webp');
var img2 = require('./../../images/background/bg1.jpg');
var img3 = require('./../../images/background/bg5.jpg');
var img4 = require('./../../images/background/bg4.jpg');


const blogNews = [
	{
		image: require('./../../images/blog/grid/pic1.jpg'),
		title: 'Understand The Background Of Bakery Now.',
	},
	{
		image: require('./../../images/blog/grid/pic2.jpg'),
		title: 'Seven Reliable Sources To Learn About Bakery.',
	},
	{
		image: require('./../../images/blog/grid/pic3.jpg'),
		title: 'Ten Places That You Can Find Bakery.',
	},
]


class Index1 extends Component{
	render(){
		return(
			<>
				<Header />
			
				<div className="page-content bg-white">
					<div className="content-block">
						<Slider />
						<div className="section-full content-inner-3" style={{backgroundImage:"url(" + img1 + ")",  backgroundSize:"100%" }}>
							<div className="container">
								<div className="row service-area1 justify-content-center">
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog1 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Sundae</h2>
												<p>Vanilla Icre-cream with toppings</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/menu')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog2 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Cones</h2>
												<p>Vanilla Icre-cream with toppings on a Sugar Cone</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/menu')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="section-head mb-0 text-center">
									<div className="icon-bx icon-bx-xl">
										<img src={require('./../../images/cake1.jpg')} alt="" />
									</div>
									<h3 className="text-primary">It’s a party and you’re invited</h3>
									<p className="main-text">Join Italian Frosty(<strong>Mc<sup>2</sup></strong>) to earn Gold level benefits like free ice-creams, exclusive discounts, access to secret menu and more.</p>
									<p>Exclusive deals on Cakes, delivered straight to your inbox <Link to={''}>Join Now</Link></p>
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

export default Index1;