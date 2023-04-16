import React, {useState} from 'react';
import {TabContent, TabPane,} from 'reactstrap';
import classnames from 'classnames';
import {useLocation, Link} from 'react-router-dom';
import queryString from 'query-string'
import items from "./resources/data";

const Popupss = (props) => {
    const {search} = useLocation();
    const values = queryString.parse(search)
    const tab = values.tab
    let initialState = '1'
    switch (tab) {
        case 'cakes':
            initialState = '1'
            break;
        case 'sandwiches':
            initialState = '2'
            break;
    }
    const [activeTab, setActiveTab] = useState(initialState);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div class="section-full bg-white pizza-full-menu">
            <div tabs>

                <div className="bg-primary pizza-items">
                    <div className="container">
                        <ul className="nav nav-tabs pizza-items filters">
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link className={classnames({active: activeTab === '1'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('1');
                                      }}>
                                    <i className="flaticon-sandwich"></i>
                                    <span>Cake</span>
                                </Link>
                            </li>
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link className={classnames({active: activeTab === '2'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('2');
                                      }}>
                                    <i className="flaticon-burger"></i>
                                    <span>Burger</span>
                                </Link>
                            </li>
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link className={classnames({active: activeTab === '3'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('3');
                                      }}>
                                    <i className="flaticon-french-fries"></i>
                                    <span>Fries</span>
                                </Link>
                            </li>
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link className={classnames({active: activeTab === '4'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('4');
                                      }}>
                                    <i className="flaticon-cola"></i>
                                    <span>Cola</span>
                                </Link>
                            </li>
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link className={classnames({active: activeTab === '5'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('5');
                                      }}>
                                    <i className="flaticon-hot-dog"></i>
                                    <span>Hotdog</span>
                                </Link>
                            </li>
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link className={classnames({active: activeTab === '6'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('6');
                                      }}>
                                    <i className="flaticon-cookies"></i>
                                    <span>Cookies</span>
                                </Link>
                            </li>
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link className={classnames({active: activeTab === '7'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('7');
                                      }}>
                                    <i className="flaticon-sandwich"></i>
                                    <span>Sandwich</span>
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
                                {items['cakes'].map((item) => (
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
                            <div className="row ">
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/burger/pic1.jpg')} alt=""/>
                                            </Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Pancakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/burger/pic2.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Pumpkin
                                                cakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/burger/pic3.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link>
                                            </h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/burger/pic4.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Cupcakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/burger/pic5.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Birthday
                                                Cake</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <div className="row ">
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item1.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Biscuits</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item2.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Pancakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item3.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link>
                                            </h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item4.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Pancakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item5.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Pumpkin
                                                cakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="4">
                            <div className="row ">
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item5.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link>
                                            </h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item3.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Cupcakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item2.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Birthday
                                                Cake</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item7.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Biscuits</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item8.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Pancakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="5">
                            <div className="row ">
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item3.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link>
                                            </h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item4.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Pancakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item6.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'shop-product-details'}>Pumpkin
                                                cakes</Link>></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item8.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link>
                                            </h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item2.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Cupcakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>

                        <TabPane tabId="6">
                            <div className="row ">
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item3.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link>
                                            </h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item4.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Pancakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item6.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Pumpkin
                                                cakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item8.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link>
                                            </h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item2.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Cupcakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>


                        <TabPane tabId="7">
                            <div className="row ">
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item3.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Pancakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item4.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Pumpkin
                                                cakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item5.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link>
                                            </h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item5.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link
                                                to={'/shop-product-details'}>Cupcakes</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-col col m-b30">
                                    <div className="item-box shop-item style2">
                                        <div className="item-img">
                                            <Link><img src={require('./../../images/product/item7.jpg')} alt=""/></Link>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={'/shop-product-details'}>Birthday
                                                Cake</Link></h4>
                                            <h5 className="price text-primary">
                                                <del>45</del>
                                                <span>$40</span></h5>
                                            <div className="cart-btn"><Link to={'/shop-product-details'}
                                                                            className="btn btnhover radius-xl"><i
                                                className="ti-shopping-cart"></i> Add To Cart</Link></div>
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