import React from 'react';
import './bace.scss';
import './header.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouteLink,
    Redirect
} from "react-router-dom";

// import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';



import { Home } from '../home/home'
import { Traning } from '../traning/traning'
import { About } from '../about/about'
import { Winnings } from '../winnings/winnings'
import { Studio } from '../studio/studio'
import { Mobile } from '../mobile/mobile'
import { Footer } from '../footer/footer'
import { Book } from '../book/book'
import { Plans } from '../plans/plans'

import { Header } from '../header/header';
import { routes, ROUTES_URL } from './routes';


export class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="page"  >
                    <Header />
                    <Switch>
                        <Route exact path={ROUTES_URL.DEFAULT}>
                            <Home />
                            <Traning />
                            <About />
                            <Winnings />
                            <Studio />
                            <Mobile />
                        </Route>
                        <Route path={ROUTES_URL.BOOK} render={() => <Book />} />
                        <Route path={ROUTES_URL.PLANS} render={() => <Plans />} />
                    </Switch>

                    <Route path={ROUTES_URL.DEFAULT} render={() => <Footer />} />
                </div>
            </Router>


        )
    }
}