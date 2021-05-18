import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {

    update_book = (book, shelf) => {
        this.props.onChangeShelf(book, shelf)
    }

    render() {
        const books = this.props.books;
        return (
            <div className="bookshelf">
                        <div className="bookshelf-books">
                          <ol className="books-grid">
                            {
                             books.map((book, index) => {
                                    return(
                                       <Book book={book} key={index} onUpdate={(shelf) => {
                                           this.update_book(book, shelf)
                                       }}/>
                                    )
                                })
                            }
                          </ol>
                        </div>
            </div>
        )
    }
}

export default Bookshelf;