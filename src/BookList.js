import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

class  BookList extends Component {
         render(){
          return(
              <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <div className="list-books-content">
                    <div>
                      <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                          <ol className="books-grid">
                              <Bookshelf books={this.props.currentlyReading} onChangeShelf = {this.props.onChange}/>
                          </ol>
                        </div>
                      </div>
                      <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                          <ol className="books-grid">
                              <Bookshelf books={this.props.wantToRead} onChangeShelf = {this.props.onChange}/>
                          </ol>
                        </div>
                      </div>
                      <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                          <ol className="books-grid">
                              <Bookshelf books={this.props.read} onChangeShelf = {this.props.onChange}/>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="open-search">
                    <Link to='/search'>
                        <button>Add a book</button>
                    </Link>
                  </div>
                </div>
          )
    }
}

export default BookList;