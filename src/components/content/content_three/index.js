import React from "react";
import './style.scss';
const ContenThree = () => {
    return (
        <div id="price" className="contentthree">
            <div className="content">
                <span>PRICING</span>
                <p>Choose a pricing plan that fits your needs.</p>
            </div>
            <div className="box-pricing">
                <div className="pricing">
                    <div className="content-pricing"><p>Basic</p></div>
                    <div className="main-content"><b>10GB</b> Storage</div>
                    <div className="main-content"><b>10</b> Emails</div>
                    <div className="main-content"><b>10</b> Domains</div>
                    <div className="main-content"><b>Endless</b> Support</div>
                    <div className="cost">
                        <h2>$ 10</h2>
                        <pre>per month</pre>
                    </div>
                    <div className="sign-up">
                        <button><i className="ti-check"> Sign up</i></button>
                    </div>
                </div>
                <div className="pricing">
                    <div className="content-pricing"><p>Pro</p></div>
                    <div className="main-content"><b>25GB</b> Storage</div>
                    <div className="main-content"><b>25</b> Emails</div>
                    <div className="main-content"><b>25</b> Domains</div>
                    <div className="main-content"><b>Endless </b>Support</div>
                    <div className="cost">
                        <h2>$ 25</h2>
                        <pre>per month</pre>
                    </div>
                    <div className="sign-up">
                        <button><i className="ti-check"> Sign up</i></button>
                    </div>
                </div>
                <div className="pricing">
                    <div className="content-pricing"><p>Premium</p></div>
                    <div className="main-content"><b>50GB</b>Storage</div>
                    <div className="main-content"><b>50</b>Emails</div>
                    <div className="main-content"><b>50</b>Domains</div>
                    <div className="main-content"><b>Endless </b>Support</div>
                    <div className="cost">
                        <h2>$ 50</h2>
                        <pre>per month</pre>
                    </div>
                    <div className="sign-up">
                        <button><i className="ti-check"> Sign up</i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContenThree;