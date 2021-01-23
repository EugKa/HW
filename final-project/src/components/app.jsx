import React from 'react';
import '../styles/bace.scss';
import '../styles/header.scss';

import '../styles/fontawesome-free-5.15.1-web/scss/fontawesome.scss';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { Link } from "react-scroll";

import { Home } from './home'
import { Traning } from './traning'
import { About } from './about'
import { Winnings } from './winnings'
import { Studio } from './studio'
import { Mobile } from './mobile'
import { Footer } from './footer'

export class App extends React.Component {
    state = {
        activeMenu: false,
    }

    onToggleMenu = () => {
        this.setState(({ activeMenu }) => {
            return {
                activeMenu: !activeMenu
            }
        })
    }
    render() {
        let navList = 'nav-menu'
        if (this.state.activeMenu) {
            navList += ' active'
        }
        return (
            <div className="page">

                <header className="header">
                    <nav className={navList}>
                        <button onClick={this.onToggleMenu} className="nav-menu__toggle">
                            <span className="nav-menu__toggle-line"></span>
                        </button>
                        <ul className="nav-menu__list">
                            <li className="nav-menu__item">
                                <Link activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>HOME
                                </Link>
                            </li>
                            <li className="nav-menu__item">
                                <Link activeClass="active"
                                    to="traning"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >TRANING
                                </Link>
                            </li>
                            <li className="nav-menu__item">
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >ABOUT
                                </Link>
                            </li>
                            <li className="nav-menu__item">
                                <Link
                                    activeClass="active"
                                    to="winnings"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >WINNINGS
                                </Link>
                            </li>
                            <li className="nav-menu__item">
                                <Link
                                    activeClass="active"
                                    to="studio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >THE STUDIO
                                </Link>
                            </li>
                            <li className="nav-menu__item">BOOK ONLINE</li>
                            <li className="nav-menu__item">PLANS</li>
                            <li className="nav-menu__item">
                                <Link
                                    activeClass="active"
                                    to="footer"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >CONTACT
                                </Link>
                            </li>
                            <button className="nav-menu__login-btn">Log in
                            <AccountCircleIcon style={{ fontSize: 30 }} className="nav-menu__ligin-icon" />
                            </button>
                        </ul>
                    </nav>
                </header>
                <main className="main">
                    <Home id="home" />
                    <Traning id="traning" />
                    <About id="about" />
                    <Winnings id="winnings" />
                    <Studio id="studio" />
                    <Mobile id="mobile" />
                </main>
                <Footer id="footer" />
            </div>
        )
    }
}