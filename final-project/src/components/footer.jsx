import React from 'react';
import '../styles/footer.scss';
import facebook from '../assets/facebook2.png'
import twitter from '../assets/twitter2.png'
import instagram from '../assets/instagram2.png'

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-contacts">
                    <div className="footer-contacts__title">CONTACT ME</div>
                    <div className="footer-contacts__txt">
                        <p>
                            WRITE OR CALL ME IF YOU
                        </p>
                        <p>
                            HAVE MORE QUESTIONS
                        </p>
                    </div>
                    <div className="footer-contacts__txt">
                        <p>
                            INFO@MYSITE.COM
                        </p>
                        <p>
                            123-456-7890
                        </p>
                    </div>
                    <div className="footer-contacts__links">
                        <a href="https://www.facebook.com/wix">
                            <img className="footer-contacts__img" src={facebook} alt="" />
                        </a>
                        <a href="https://twitter.com/wix">
                            <img className="footer-contacts__img" src={twitter} alt="" />
                        </a>
                        <a href="https://www.instagram.com/wix/">
                            <img className="footer-contacts__img" src={instagram} alt="" />
                        </a>
                    </div>
                </div>
                <div className="footer-form">
                    <form className="form">
                        <input className="form__input form__input_name" type="text" placeholder="Name" />
                        <input className="form__input form__input_email" type="text" placeholder="Email" />
                        <input className="form__input form__input_subject" type="text" placeholder="Subject" />
                        <textarea className="form__input  form__input_massage" type="text" placeholder="Massage" />
                        <button className="form__btn" type="submit">Submit</button>
                    </form>
                    <div className="footer-form__aside">
                        <a href="http://">Up</a>
                        <div className="footer-form__created">
                            ©2023 BY JOEY DIXON. PROUDLY CREATED WITH
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}