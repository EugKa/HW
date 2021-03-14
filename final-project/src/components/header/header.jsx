import React from 'react'
import './header.scss';

import { Link as RouteLink } from "react-router-dom";
import { Link as scroll, scrollSpy, scroller, Link } from 'react-scroll'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Modal } from '../modal/modal'
import { routes } from '../app/routes';
export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.targetElement = document.querySelector('body');
        this.state = {
            activeMenu: false,
        }
    }
    toggleSideBar = () => {
        this.setState(({ activeMenu }) => {
            return { activeMenu: !activeMenu }
        }, this.updateBodyStyles);
    }

    updateBodyStyles = () => {
        if (this.state.activeMenu) {
            disableBodyScroll(this.targetElement);
        } else {
            enableBodyScroll(this.targetElement);
        }
    }

    toElement = () => {
        this.setState(
            { activeMenu: false }, this.updateBodyStyles)

    }

    render() {
        let navList = 'nav-menu'
        if (this.state.activeMenu) {
            navList += ' active'

        }
        return(
            <header className="header">
                        <nav className={navList}>
                            <button onClick={this.toggleSideBar} className="nav-menu__toggle">
                                <span className="nav-menu__toggle-line"></span>
                            </button>
                            <ul className="nav-menu__list">
                                {routes.map((route, i) =>  
                                     {
                                        if (route.isScrolled) {
                                            return <li key={i}  className="nav-menu__item">
                                            <Link   onClick={this.toElement} 
                                                    to={route.name} 
                                                    spy={true} 
                                                    smooth={true} 
                                                    offset={0}
                                                    duration={500}>
                                                        <RouteLink className="nav-menu__link"  to={route.path}>
                                                            {route.title}
                                                        </RouteLink>
                                            </Link>
                                        </li>        
                                    } else {
                                        return <li key={i}  className="nav-menu__item">
                                        <RouteLink  
                                                    onClick={this.toElement} 
                                                    className="nav-menu__link" 
                                                    to={route.path}>{route.title}
                                        </RouteLink>
                                    </li>
                                        
                                    }
                                    }
                                )}
                                <Modal />
                            </ul>
                        </nav>
                    </header>
        )
    }
}