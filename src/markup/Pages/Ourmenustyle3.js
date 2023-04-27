import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import items from "./resources/hotel";

var img = require('./../../images/banner/bnr1.jpg');

class Ourmenustyle3 extends Component {

    render() {
        return (
            <>
                <Header/>

                <div className="page-content bg-white">

                    <div className="dlab-bnr-inr overlay-black-middle no-line"
                         style={{backgroundImage: "url(" + img + ")"}}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Hotel Menu</h1>
                            </div>
                        </div>
                    </div>

                    <div className="section-full bg-white">
                        {
                            Object.keys(items).map((item) => (
                                    item%2 ==0 ? <div className="row sp0">
                                            <div className="col-lg-6">
                                                <img src={`${items[item]['img']}`} alt="" className="img-cover"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="menu-box">
                                                    <div className="section-head style-2">
                                                        <h2 className="title">{items[item]['name']}</h2>
                                                    </div>
                                                    <ul className="menu-list-2">
                                                        {items[item]['idx'].map((item) => (
                                                        <li>
                                                            <div className="info-price">
                                                                <h5 className="title">{item.split(",")[0]}</h5>
                                                                <div className="line"></div>
                                                                <span className="price">{item.split(",")[1]}</span>
                                                            </div>
                                                        </li>
                                                    ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> :
                                        <div className="row manu-box-reverse sp0">
                                            <div className="col-lg-6">
                                                <div className="menu-box">
                                                    <div className="section-head style-2">
                                                        <h2 className="title">{items[item]['name']}</h2>
                                                    </div>
                                                    <ul className="menu-list-2">
                                                        {items[item]['idx'].map((item) => (
                                                        <li>
                                                            <div className="info-price">
                                                                <h5 className="title">{item.split(",")[0]}</h5>
                                                                <div className="line"></div>
                                                                <span className="price">{item.split(",")[1]}</span>
                                                            </div>
                                                        </li>
                                                    ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src={`${items[item]['img']}`} alt="" className="img-cover"/>
                                            </div>
                                        </div>
                                )
                            )
                        }
                    </div>
                </div>

                <Footer/>

            </>
        )
    }
}

export default Ourmenustyle3;