import React from 'react';
import './footer.css';
import amazoonlogo from "./../../images/Cover-1170x600-removebg-preview.png"

export default function Footer() {
  return (
    <>
      <div>
        <a name="top"></a>

        <footer>
          <a href="#">
            <div className="footerBackToTop">Back to top</div>
          </a>

          <div className="footerColumn">
            <div className="footerRow">
              <div className="footerCol">
                <div className="footerColHead">Get to Know Us</div>
                <ul>
                  <li>
                    <a href="/-/en/b?node=22624915031">About Amazon</a>
                  </li>
                  <li>
                    <a href="http://amazon.jobs">Careers</a>
                  </li>
                  <li>
                    <a href="https://www.amazon.science">Amazon Science</a>
                  </li>
                </ul>
              </div>

              <div className="footerSpace"></div>

              <div className="footerCol">
                <div className="footerColHead">Shop with Us</div>
                <ul>
                  <li>
                    <a href="https://www.amazon.eg/-/en/gp/css/homepage.html?ref_=footer_ya">Your Account</a>
                  </li>
                  <li>
                    <a href="https://www.amazon.eg/-/en/gp/css/order-history?ref_=footer_yo">Your Orders</a>
                  </li>
                  <li>
                    <a href="https://www.amazon.eg/-/en/a/addresses?ref_=footer_yad">Your Addresses</a>
                  </li>
                  <li>
                    <a href="/-/en/gp/registry/wishlist?requiresSignIn=1&amp;ref_=footer_wl">Your Lists</a>
                  </li>
                </ul>
              </div>

              <div className="footerSpace"></div>

              <div className="footerCol">
                <div className="footerColHead">Make Money with Us</div>
                <ul>
                  <li>
                    <a href="https://brandservices.amazon.eg/?ref=AOEGABRLGNRFOOT&amp;ld=AOEGABRLGNRFOOT">
                      Protect and build your brand
                    </a>
                  </li>
                  <li>
                    <a href="https://advertising.amazon.eg/?ref=footer_advtsing_eg">Advertise Your Products</a>
                  </li>
                  <li>
                    <a href="https://sell.amazon.eg/beginners-guide.html?lang=en-US&amp;ref_=AZEGSOA_footer_sell_EN&amp;ld=AZEGSOA_footer_sell_EN">
                      Sell on Amazon
                    </a>
                  </li>
                  <li>
                    <a href="https://sell.amazon.eg/fulfillment-by-amazon.html?lang=en-US&amp;ref_=AZEGSOA_footer_FBA_EN&amp;ld=AZEGSOA_footer_FBA_EN">
                      Fulfillment by Amazon
                    </a>
                  </li>
                  <li>
                    <a href="https://supply.amazon.com/?ref_=footer_sta&amp;lang=en-AE">Supply to Amazon</a>
                  </li>
                </ul>
              </div>

              <div className="footerSpace"></div>

              <div className="footerCol">
                <div className="footerColHead">Let Us Help You</div>
                <ul>
                  <li>
                    <a href="/-/en/gp/help/customer/display.html?nodeId=508510">Help</a>
                  </li>
                  <li>
                    <a href="/-/en/gp/help/customer/display.html?nodeId=201910060&amp;ref_=footer_shiprates">
                      Shipping &amp; Delivery
                    </a>
                  </li>
                  <li>
                    <a href="/-/en/spr/returns">Returns &amp; Replacements</a>
                  </li>
                  <li>
                    <a href="https://www.amazon.eg/-/en/your-product-safety-alerts?ref_=footer_bsx_ypsa">
                      Recalls and Product Safety Alerts
                    </a>
                  </li>
                  <li>
                    <a href="/-/en/b?node=22624924031">Amazon App Download</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr style={{ marginTop: '40px', borderTop: '1px solid #3a4553' }} />

          <div className="amazonLink">
            <span>
              <div className="footerLogo">
                <a href="/-/en/?ref_=footer_logo">
                  <div className="logo">
                    <img src={amazoonlogo} alt="Logo" />
                  </div>
                </a>
              </div>
            </span>

            <div className="language-selector">
              <button className="language-button">
                <span className="language-icon">🌐</span>
                <span className="language-text">English</span>
                <span className="language-arrow">▲</span>
              </button>
              <button className="country-button">
              <span className="country-flag">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg"
                alt="Egypt Flag"
                style={{ width: '20px', height: '15px', marginRight: '5px' }}
              /></span>
                <span className="country-text">Egypt</span>
              </button>
            </div>
          </div>

          <div className="footerTable">
            <table>
              <tbody>
                <tr>
                  <td>
                    <a href="https://advertising.amazon.com/?ref=footer_advtsing_2_eg">
                      Amazon Advertising
                      <br />
                      <span>Find, attract, and engage customers</span>
                    </a>
                  </td>
                  <td className="d-inline-block">
                    <a href="https://sell.amazon.eg/?lang=en-US&amp;ref_=AZEGSOA_footer_affiliate_EN&amp;ld=AZEGSOA_footer_affiliate_EN">
                      Sell on Amazon
                      <br />
                      <span>Start Selling Online Today!</span>
                    </a>
                  </td>
                  <td>
                    <a href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&amp;sc_campaign=AE_amazonfooter">
                      Amazon Web Services
                      <br />
                      <span>Scalable Cloud Computing Services</span>
                    </a>
                  </td>
                  <td>
                    <a href="https://www.goodreads.com/">
                      Goodreads
                      <br />
                      <span>Book reviews &amp; recommendations</span>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>&nbsp;</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.audible.com/">
                      Audible
                      <br />
                      <span>Download Audio Books</span>
                    </a>
                  </td>
                  <td>
                    <a href="https://www.imdb.com/">
                      IMDb
                      <br />
                      <span>Movies, TV &amp; Celebrities</span>
                    </a>
                  </td>
                  <td>
                    <a href="http://www.alexa.com/">
                      Alexa
                      <br />
                      <span>Actionable Analytics for the Web</span>
                    </a>
                  </td>
                  <td>
                    <a href="http://www.shopbop.com/welcome">
                      Shopbop
                      <br />
                      <span>Designer Fashion Brands</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="last">
            <ul>
              <li>
                <a href="/-/en/gp/help/customer/display.html?nodeId=201909000&amp;ref_=footer_cou">
                  Conditions of Use &amp; Sale
                </a>
              </li>
              <li>
                <a href="/-/en/gp/help/customer/display.html?nodeId=201909010&amp;ref_=footer_privacy">
                  Privacy Notice
                </a>
              </li>
              <li>
                <a href="/-/en/gp/help/customer/display.html?nodeId=202075050&amp;ref_=footer_ads">
                  Interest-Based Ads
                </a>
              </li>
            </ul>
            <span>©1996–2024, Amazon.com, Inc. or its affiliates</span>
          </div>
        </footer>
      </div>
    </>
  );
}
