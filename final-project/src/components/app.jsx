import React from 'react';
import '../styles/bace.scss';
import '../styles/header.scss';

import '../styles/fontawesome-free-5.15.1-web/scss/fontawesome.scss';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



import { Home } from './home'
import { Traning } from './traning'
import { About } from './about'
import { Winnings } from './winnings'
import { Studio } from './studio'
import { Mobile } from './mobile'
import { Footer } from './footer'
import { Book } from './book'
import { Plans } from './plans'


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
            <Router>
                <div className="page">
                    <header className="header">
                        <nav className={navList}>
                            <button onClick={this.onToggleMenu} className="nav-menu__toggle">
                                <span className="nav-menu__toggle-line"></span>
                            </button>
                            <ul className="nav-menu__list">

                                <li className="nav-menu__item"><Link to="/">Home</Link></li>
                                <li className="nav-menu__item"><Link to="/">TRANING</Link></li>
                                <li className="nav-menu__item"><Link to="/">ABOUT</Link></li>
                                <li className="nav-menu__item"><Link to="/">WINNINGS</Link></li>
                                <li className="nav-menu__item"><Link to='/'

                                >THE STUDIO</Link></li>
                                <li>
                                    <Link className="nav-menu__item" to="/book" >BOOK ONLINE</Link>
                                </li>
                                <li>
                                    <Link className="nav-menu__item" to="/plans" >PLANS</Link>
                                </li>
                                <li className="nav-menu__item">CONTACT</li>
                                <button className="nav-menu__login-btn">Log in
                            <AccountCircleIcon style={{ fontSize: 30 }} className="nav-menu__ligin-icon" />
                                </button>
                            </ul>
                        </nav>
                    </header>

                    <Switch>


                        <Route exact path="/">
                            <Home name="home" />
                            <Traning id="traning" />
                            <About name="about" />
                            <Winnings id="winnings" />
                            <Studio id="studio" />
                            <Mobile name="mobile" />
                        </Route>



                        <Route path="/book">
                            <Book />
                        </Route>
                        <Route path="/plans">
                            <Plans />
                        </Route>
                    </Switch>


                    <Footer id="footer" />
                </div>
            </Router>
        )
    }
}