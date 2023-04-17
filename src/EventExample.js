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


export default EventExample