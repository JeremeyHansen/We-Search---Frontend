import { useState, useEffect } from 'react'
export default function Home({ places }) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [image_url, setImage_url] = useState('')

  //post request to submit a new place
  function handleSubmit(e) {
    e.preventDefault()
    const place = { name, category, price, location, image_url }
    fetch('http://localhost:9292/places', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(place),
    }).then(
      setName(''),
      setCategory(''),
      setPrice(''),
      setLocation(''),
      setImage_url(''),
    )
  }

  //setting timer to change text of button
  const text = 'Submit'
  const [buttonText, setButtonText] = useState(text)

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonText(text)
    }, 1000)
    return () => clearTimeout(timer)
  }, [buttonText])

  return (
    <>
      <h1 className="title">
        Add a <span className="new">NEW</span> Place
      </h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            required=""
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="category"
            placeholder="Category"
            required=""
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            name="price"
            placeholder="Price"
            required=""
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            name="location"
            required=""
            placeholder="Address"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            name="image_url"
            required=""
            placeholder="Image URL"
            type="text"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          />
          <button
            className="submit-button"
            type="submit"
            onClick={() => setButtonText('Submitted!')}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </>
  )
}
