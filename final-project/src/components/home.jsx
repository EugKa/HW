import React from 'react';
import '../styles/grid.scss'
import '../styles/home.scss'
import { Link } from "react-router-dom";


export class Home extends React.Component {

    render() {

        return (
            <div className="home">
                <div className="home__wrapper ">
                    <img className="home__img" src="https://static.wixstatic.com/media/ff6bf6_1e7fa400b61f4eb0b3f5cb5bca3fb2bc.jpg/v1/fill/w_980,h_1080,al_c,q_85/ff6bf6_1e7fa400b61f4eb0b3f5cb5bca3fb2bc.webp" alt="" />
                    <div className="home__content ">
                        <h1 className="home__title">JOEY DIXON</h1>
                        <h3 className="home__subt">TRAINING WITH A WORLD CHAMPION</h3>

                        <Link className="home__btn" to="/book">Book Now</Link>
                    </div>
                </div>

            </div>
        )
    }
}