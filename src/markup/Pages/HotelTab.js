import React, {useState} from 'react';
import {TabContent, TabPane,} from 'reactstrap';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import items from "./resources/hotel";
import cakesItems from "./resources/cakes";
import queryString from "query-string"

const Popupss = (props) => {
    const queryParams = queryString.parse(window.location.search)
    const tab = queryParams.tab
    let initialState = tab || 'cakes'
    switch (tab) {
        case 'cakes':
        case 'curry':
        case 'biryani':
        case 'chinese':
        case 'tiffin':
        // case 'tandoori':
        case 'shakes':
        case 'dessert':
            initialState = tab
            break;
    }
    const [activeTab, setActiveTab] = useState(initialState);

    function isValid(date, h1, m1, h2, m2) {
        var h = date.getHours();
        var m = date.getMinutes();
        return (h1 < h || h1 == h && m1 <= m) && (h < h2 || h == h2 && m <= m2);
    }

    const isHappyHour = isValid(new Date(), 16, 0, 18, 0);
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
                                <Link to="?tab=cakes"
                                      className={classnames({active: activeTab === 'cakes'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('cakes');
                                      }}>
                                    <i className="flaticon-cake"></i>
                                    <span>Cake</span>
                                </Link>
                            </li>
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link to="?tab=curry"
                                      className={classnames({active: activeTab === 'curry'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('curry');
                                      }}>
                                    <i className="flaticon-curry"></i>
                                    <span>Curry</span>
                                </Link>
                            </li>
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link to="?tab=biryani"
                                      className={classnames({active: activeTab === 'biryani'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('biryani');
                                      }}>
                                    <i className="flaticon-biryani"></i>
                                    <span>Biryani</span>
                                </Link>
                            </li>
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link to="?tab=chinese"
                                      className={classnames({active: activeTab === 'chinese'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('chinese');
                                      }}>
                                    <i className="flaticon-noodles"></i>
                                    <span>Chinese</span>
                                </Link>
                            </li>
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link to="?tab=tiffin"
                                      className={classnames({active: activeTab === 'tiffin'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('tiffin');
                                      }}>
                                    <i className="flaticon-tortilla"></i>
                                    <span>Tiffin</span>
                                </Link>
                            </li>
                            {/*<li className="nav-item item">*/}
                            {/*    <input type="radio"/>*/}
                            {/*    <Link to="?tab=tandoori"*/}
                            {/*          className={classnames({active: activeTab === 'tandoori'}, 'item-icon-box nav-link')}*/}
                            {/*          onClick={() => {*/}
                            {/*              toggle('tandoori');*/}
                            {/*          }}>*/}
                            {/*        <i className="flaticon-turkey"></i>*/}
                            {/*        <span>Tandoori</span>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link to="?tab=shakes"
                                      className={classnames({active: activeTab === 'shakes'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('shakes');
                                      }}>
                                    <i className="flaticon-milkshake"></i>
                                    <span>Shakes</span>
                                </Link>
                            </li>
                            <li className="nav-item item">
                                <input type="radio"/>
                                <Link to="?tab=dessert"
                                      className={classnames({active: activeTab === 'dessert'}, 'item-icon-box nav-link')}
                                      onClick={() => {
                                          toggle('dessert');
                                      }}>
                                    <i className="flaticon-brownie"></i>
                                    <span>Dessert</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="content-inner">
                <div className="container-fluid">
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="cakes">
                            <div className="row tab-pane fade show active">
                                {cakesItems['cakes'].map((item) => (
                                    <div className="dz-col col m-b30">
                                        <div className="item-box shop-item style2">
                                            <div className="item-img">
                                                <img src={`${item.pic}`} alt=""/>
                                            </div>
                                            <div className="item-info text-center">
                                                <h4 className="item-title">{item.name}</h4>
                                                <h5 className="text-primary">
                                                    {isHappyHour && (
                                                        <div>
                                                            <span className='price'>½ kg - <span className='price-red'><strike>{item["half-kilo-price"]}</strike>&nbsp;&nbsp;</span>{item["half-kilo-price"]*0.80}</span>
                                                            <span className='price'>1 kg - <span className='price-red'><strike>{item["kilo-price"]}</strike>&nbsp;&nbsp;</span>{Math.round(item["kilo-price"]*0.80)}</span>
                                                        </div>
                                                    )}
                                                    {!isHappyHour && (
                                                        <div>
                                                            <span className='price'>½ kg - {item["half-kilo-price"]}</span>
                                                            <span className='price'>1 kg - {item["kilo-price"]}</span>
                                                        </div>
                                                    )}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>))}
                            </div>
                        </TabPane>
                        {Object.keys(items).map((key) => (
                            <TabPane tabId={key}>
                                <div className="section-full bg-white">
                                    {items[key].map((item1) => (
                                        item1.index % 2 == 0 ? <div className="row sp0">
                                                <div className="col-lg-6">
                                                    <img src={`${item1.img}`} alt="" className="img-cover"/>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="menu-box">
                                                        <div className="section-head style-2">
                                                            <h2 className="title">{item1.name}</h2>
                                                        </div>
                                                        <ul className="menu-list-2">
                                                            {item1.idx.map((item) => (
                                                                <li>
                                                                    <div className="info-price">
                                                                        <h5 className="title">{item.split(",")[0]}</h5>
                                                                        <div className="line"></div>
                                                                        {isHappyHour && (
                                                                            <div>
                                                                                <span className="price-red"><strike>{item.split(",")[1]}</strike>&nbsp;&nbsp;</span>
                                                                                <span className="price">{Math.round((item.split(",")[1])*0.80)}</span>
                                                                            </div>
                                                                        )}
                                                                        {!isHappyHour && (
                                                                            <div>
                                                                                <span className="price">{item.split(",")[1]}</span>
                                                                            </div>
                                                                        )}
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
                                                            <h2 className="title">{item1.name}</h2>
                                                        </div>
                                                        <ul className="menu-list-2">
                                                            {item1.idx.map((item) => (
                                                                <li>
                                                                    <div className="info-price">
                                                                        <h5 className="title">{item.split(",")[0]}</h5>
                                                                        <div className="line"></div>
                                                                        {isHappyHour && (
                                                                            <div>
                                                                                <span className="price-red"><strike>{item.split(",")[1]}</strike>&nbsp;&nbsp;</span>
                                                                                <span className="price">{Math.round((item.split(",")[1])*0.80)}</span>
                                                                            </div>
                                                                        )}
                                                                        {!isHappyHour && (
                                                                            <div>
                                                                                <span className="price">{item.split(",")[1]}</span>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <img src={`${item1.img}`} alt="" className="img-cover"/>
                                                </div>
                                            </div>
                                    ))
                                    }
                                </div>
                            </TabPane>))}
                    </TabContent>
                </div>
            </div>
        </div>
    );
}

export default Popupss;