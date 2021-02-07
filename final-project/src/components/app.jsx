import React from 'react';
import '../styles/bace.scss';
import '../styles/header.scss';

import '../styles/fontawesome-free-5.15.1-web/scss/fontawesome.scss';



import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';



import { Home } from './home'
import { Traning } from './traning/traning'
import { About } from './about'
import { Winnings } from './winnings/winnings'
import { Studio } from './studio'
import { Mobile } from './mobile'
import { Footer } from './footer'
import { Book } from './book/book'
import { Plans } from './plans/plans'
import { Modal } from './modal/modal'



export class App extends React.Component {
    constructor(props) {
        super(props)
        this.targetElement = document.querySelector('body');


        this.state = {
            activeMenu: false,

            data: {
                tranings: [
                    { id: 1, title: "BEGINNERS", image: "https://static.wixstatic.com/media/ff6bf6_ad881f0e977347c8912530d98da3f632.jpg/v1/fill/w_640,h_452,al_c,q_80,usm_0.66_1.00_0.01/ff6bf6_ad881f0e977347c8912530d98da3f632.webp", sircl: "https://static.wixstatic.com/media/ff6bf6_40e4464af2d14b6097571d81bb91f384~mv2.png/v1/fill/w_51,h_51,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_40e4464af2d14b6097571d81bb91f384~mv2.webp" },
                    { id: 2, title: "PROFESSIONALS", image: "https://static.wixstatic.com/media/ff6bf6_8945ebc2d7b04e76a872928617266cf5.jpg/v1/fill/w_640,h_452,al_c,q_80,usm_0.66_1.00_0.01/ff6bf6_8945ebc2d7b04e76a872928617266cf5.webp", sircl: "https://static.wixstatic.com/media/ff6bf6_40e4464af2d14b6097571d81bb91f384~mv2.png/v1/fill/w_51,h_51,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_40e4464af2d14b6097571d81bb91f384~mv2.webp" }
                ],
                winnings: {
                    winInfo: [
                        { id: 1, title: "15", subt: "15 YEARS OF BOXING EXPERIENCE" },
                        { id: 2, title: "3", subt: "3 TIMES WBA INTERCONTINENTAL CRUISERWEIGHT" },
                        { id: 3, title: "4", subt: " 4 TIMES WBC INTERCONTINENTAL CRUISERWEIGHT" },
                        { id: 4, title: "2", subt: "2 TIMES IBF INTERCONTINENTAL CRUISERWEIGHT" }],

                    winGallery: [
                        { id: 1, image: "https://static.wixstatic.com/media/84770f_ea85fd5bfc064ad19d6e9385958fe6d7~mv2.jpg/v1/fill/w_363,h_205,fp_0.78_0.27,q_90/84770f_ea85fd5bfc064ad19d6e9385958fe6d7~mv2.jpg", overlayTitle: "I'm an image title", overlaySubt: "Describe your image here. Use catchy text to tell people the story behind thhe photo. Go to 'Manage Media' to add your content" },
                        { id: 2, image: "https://static.wixstatic.com/media/84770f_406382b889904549b0a1e4453533e3d7~mv2.jpg/v1/fill/w_364,h_205,fp_0.50_0.50,q_90/84770f_406382b889904549b0a1e4453533e3d7~mv2.jpg", overlayTitle: "I'm an image title", overlaySubt: "Describe your image here. Use catchy text to tell people the story behind thhe photo. Go to 'Manage Media' to add your content" },
                        { id: 3, image: "https://static.wixstatic.com/media/84770f_e1939662fded4b80b4c63462494cf533~mv2.jpg/v1/fill/w_363,h_205,fp_0.59_0.30,q_90/84770f_e1939662fded4b80b4c63462494cf533~mv2.jpg", overlayTitle: "I'm an image title", overlaySubt: "Describe your image here. Use catchy text to tell people the story behind thhe photo. Go to 'Manage Media' to add your content" },
                        { id: 4, image: "https://static.wixstatic.com/media/84770f_92f0f39d1f7141c0b6e7429c66369770~mv2.jpg/v1/fill/w_363,h_205,fp_0.50_0.50,q_90/84770f_92f0f39d1f7141c0b6e7429c66369770~mv2.jpg", overlayTitle: "I'm an image title", overlaySubt: "Describe your image here. Use catchy text to tell people the story behind thhe photo. Go to 'Manage Media' to add your content" },
                        { id: 5, image: "https://static.wixstatic.com/media/84770f_c40bda0193a3419a94962d23757d702e~mv2.jpg/v1/fill/w_364,h_205,fp_0.50_0.50,q_90/84770f_c40bda0193a3419a94962d23757d702e~mv2.jpg", overlayTitle: "I'm an image title", overlaySubt: "Describe your image here. Use catchy text to tell people the story behind thhe photo. Go to 'Manage Media' to add your content" },
                        { id: 6, image: "https://static.wixstatic.com/media/84770f_6bbbe0015dfc43df97a1f6b094fbf7e0~mv2.jpg/v1/fill/w_363,h_205,fp_0.50_0.50,q_90/84770f_6bbbe0015dfc43df97a1f6b094fbf7e0~mv2.jpg", overlayTitle: "I'm an image title", overlaySubt: "Describe your image here. Use catchy text to tell people the story behind thhe photo. Go to 'Manage Media' to add your content" }],
                },
                book: [
                    { id: 1, image: "https://static.wixstatic.com/media/c03e76b555b443bb89a250a681b9b0a1.jpg/v1/fill/w_290,h_194,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/c03e76b555b443bb89a250a681b9b0a1.webp%22", title: "BoxFit", price: "60 USD", text: "Book Now" },
                    { id: 2, image: "https://static.wixstatic.com/media/268481235d914a1cbb53bc43b8c73c05.jpg/v1/fill/w_290,h_194,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/268481235d914a1cbb53bc43b8c73c05.webp%22", title: "Boxing for Beginners", price: "60 USD", text: "Book Now" },
                    { id: 3, image: "https://static.wixstatic.com/media/806385b860574afb8f9eee510ff3b0fc.jpg/v1/fill/w_290,h_194,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/806385b860574afb8f9eee510ff3b0fc.webp", title: "Boxing for Pros", price: "60 USD", text: "Book Now" }
                ],
                plans: [
                    { id: 1, title: "Silver Membership", currency: "$", price: "30", period: "", clasz: "Short-term trial for beginners", valid: "Valid for one month", btnTxt: "Select", privilege1: "Unlimited classes", privilege2: "Fitness assessment", privilege3: "Locker room with showers" },
                    { id: 2, title: "Gold Membership", currency: "$", price: "25", period: "Every month", clasz: "Ideal for advanced trainers", valid: "Valid for 12 months", btnTxt: "Select", privilege1: "Unlimited classes", privilege2: "Fitness assessment", privilege3: "Locker room with showers", privilege4: "Free parking", bestValue: "Best Value" },
                    { id: 3, title: "Platinum Membership", currency: "$", price: "40", period: "Every month", clasz: "Perfect for committed trainers", valid: "", btnTxt: "Select", privilege1: "Unlimited classes", privilege2: "Private training", privilege3: "Locker room with showers", privilege4: "Free parking", privilege5: "Guest privileges" }
                ],
            }
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


        const { data } = this.state;
        return (
            <Router>
                <div className="page"  >
                    <header className="header">
                        <nav className={navList}>
                            <button onClick={this.toggleSideBar} className="nav-menu__toggle">
                                <span className="nav-menu__toggle-line"></span>
                            </button>
                            <ul className="nav-menu__list">
                                <li className="nav-menu__item"><Link onClick={this.toElement} className="nav-menu__link" to="/">HOME</Link></li>
                                <li className="nav-menu__item"><Link onClick={this.toElement} className="nav-menu__link" to="/">TRANING</Link></li>
                                <li className="nav-menu__item"><Link onClick={this.toElement} className="nav-menu__link" to="/">ABOUT</Link></li>
                                <li className="nav-menu__item"><Link onClick={this.toElement} className="nav-menu__link" to="/">WINNINGS</Link></li>
                                <li className="nav-menu__item"><Link onClick={this.toElement} className="nav-menu__link" to="/" >THE STUDIO</Link></li>
                                <li className="nav-menu__item"><Link onClick={this.toElement} className="nav-menu__link" to="/book" >BOOK ONLINE</Link></li>
                                <li className="nav-menu__item"><Link onClick={this.toElement} className="nav-menu__link" to="/plans" >PLANS</Link></li>
                                <li className="nav-menu__item"><Link onClick={this.toElement} className="nav-menu__link" to="/" >CONTACT</Link></li>
                                <Modal />
                            </ul>
                        </nav>
                    </header>

                    <Switch>
                        <Route exact path="/">
                            <Home name="home" />
                            <Traning
                                name="traning"
                                traningData={data.tranings}
                            />
                            <About name="about" />
                            <Winnings
                                name="winnings"
                                winData={data.winnings}

                            />
                            <Studio name='studio' />
                            <Mobile id="mobile" />
                        </Route>

                        <Route path="/book">
                            <Book bookData={data.book} />
                        </Route>
                        <Route path="/plans">
                            <Plans plansData={data.plans} />
                        </Route>
                    </Switch>
                    <Footer id="footer" />

                </div>
            </Router>
        )
    }
}