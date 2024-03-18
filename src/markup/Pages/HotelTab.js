import React, {useState} from 'react';
import {TabContent, TabPane,} from 'reactstrap';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
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
        case 'budget':
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

    const isHappyHour = isValid(new Date(), 0, 0, 0, 0);
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div class="section-full bg-white pizza-full-menu">
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
                                                            <span className='price'>1 kg - <span className='price-red'><strike>{item["kilo-price"]}</strike>&nbsp;&nbsp;</span>{Math.round(item["price"]*0.80)}</span>
                                                        </div>
                                                    )}
                                                    {!isHappyHour && (
                                                        <div>
                                                            <span className='price'>₹ {item["price"]}</span>
                                                        </div>
                                                    )}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>))}
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    );
}

export default Popupss;