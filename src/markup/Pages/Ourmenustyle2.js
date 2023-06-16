import React, {Component} from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import HotelTab from "./HotelTab";

var img = require('./../../images/banner/bnr1.jpg');
 
class Ourmenustyle2 extends Component{

	render(){
		return(
			<>
			<Header />
			<div className="page-content bg-white">
				<div className="dlab-bnr-inr overlay-black-middle no-line" style={{backgroundImage:"url(" + img + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Happy Hour!!</h1>
							<span className="text-white">4:00PM - 7:00PM</span>
							<h3 className="text-white">20% discount on everything</h3>
						</div>
					</div>
				</div>
				<HotelTab />
			</div>
			<Footer/>
			</>
		)
	}
}

export default Ourmenustyle2;