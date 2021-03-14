import React from 'react';
import './mobile.scss';
import scree from '../../assets/scree.png';
import google from '../../assets/google.png';
import apple from '../../assets/apple.png';

export class Mobile extends React.Component {
    state = {
        country: '',
        phone: '',
        errors: {}
    }
    handleChange = (e) => {
        const num = e.target.name;
        const value = e.target.value;
        console.log(num, value);

        this.setState({
            [num]: value
        })
    }
    validate = () => {

    }
    handleSubmit = (e) => {
        e.preventDefault();
        // const data = {
        //     country: this.state.country,
        //     phone: this.state.phone
        // }


        // fetch("http://localhost:4000/form", {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     mode: "cors",
        //     body: JSON.stringify({
        //         country: this.state.country,
        //         phone: this.state.phone,

        //     })
        // })
        //     .then(response => response.json())
        //     .then((data) => {
        //         this.setState({
        //             country: '',
        //             phone: '',
        //         })
        //         console.log(data);
        //     })
        //     .catch(error => console.log(error))
    }
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
                        <form className="mobile-join__form" onSubmit={this.handleSubmit}>
                            <input className="mobile-join__input mobile-join__input-country"
                                placeholder="+380"
                                type="text" value={this.state.country}
                                name="country"
                                onChange={this.handleChange} />
                            <input className="mobile-join__input mobile-join__input-phone"
                                placeholder="Phone Number"
                                type="text" value={this.state.phone}
                                name="phone"
                                onChange={this.handleChange} />
                            <button type="submit" className="mobile-join__btn" onSubmit={this.handleSubmit}>Send</button>
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