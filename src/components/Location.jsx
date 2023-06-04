import axios from "axios"

const Location = ({ location, setLocation }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.newLocation.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err))
  }

  return (
    <section>
      {/* Input de búsqueda  */}
      <form onSubmit={handleSubmit}>
        <input id='newLocation' className="px-1 text-black" placeholder="Type a location id" type="text" />
        <button>Search<i className="bx bx-search"></i></button>
      </form>

      {/* Info de location  */}
      <section>
        <h2>{location?.name}</h2>
        <ul>
          <li><b>type:</b> {location?.type}</li>
          <li><b>dimension:</b> {location?.dimension}</li>
          <li><b>population:</b> {location?.residents.length}</li>
        </ul>
      </section>
    </section>
  )
}
export default Location