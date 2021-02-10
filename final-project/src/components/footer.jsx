import React from 'react';
import '../styles/footer.scss';
import facebook from '../assets/facebook2.png';
import twitter from '../assets/twitter2.png';
import instagram from '../assets/instagram2.png';
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import { animateScroll as scroll } from 'react-scroll'
const validEmailRegex =
    RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
export class Footer extends React.Component {
    state = {
        name: '',
        email: '',
        subject: '',
        textarea: '',
        errors: { name: '', email: '', subject: '', textarea: '', },

    }
    scrollToTop = () => {
        scroll.scrollToTop();
    }

    handleSubmit = (e) => {
        e.preventDefault()


        if (this.validateForm(this.state.errors)) {
            fetch("http://localhost:4000/form", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: "cors",
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    subject: this.state.subject,
                    textarea: this.state.textarea
                })
            })
                .then(response => response.json())
                .then((data) => {
                    this.setState({
                        name: '',
                        email: '',
                        subject: '',
                        textarea: '',
                    })
                    console.log(data);
                })
                .catch(error => console.log(error))
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }

    }

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
        return valid
    }

    handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        // console.log(name, value);
        // this.setState({
        //     [name]: value
        // })

        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;

        switch (name) {
            case 'name':
                errors.name =
                    value.length < 5
                        ? "must bu"
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'subject':
                errors.subject =
                    value.length < 8
                        ? 'Subject! must be 5 characters long'
                        : '';
                break;
            case 'textarea': errors.textarea =
                errors.value < 8
                    ? 'textarea must be a characters long' : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value }, () => {
            console.log(errors)
        })
    }

    render() {
        const { errors } = this.state;
        return (
            <footer className="footer">
                <div className="footer-contacts">
                    <div className="footer-contacts__info">
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
                    </div>
                    <div className="footer-contacts__links">
                        <a className="footer-contacts__link" href="https://www.facebook.com/wix">
                            <img className="footer-contacts__img" src={facebook} alt="" />
                        </a>
                        <a className="footer-contacts__link" href="https://twitter.com/wix">
                            <img className="footer-contacts__img" src={twitter} alt="" />
                        </a>
                        <a className="footer-contacts__link" href="https://www.instagram.com/wix/">
                            <img className="footer-contacts__img" src={instagram} alt="" />
                        </a>
                    </div>
                </div>
                <div className="footer-form">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form__name">
                            <input className={errors.name.length > 0 ? "form__input_error" : "form__input"}
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />

                        </div>
                        <div className="form__email">
                            <input className={errors.email.length > 0 ? "form__input_error" : "form__input"}
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />

                        </div>
                        <div className="form__subject">
                            <input className={errors.subject.length > 0 ? "form__input_error" : "form__input"}
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                value={this.state.subject}
                                onChange={this.handleChange}
                            />

                        </div>
                        <div className="form__textarea">
                            <textarea className={errors.textarea.length > 0 ? "form__input_error" : "form__input form__input_massage"}
                                type="text"
                                placeholder="Massage"
                                name="textarea"
                                value={this.state.textarea}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button className="form__btn" type="submit">Submit</button>
                    </form>
                    <div className="footer-form__aside">
                        <button
                            onClick={this.scrollToTop}
                            className="footer-form__link">
                            <ExpandLessIcon fontSize="large" />
                        </button>
                        <div className="footer-form__created">
                            ©2023 BY JOEY DIXON. PROUDLY CREATED WITH
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}