import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    id: 1,
    title: 'Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel',
    author: 'Dav Pilkey',
    img: './images/book-1.jpg',
  },
  {
    id: 2,
    title: 'The Return of the Gods',
    author: 'Jonathan Cahn',
    img: 'https://images-na.ssl-images-amazon.com/images/I/913UqrSJf6L._AC_UL127_SR127,127_.jpg',
  },
  {
    id: 3,
    title: 'The 48 Laws of Power',
    author: 'Robert Greene',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL127_SR127,127_.jpg',
  },
  {
    id: 4,
    title: 'Lessons in Chemistry: A Novel',
    author: 'Bonnie Garmus',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL127_SR127,127_.jpg',
  },
]

const BookList = () => {
  return (
    <div>
      <section className="booklist">
        {books.map((book) => {
          return <Book book={book} key={book.id} />
        })}
      </section>
      <section className="booklist">
        {books.map((book) => {
          return <BookDestrucuredParams book={book} key={book.id} />
        })}
      </section>

      <section className="booklist">
        {books.map((book) => {
          return <BookWithSpread {...book} key={book.id} />
        })}
      </section>
    </div>
  )
}


const BookWithSpread = (props) => {
  const { img, title, author } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const Book = (props) => {
  const { img, title, author } = props.book
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}
// alternatively

const BookDestrucuredParams = ({ book: { img, title, author } }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
