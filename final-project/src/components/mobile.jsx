import React from 'react';
import '../styles/mobile.scss';
import scree from '../assets/scree.png';
import google from '../assets/google.png';
import apple from '../assets/apple.png';

export class Mobile extends React.Component {
    render() {
        return (
            <div className="mobile">
                <div className="mobile__wrapper">
                    <div className="mobile-screen">
                        <img className="mobile__img" src={scree} alt="#" />
                    </div>
                    <div className="mobile-join">
                        <div className="mobile-join__caption">
                            <h1 className="mobile-join__title">Join us on mobile</h1>
                            <div className="mobile-join__subt">
                                The Wix App lets you stay updated on the go. Just add your phone number and we’ll text you a link.
                            </div>
                        </div>
                        <form className="mobile-join__form">
                            <input className="mobile-join__input mobile-join__input-country" placeholder="+380" type="tel" />
                            <input className="mobile-join__input mobile-join__input-phone" placeholder="Phone Number" type="tel" />
                            <button type="submit" className="mobile-join__btn">Send</button>
                        </form>
                        <div className="mobile-join__links">
                            <a href="https://apps.wix.com/place-invites/invite-lp/ffb304c2-ebb7-4728-83c1-9912da052236?ref=symp_button">
                                <img className="mobile-join__img" src={google} alt="" />
                            </a>
                            <a href="https://apps.wix.com/place-invites/invite-lp/ffb304c2-ebb7-4728-83c1-9912da052236?ref=symp_button">
                                <img className="mobile-join__img" src={apple} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}