import React from 'react';

import '../styles/home.scss'


export class Home extends React.Component {

    render() {

        return (
            <div className="home">
                <div className="home__wrapper">
                    <div className="home__content">
                        <h1 className="home__title">JOEY DIXON</h1>
                        <h3 className="home__subt">TRAINING WITH A WORLD CHAMPION</h3>
                        <button className="home__btn">Book Now</button>
                    </div>
                </div>

            </div>
        )
    }
}