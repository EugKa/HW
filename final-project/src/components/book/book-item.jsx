import React from 'react';
import { ROUTES_URL } from '../app/routes';
import {
    Link as RouteLink,
} from "react-router-dom";
import './book.scss'

export class BookItem extends React.Component {
    render() {
        const { image, title, price, text } = this.props;
        return (
            <li className="book__item">
                <img className="book__img" src={image} alt="" />
                <div className="book__wrapper">
                    <div className="book__type">{title}</div>
                    <div className="book__price">{price}</div>
                    <RouteLink className="book__link" to={ROUTES_URL.DEFAULT}>{text}</RouteLink>
                </div>
            </li>
        )
    }
}