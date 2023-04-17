import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './books';
import Title from './Title';
import Book from './Book';

const BookList = () => {
  // listeners can also be passed as reference in props
  const bookSelectedListener = (bookId) => {
    const book = books.find((book) => book.id === bookId)
    alert('Clicked on ' + book.title)
  }

  return (
    <>
      <section className="title">
        <Title text={'Best Sellers in Books'} />
      </section>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book
              book={book}
              key={book.id}
              number={index}
              selectBook={bookSelectedListener}
            />
          )
        })}
      </section>
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
