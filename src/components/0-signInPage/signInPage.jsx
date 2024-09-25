import React from 'react';
import "./signInPage.css";
import amazoonlogo from "../../images/Amazon.svg"

export default function SignInPage() {
  return (
    <>
      <img src={amazoonlogo} alt="Amazon Logo" />

      <div className="signIn">
        <h1>Sign in</h1>
        <form action="#">
          <label htmlFor="email">Email or mobile phone number</label>
          <input type="text" id="email" name="email" required />

          <button type="submit">Continue</button>

          <p className="agreement">
            By signing in, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
          </p>
        </form>
        <a className="help"><span>►</span> Need help?</a>
      </div>

      <div className="newAmazon">
        <div className="lineBreak">
          <h4>New to Amazon?</h4>
        </div>
        <button type="button">Create your Amazon account</button>
      </div>

      <footer className="sign">
        <ul>
          <li>
            <a href="https://www.amazon.eg/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=201909000">
              Conditions of Use
            </a>
          </li>
          <li>
            <a href="https://www.amazon.eg/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=201909010">
              Privacy Notice
            </a>
          </li>
          <li>
            <a href="https://www.amazon.eg/gp/help/customer/display.html?nodeId=508510">
              Help
            </a>
          </li>
        </ul>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </>
  );
}
