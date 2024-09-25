
import React from 'react';
import "./payment.css"
import logo from "../../images/toppng.com-amazon-logo-transparent-768x293.png";
import logo2 from "../../images/vecteezy_amazon-logo-png-amazon-icon-transparent-png_19766240.png";


export default function LoginPage() {
    return (
        <>
            <div className="loginPageTitle">
                <div className="siteLogo">
                <img src={logo2} alt="amazon black logo" width={80} />
                </div>
                <div className="">
                    <span className="checkout-title">Checkout <span className="text-blue-600">(6 items)</span></span>
                </div>
            </div>
            <div className="container loginContainer mx-auto p-4">
                <div className="mb-4">
                    <span className="step-title">1 Enter a new shipping address</span>
                </div>
                <div className="details ">
                    <div className="loginForm border p-4 rounded mb-4">
                        <div className="section-title mb-4">Add a new address</div>
                        <form>
                            <div className="mb-4">
                                <label className="block mb-2">Country/region</label>
                                <select className="w-full p-2 border rounded">
                                    <option>Egypt</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Full name (First and Last name)</label>
                                <input type="text" className="w-full p-2 border rounded" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Mobile number</label>
                                <div className="flex">
                                    <select className="p-2 border rounded-l">
                                        <option>🇪🇬 +20</option>
                                    </select>
                                    <input type="text" className="w-full p-2 border rounded-r" placeholder="e.g. 1XXXXXXXXX" />
                                </div>
                                <small>May be used to assist delivery</small>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Street name</label>
                                <input type="text" className="w-full p-2 border rounded" placeholder="e.g. Talaat Harb Street" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Building name/no</label>
                                <input type="text" className="w-full p-2 border rounded" placeholder="e.g. Princess Tower" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">City/Area</label>
                                <input type="text" className="w-full p-2 border rounded" placeholder="e.g. El Nozha, New Cairo City & Dokki" />
                                <small>Can't find your city/area? Try a different spelling</small>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">District</label>
                                <input type="text" className="w-full p-2 border rounded" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Governorate</label>
                                <input type="text" className="w-full p-2 border rounded" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Nearest landmark</label>
                                <input type="text" placeholder="e.g. Cairo festival city" className="w-full p-2 border rounded" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-bold">Add delivery instructions</h3>
                                <div className="mt-2">
                                    <label className="block mb-2">Address type</label>
                                    <div className="flex items-center mb-2">
                                        <input type="radio" name="addressType" className="mr-2" />
                                        <label>Home (7am-9pm, all days)</label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input type="radio" name="addressType" className="mr-2" />
                                        <label>Office (9am-6pm, Weekdays)</label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input type="checkbox" className="mr-2" />
                                        <label>Use as my default address.</label>
                                    </div>
                                </div>
                                <button className="bg-yellow-400 text-black py-2 px-4 rounded mt-4">Add address</button>
                            </div>
                        </form>
                    </div>
                    <div className="order-summary p-4 rounded">
                        <div className="mb-4">
                            <button className="bg-yellow-300 p-2 rounded">Use this address</button>
                        </div>
                        <div className="mb-4">
                            <p>Choose a shipping address to continue checking out. You'll still have a chance to review and edit your order before it's final.</p>
                        </div>
                        <div className="mb-4">
                            <div className="font-bold">Order Summary</div>
                            <div className="flex justify-between">
                                <span>Items</span>
                                <span>--</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping & handling</span>
                                <span>--</span>
                            </div>
                            <div className="flex justify-between order-total">
                                <span>Order total</span>
                                <span>EGP 4,052.90</span>
                            </div>
                        </div>
                        <div>
                            <a href="#" className="text-blue-600">How are shipping costs calculated?</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



