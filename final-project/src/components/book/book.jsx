import React from 'react';
import './book.scss'

import { BookItem } from './book-item'
import { DataService } from '../DataService/DataService';

export class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookData: [],
        }
        this.dataService = new DataService()
        this.getBookData()
    }

    getBookData() {
        this.dataService.getBook().then((bookData) => {
            this.setState({ bookData })
        })
    }

    render() {
        const { bookData } = this.state;
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