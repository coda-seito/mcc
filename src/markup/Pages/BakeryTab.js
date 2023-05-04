import React, {useState} from 'react';
import {TabContent, TabPane,} from 'reactstrap';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import cakesItems from "./resources/cakes";
import queryString from "query-string"

const Popupss = (props) => {
    const queryParams = queryString.parse(window.location.search)
    console.log(queryParams.tab)
    const tab = queryParams.tab
    let initialState = '1'
    switch (tab) {
        case 'cakes':
            initialState = '1'
            break;
        case 'fries':
            initialState = '2'
            break;
    }

    const [activeTab, setActiveTab] = useState(initialState);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div className="section-full bg-white pizza-full-menu">
            <div tabs>
                <div className="bg-primary pizza-items">
                    <div className="container">
                        <ul className="nav nav-tabs pizza-items filters">
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link to="?tab=cakes" className={classnames({active: activeTab === '1'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('1');
                                      }}>
                                    <i className="flaticon-cake"></i>
                                    <span>Cake</span>
                                </Link>
                            </li>
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link to="?tab=fries" className={classnames({active: activeTab === '2'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('2');
                                      }}>
                                    <i className="flaticon-french-fries"></i>
                                    <span>Fries</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="content-inner">
                <div className="container-fluid">
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="row tab-pane fade show active">
                                {cakesItems['cakes'].map((item) => (
                                    <div className="dz-col col m-b30">
                                        <div className="item-box shop-item style2">
                                            <div className="item-img">
                                                <img src={`${item.pic}`} alt=""/>
                                            </div>
                                            <div className="item-info text-center">
                                                <h4 className="item-title">{item.name}</h4>
                                                <h5 className="price text-primary">
                                                    <div>½ kg - ₹{item["half-kilo-price"]}</div>
                                                    <div>1 kg - ₹{item["kilo-price"]}</div>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>))}
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="row " >
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item1.jpg')} alt="" /></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Biscuits</Link></h4>
                                            <h5 className="price text-primary"><del>45</del><span>40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item2.jpg')} alt="" /></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Pancakes</Link></h4>
                                            <h5 className="price text-primary"><del>45</del><span>40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item3.jpg')} alt="" /></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link></h4>
                                            <h5 className="price text-primary"><del>45</del><span>40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item4.jpg')} alt="" /></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Pancakes</Link></h4>
                                            <h5 className="price text-primary"><del>45</del><span>40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item5.jpg')} alt="" /></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Pumpkin cakes</Link></h4>
                                            <h5 className="price text-primary"><del>45</del><span>40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    );
}

export default Popupss;