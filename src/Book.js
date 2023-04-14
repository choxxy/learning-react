

const Book = (props) => {
  const { id, img, title, author } = props.book
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

export default Book