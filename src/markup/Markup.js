import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index1 from './Pages/Index1';

import About from './Pages/About';
import Ourservices from './Pages/Ourservices';
import Faq from './Pages/Faq';
import Error from './Pages/Error';

import Ourmenustyle2 from './Pages/Ourmenustyle2';
import Ourmenustyle3 from './Pages/Ourmenustyle3';

import Shop from './Pages/Shop';
import Shopsidebar from './Pages/Shopsidebar';
import Shopproduct from './Pages/Shopproduct';
import Shopcart from './Pages/Shopcart';
import Shopwishlist from './Pages/Shopwishlist';
import Shopchekout from './Pages/Shopchekout';
import Shoplogin from './Pages/Shoplogin';
import Shopregister from './Pages/Shopregister';

import Contact from './Pages/Contact';

class Markup extends Component{
	
	render(){
		return(
			<BrowserRouter basename='/'>
				<Switch>
					<Route path='/' exact component={Index1} />

					<Route path='/about-1' exact component ={About} />
					<Route path='/our-services' exact component ={Ourservices} />
					<Route path='/faq' exact component ={Faq} />
					<Route path='/error-404' exact component ={Error} />

					<Route path='/menu' exact component ={Ourmenustyle2} />
					<Route path='/hotel-menu' exact component ={Ourmenustyle3} />
					
					<Route path='/shop' exact component ={Shop} />
					<Route path='/shop-sidebar' exact component ={Shopsidebar} />
					<Route path='/shop-product-details' exact component ={Shopproduct} />					
					<Route path='/shop-cart' exact component ={Shopcart} />					
					<Route path='/shop-wishlist' exact component ={Shopwishlist} />
					<Route path='/shop-checkout' exact component ={Shopchekout} />
					<Route path='/shop-login' exact component ={Shoplogin} />
					<Route path='/shop-register' exact component ={Shopregister} />
					<Route path='/contact' exact component ={Contact} />
				</Switch>
			</ BrowserRouter>
		)
		
	}
}

export default Markup;