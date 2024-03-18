import React, {Component, useState} from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import HotelTab from "./HotelTab";
import ConfettiExplosion from 'react-confetti-explosion';

var img = require('./../../images/banner/bnr1.jpg');
 
class Ourmenustyle2 extends Component{

	render(){
		function isValid(date, h1, m1, h2, m2) {
			var h = date.getHours();
			var m = date.getMinutes();
			return (h1 < h || h1 == h && m1 <= m) && (h < h2 || h == h2 && m <= m2);
		}

		const isHappyHour = isValid(new Date(), 0, 0, 0, 0);
		return(
			<>
			<Header />
			<div className="page-content bg-white">
				<div style={{ justifyContent: 'center', display:'flex'}}>
					{isHappyHour && <ConfettiExplosion force={0.1} particleSize={12} width={2000} zIndex={3} duration={3000}/>}
				</div>
				<div className="dlab-bnr-inr no-line" style={{backgroundImage:"url(" + img + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<br></br><br></br>
							<h1 className="text-white">Italian Frosty</h1>
							<span className="text-white">4:00PM - 10:00PM</span>
							<br></br><br></br>
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