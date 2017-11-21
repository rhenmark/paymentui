import React, { Component } from 'react';
import '../styles/styles.css';

import PayPal from '../assets/img/paypal.jpg';
import Alipay from '../assets/img/alipay.png';
import CreditCard from '../assets/img/creditcard.jpg';
// import Palawan from '../assets/img/palawan.jpg';

class pageone extends Component {
    render() {
        return (
            <div>
                  <div className="container">
                  	<div className="left-content">
                              <div class="col-9">
                                   <div class="breadcrumb">
                                          <a href="#" class="active">Information</a>
                                          <a href="#">Payment</a>
                                          <a href="#" className="in-active">Complete</a>
                                    </div>
                              </div>
                              <div className="col-12">
                                    <div className="col-6">
                                          <div className="form-group">
                                                <label className="label txt-primary">Edit Information</label>
                                          </div>
                                          <div className="form-group">
                                                <h1>Select a billing country</h1>
                                          </div>
                                          <div className="form-group">
                                                <label className="label">Billing country</label>
                                                <div>
                                                      <select defaultValue="Thailand" className="picker">
                                                      <option>Indonesia</option>
                                                      <option>Malaysia</option>
                                                      <option>Singapore</option>
                                                      <option>Thailand</option>
                                                      </select>
                                                </div>
                                          </div>
                                          <br/>
                                          <div className="form-group">
                                                <h1>Select a Payment method</h1>
                                          </div>
                                           <div className="form-group">
                                                <ul class="payment-list">
                                                      <li>
                                                            <a href="javascript:;" className="txt-active">
                                                                  <div><img src={PayPal} alt="PayPal" className="credit-img img-active"/></div>
                                                                  Paypal
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a href="javascript:;">
                                                                  <div><img src={Alipay} alt="Alipay" className="credit-img"/></div>
                                                                  Alipay
                                                            </a>
                                                      </li>

                                                      <li>
                                                            <a href="javascript:;">
                                                                  <div><img src={CreditCard} alt="CreditCard" className="credit-img"/></div>
                                                                  Credit Card
                                                            </a>
                                                      </li>
                                                </ul>
                                          </div>
                                          <div className="form-group">
                                                <br/>
                                                <button class="btn btn-gradient btn-txt">
                                                      Login and pay with Paypal
                                                </button>
                                          </div>
                                    </div>
                              </div>
                  	</div>
                  	<div className="right-content">
                              <div className="cover">
                                    <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res60/70000/70022-Palawan-Province.jpg" className="cover-image" alt="Cover"/>
                                    <div className="slope-div"></div>
                              </div>
                              <div className="content">
                                    <div className="form-group">
                                          <h2>Koh Samae San Snorkeling & Rayong Suphattra Land</h2>
                                    </div>
                                    <div className="form-group">
                                          <p className="sub-title"> Iterinary </p>
                                          <h2>One Day Adventure Trek Tour</h2>
                                    </div>
                                    <div className="form-group">
                                          <p className="sub-title"> When </p>
                                          <h2>01.02.17 <span>&#8594;</span> 11.2.17</h2>
                                    </div>
                                    <div className="form-group">
                                          <div className="flex-container align-center">
                                                <div className="flex-col-5">
                                                      <span className="sub-title"> 3 Adults </span><br/>
                                                      <span> ฿ 1,999 - per person </span>
                                                </div>
                                                <div className="flex-col-5 flex-container justify-right">
                                                      <h2> ฿ 5,997. - </h2>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="form-group">
                                          <div className="flex-container align-center">
                                                <div className="flex-col-5 ">
                                                      <span className="sub-title"> 1 Child </span><br/>
                                                      <span> ฿ 990 - per child </span>
                                                </div>
                                                <div className="flex-col-5 flex-container justify-right">
                                                      <h2> ฿ 990. - </h2>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="form-group">
                                          <p className="sub-title">Cancellation <span className="txt-primary">Flexible</span></p>
                                          <span>Full refund 3 days prior to selected day, except fees & Non-refundable for 1-2 days prior to selected day. </span>
                                    </div>

                                     <div className="form-group">
                                          <div className="flex-container justify-right">
                                                <h1> ฿ 6.987 ,- </h1>
                                          </div>
                                    </div>
                              </div>
                  	</div>
                  </div>
                  <footer class="footer"></footer>
            </div>
        );
    }
}

export default pageone;