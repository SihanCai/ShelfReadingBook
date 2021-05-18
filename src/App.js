import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import BookList from './BookList';
import Search from './Search';


class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    this.fetch_book_details()
  }

  fetch_book_details = () => {
    BooksAPI.getAll()
    .then((books) => {
       this.setState(() => ({
          books,
          currentlyReading: books.filter((book) => (book.shelf === "currentlyReading")),
          wantToRead: books.filter((book) => (book.shelf === "wantToRead")),
          read: books.filter((book) => (book.shelf === "read"))
       }))
    })
    
  }

  update_books_details = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
        this.fetch_book_details()
    })
  }

  render() {
    return (
      <div className="app">
          <Route exact path="/" render={() => 
              <BookList 
                    currentlyReading={this.state.currentlyReading} 
                    wantToRead={this.state.wantToRead}
                    read={this.state.read}
                    onChange = {this.update_books_details}      
              />}/>
          <Route examt path="/search" render={({ history })=>(<Search books={this.state.books} onChange={this.update_books_details}/>)}/>
      </div>
    )
  }
}

export default BooksApp
