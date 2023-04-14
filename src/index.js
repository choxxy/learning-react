import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './books';
import Book from './Book'

const BookList = () => {
  // listeners can also be passed as reference in props
  const bookSelectedListener = (bookId) => {
    const book = books.find((book) => book.id === bookId)
    alert('Clicked on ' + book.title)
  }

  return (
    <div>
      <section className="booklist">
        <EventExample />
        {books.map((book) => {
          return (
            <Book book={book} key={book.id} selectBook={bookSelectedListener} />
          )
        })}
      </section>
      <section className="booklist">
        {books.map((book) => {
          return (
            <BookDestrucuredParams
              book={book}
              key={book.id}
              selectBook={bookSelectedListener}
            />
          )
        })}
      </section>

      <section className="booklist">
        {books.map((book) => {
          return (
            <BookWithSpread
              {...book}
              key={book.id}
              selectBook={bookSelectedListener}
            />
          )
        })}
      </section>
    </div>
  )
}

const EventExample = () => {
  const handleInputChange = (e) => {
    console.log('handled input change event')
    console.log(e.target.name)
    console.log(e.target.value)
  }

  const handleButtonClick = (e) => {
    alert('handled button clicked  event')
  }

  const handleFormSubmission = (e) => {
    e.preventDefault() // tell js we want to handle submission ourselves
    alert('handled button clicked  event')
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h4> Form Example with input </h4>
        <input
          type="text"
          name="input"
          onChange={handleInputChange}
          style={{ margin: '1rem' }}
        />
      </form>
      <button onClick={handleButtonClick}> Click Me!</button>
    </section>
  )
}

const BookWithSpread = (props) => {
  const { id, img, title, author } = props
  const listener = props.selectBook
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => listener(id)}>Select Book</button>
    </article>
  )
}


// alternatively

const BookDestrucuredParams = ({
  book: { id, img, title, author },
  selectBook,
}) => {

  // here we use a wrapper
  const getBook = () => {
     selectBook(id);
  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={getBook}>Select Book</button>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
