import React from 'react';
import '../styles/bace.scss';
import '../styles/header.scss';

import '../styles/fontawesome-free-5.15.1-web/scss/fontawesome.scss';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
                            <li className="nav-menu__item">HOME</li>
                            <li className="nav-menu__item">TRANING</li>
                            <li className="nav-menu__item">ABOUT</li>
                            <li className="nav-menu__item">WINNINGS</li>
                            <li className="nav-menu__item">THE STUDIO</li>
                            <li className="nav-menu__item">BOOK ONLINE</li>
                            <li className="nav-menu__item">PLANS</li>
                            <li className="nav-menu__item">CONTACT</li>
                            <button className="nav-menu__login-btn">Log in
                            <AccountCircleIcon style={{ fontSize: 30 }} className="nav-menu__ligin-icon" />
                            </button>
                        </ul>
                    </nav>
                </header>
                <Home />
                <Traning />
                <About />
                <Winnings />
                <Studio />
                <Mobile />
                <Footer />
            </div>
        )
    }
}