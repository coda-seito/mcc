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
				<Tab />
			</div>
			<Footer  />

			</>
		)
	
	}
}

export default Ourmenustyle2;