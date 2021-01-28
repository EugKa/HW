import React from 'react';
import '../../styles/book.scss'

import { BookItem } from './book-item'

export class Book extends React.Component {

    render() {
        const { bookData } = this.props;
        return (
            <div className="book">
                <h1 className="book__title">
                    MY CLASSES
                </h1>
                <div className="book__cotent">
                    <ul className="book__list">
                        {bookData.map(item => {
                            return <BookItem {...item} key={item.id} />
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}