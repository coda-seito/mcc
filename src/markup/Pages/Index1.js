import React, {Component} from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';
import OurPartners from './../Element/OurPartners';
import Slider from './../Element/Slider';
import Accord from './../Element/Accord';
	
//Images	
var img1 = require('./../../images/background/bg5.jpg');
var serblog1 = require('./../../images/our-services/pic1.jpg');
var serblog2 = require('./../../images/our-services/pic2.jpg');
var serblog3 = require('./../../images/our-services/pic31.jpg');
var serblog4 = require('./../../images/our-services/pic4.jpg');
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
								<div className="row service-area1">
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog3 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Fresh Cakes</h2>
												<p>Delicious Cake Experiences</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/menu?tab=cakes')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog1 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Savouries</h2>
												<p>Puffs & Sandwiches</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/shop-product-details')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog2 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Beverages</h2>
												<p>Milk shakes & Bubble tea</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/shop-product-details')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog4 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Sweet Bites</h2>
												<p>Brownies & Swiss Rolls</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/shop-product-details')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
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
											<p className="main-text">Join Mass Cake Cafe(<strong>Mc<sup>2</sup></strong>) to earn Gold level benefits like free Cakes and food, exclusive discounts, access to secret menu and more.</p>
											<p>Exclusive deals on Cakes, delivered straight to your inbox <Link to={''}>Join Now</Link></p>
										</div>
									</div>
								</div>
							</div>
						</div>					
						<div className="section-full content-inner service-area2 bg-img-fix bg-line-top bg-line-bottom" style={{backgroundImage: "url(" + img4 + ")",  backgroundSize: "cover" }}>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head text-center">
											<h2 className="text-white">What Do We Offer For You?</h2>
											<p className="text-bold">We offer a wide range of services and products to meet your needs. Whether you're looking for a quick snack, a custom cake for a special occasion, or catering services for a corporate event, we've got you covered.</p>
											<div className="dlab-separator style1 bg-primary"></div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-4 m-b30">
										<img src={require('./../../images/about/pic1.jpg')} className="img-cover radius-sm" alt="" />
									</div>
									<div className="col-lg-8">
										<div className="row p-l30">
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<img src={require('./../../images/icons/service-icon/icon2.png')} alt="" />
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Pancakes</h5>
														<p>Lorem Ipsum is dummy</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<img src={require('./../../images/icons/service-icon/icon3.png')} alt="" />
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Muffin</h5>
														<p>Lorem Ipsum is dummy</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<img src={require('./../../images/icons/service-icon/icon4.png')} alt="" />
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Pumpkin cakes</h5>
														<p>Lorem Ipsum is dummy</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<img src={require('./../../images/icons/service-icon/icon5.png')} alt="" />
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Pumpkin Cupcakes</h5>
														<p>Lorem Ipsum is dummy</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<img src={require('./../../images/icons/service-icon/icon5.png')} alt="" />
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Cake Services</h5>
														<p>Lorem Ipsum is dummy</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx"> 
														<img src={require('./../../images/icons/service-icon/icon1.png')} alt="" />
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Birthday Cake</h5>
														<p>Lorem Ipsum is dummy</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full bg-white" style={{backgroundImage:"url(" + img3 + ")", backgroundSize:"100%" }}>
							<div className="container content-inner">
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head text-center">
											<div className="icon-bx icon-bx-xl">
												<img src={require('./../../images/cake1.jpg')} alt="" />
											</div>
											<h3>We Are Professional at Our Skills</h3>
											<p>More than 2000+ customers trusted us</p>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row m-lr0 about-area1">
									<div className="col-lg-6 p-lr0">
										<img className="img-cover" src={require('./../../images/about/pic3-1.jpg')} alt="" />
									</div>
									<div className="col-lg-6 p-lr0 d-flex align-items-center text-center">
										<div className="about-bx">
											<div className="section-head text-center text-white">
												<h4 className="text-white">Limited Time Offer</h4>
												<p>Wedding Cake Sale !</p>
												<div className="icon-bx">
													<img src={require('./../../images/icons/service-icon/icon2.png')} alt="" />
												</div>
											</div>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
											<Link to={'about-1'} className="btn-secondry white btnhover btn-md"><i className="fa fa-cart"></i>GET NOW</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="container content-inner">
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head text-center">
											<div className="icon-bx icon-bx-xl">
												<img src={require('./../../images/cake1.jpg')} alt="" />
											</div>
											<h3>From The Blog</h3>
											<p>Latest news and updates</p>
										</div>
									</div>
								</div>
								<div className="row">
									{blogNews.map((item,index) =>(
									
										<div className="col-lg-4 col-md-6" key={index}>
											<div className="blog-post blog-grid blog-rounded" >
												<div className="dlab-post-media dlab-img-effect"> 
													<Link to={'/blog-single-sidebar'}><img src={item.image} alt="" /></Link> 
												</div>
												<div className="dlab-info p-a25">
													<div className="dlab-post-title">
														<h4 className="post-title"><Link to={'/blog-single-sidebar'}>{item.title}</Link></h4>
													</div>
													<div className="dlab-post-meta">
														<ul>
															<li className="post-folder">
																<i className="fa fa-folder-open-o"></i> 
																<Link to={''}>Cake</Link>,  
																<Link to={''}> Biscuits</Link> 
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									))}
									
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