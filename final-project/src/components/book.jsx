import React from 'react';
import '../styles/book.scss'

import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';

export class Book extends React.Component {
    render() {
        return (
            <div className="book">
                <h1 className="book__title">
                    MY CLASSES
                </h1>
                <div className="book__cotent">
                    <ul className="book__list">
                        <li className="book__item">
                            <img className="book__img" src={book1} alt="" />
                            <div className="book__wrapper">
                                <div className="book__type">BoxFit</div>
                                <div className="book__price">60 USD</div>
                                <a className="book__link" href="http://">Book Now</a>
                            </div>
                        </li>
                        <li className="book__item">
                            <img className="book__img" src={book2} alt="" />
                            <div className="book__wrapper">
                                <div className="book__type">Boxing for Beginners</div>
                                <div className="book__price">60 USD</div>
                                <a className="book__link" href="http://">Book Now</a>
                            </div>
                        </li>
                        <li className="book__item">
                            <img className="book__img" src={book3} alt="" />
                            <div className="book__wrapper">
                                <div className="book__type">Boxing for Pros</div>
                                <div className="book__price">60 USD</div>
                                <a className="book__link" href="http://">Book Now</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}