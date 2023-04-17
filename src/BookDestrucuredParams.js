
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

export default BookDestrucuredParams