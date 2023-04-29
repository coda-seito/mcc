import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import OurPartners from './../Element/OurPartners';
import CountUp from 'react-countup';

var img1 = require('./../../images/banner/bnr1.jpg');
var img2 = require('./../../images/background/bg1.jpg');
var img3 = require('./../../images/background/bg5.jpg');
var img4 = require('./../../images/background/bg3.jpg');


const teamInfo = [
	{
		image: require('./../../images/our-team/member1.jpg'), 	
		name :	'Nashid Martines',
		post : 	'Founder',
	},
	{
		image: require('./../../images/our-team/member2.jpg'), 	
		name :	'Konne Backfiled',
		post : 	'Sous Chef',
	},
	{
		image: require('./../../images/our-team/member3.jpg'), 	
		name :	'Valentino Morose',
		post : 	'Ceo & Founder',
	},
	{
		image: require('./../../images/our-team/member4.jpg'), 	
		name :	'Hackson Willingham',
		post : 	'Master Chef',
	},
]	
	
class About extends Component{

	render(){
		return(
			<>
			<Header />
		
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + img1 + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">About Us</h1>
						</div>
					</div>
				</div>
				
				<div className="content-block">
					
					<div className="section-full bg-white content-inner" style={{backgroundImage:"url(" + img3 + ")", backgroundSize:"100%" }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-head text-center">
										<div className="icon-bx icon-bx-xl">
											<img src={require('./../../images/cake1.jpg')} alt="" />
										</div>
										<h3>About Mass Cake Cafe</h3>
										<p className="text-justify">Mass Cake Cafe is a delightful and charming cake shop located in the bustling area of Navalur, Chennai. From cakes and baked goods to savory biryanis, our shop offers a wide variety of delicious treats and meals that cater to all tastes and preferences.</p>

										<p className="text-justify">At Mass Cake Cafe, we are passionate about using only the finest ingredients in all of our creations. Our cakes are made with real butter, fresh cream, and high-quality chocolates and fruits to ensure a rich and satisfying taste in every bite. From classic flavors like chocolate and vanilla to more exotic options like red velvet and mango, our cakes are always made with care and attention to detail.</p>

										<p className="text-justify">In addition to our delicious cakes, we also offer a variety of other treats. Our brownies are rich and fudgy, with a perfect balance of sweetness and decadence. They are a perfect accompaniment to a cup of coffee or tea, or just as a satisfying snack in their own right. Our sandwiches are made with fresh ingredients and served on your choice of bread, making them a perfect snack or light meal. From classic options like egg and cheese to more gourmet options like chicken pesto or roast beef, there's a sandwich to suit every taste. And our milkshakes are thick and creamy, with flavors like chocolate, strawberry, and vanilla that are sure to please.</p>

										<p className="text-justify">But that's not all – we've recently expanded our offerings to include a restaurant section in our shop, where we now make all kinds of biryanis. From traditional chicken and mutton biryanis to more vegetarian-friendly options like paneer and vegetable biryanis, our biryanis are made with the same dedication to quality and taste that we bring to all of our products.</p>

										<p className="text-justify">At Mass Cake Cafe, we are committed to providing our customers with a welcoming and enjoyable experience. Whether you're stopping by for a quick treat or settling in for a leisurely meal, we strive to make every visit a memorable one. Our cozy atmosphere and friendly staff make our shop the perfect place to catch up with friends or simply relax and enjoy some delicious food.</p>

										<p className="text-justify">We also offer a range of customizable cakes for special occasions like birthdays, weddings, and anniversaries. Our skilled cake artists are always up for a challenge and can create a stunning cake that is tailored to your exact specifications. Whether you're looking for a classic two-tiered cake or a more elaborate design, we have the expertise and creativity to make it happen.</p>

										<p className="text-justify">At Mass Cake Cafe, we believe that quality should never be compromised, and that is reflected in every aspect of our shop. We take pride in using only the finest ingredients, and we are always experimenting with new and exciting flavors and combinations to keep things fresh and interesting. We are also committed to providing exceptional customer service, and we strive to make every customer feel welcome and valued.</p>

										<p className="text-justify">In addition to our regular offerings, we also have seasonal specials that reflect the flavors and ingredients of the current season. From pumpkin spice cakes in the fall to fresh fruit tarts in the summer, we are always coming up with new and exciting treats to showcase the best of what each season has to offer.</p>

										<p className="text-justify">Whether you're in the mood for something sweet or savory, Mass Cake Cafe has something for everyone. We invite you to stop by and sample our delicious offerings, and to experience for yourself the warmth and charm of our shop. We are proud to be a part of the vibrant community of Navalur, and we look forward to continuing to serve our customers for many years to come.</p>									</div>
								</div>
							</div>
							<div className="row sp30">
								<div className="col-lg-6 col-md-6 m-b30">
									<div className="about-thumb">
										<img src={require('./../../images/about/pic5.jpg')} alt="" />
									</div>
								</div>
								<div className="col-lg-6 col-md-6 m-b30">
									<div className="about-thumb">
										<img src={require('./../../images/about/pic6.jpg')} alt="" />
									</div>
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

export default About;