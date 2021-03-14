import React from 'react';
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
                    <a className="book__link" href="http://">{text}</a>
                </div>
            </li>
        )
    }
}