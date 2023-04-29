import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Tab from './../Pages/Tab';

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
							<h1 className="text-white">Our Menu</h1>
							<div className="main-slider">
								<Link to={"/menu"} className="btn btnhover">Bakery</Link>
								<Link to={'/hotel-menu'} className="btn white" data-toggle="modal">Restaurant</Link>
							</div>
						</div>
					</div>
				</div>
				<Tab />
			</div>
			<Footer/>
			</>
		)
	
	}
}

export default Ourmenustyle2;