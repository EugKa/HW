import React from 'react';

import '../../styles/modal.scss'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import facelog from '../../assets/facelog.png';
import googlelog from '../../assets/googlelog.png';
import { Portal } from './portal';

export class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    onCancel = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    };


    render() {

        const { showModal } = this.state;

        return (
            <li className="nav-menu__item">
                <button
                    className="nav-menu__login-btn"
                    onClick={this.onCancel}>Log in
                    <AccountCircleIcon
                        style={{ fontSize: 30 }}
                        className="nav-menu__ligin-icon" />
                </button>
                {
                    showModal ? (
                        <Portal>
                            <div className="modal-window__wrapper">
                                <h1 className="modal-window__title">Sign Up</h1>
                                <div className="modal-window__content">
                                    <div className="modal-window__subt">
                                        <span> Aready a member?</span>
                                        <span className="modal-window__subt_two"> Log In </span>
                                    </div>
                                    <div className="modal-window__links">
                                        <button className="modal-window__link modal-window__link_facebook" href="http://">
                                            <img className="modal-window__logo" src={facelog} alt="" />
                                            <div className="modal-window__txt">Sing up with Facebook</div>
                                        </button>
                                        <button className="modal-window__link modal-window__link_google" href="http://">
                                            <img className="modal-window__logo modal-window__logo_google" src={googlelog} alt="" />
                                            <div className="modal-window__txt">Sing up with Google</div>
                                        </button>
                                    </div>
                                    <div className="modal-window__lines">
                                        <span className="modal-window__line"></span>
                                        <span>or</span>
                                        <span className="modal-window__line"></span>
                                    </div>
                                    <button className="modal-window__link modal-window__link_email" href="http://">Sing up with email</button>
                                </div>

                                <button
                                    className="modal-window__btn-cancel"
                                    onClick={this.onCancel}>X
                                </button>
                            </div>
                        </Portal>
                    ) : null
                }

            </li>
        );
    }
}