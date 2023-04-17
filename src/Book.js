

const Book = (props) => {
  const { id, img, title, author } = props.book
  const listener = props.selectBook
  const number = props.number
 
  return (
    <div>
      <article className="book">
        <span className="number"> {`# ${number + 1}`} </span>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <button onClick={() => listener(id)}>Select Book</button>
      </article>
    </div>
  )
}

export default Book