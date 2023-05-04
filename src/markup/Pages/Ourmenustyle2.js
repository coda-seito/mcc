import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import BakeryTab from './../Pages/BakeryTab';
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
							<h1 className="text-white">Cafe Menu</h1>
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