import axios from "axios"

const Location = ({ location, setLocation }) => {

  //? Input no controlado 

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.newLocation.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err))
  }

  return (
    <section className="bg-[url(/images/background-header.png)] bg-cover min-h-[200px] bg-center w-[100%]">
      <div className="bg-[url(/images/logo.png)] h-[250px] bg-cover bg-center flex min-[700px]:h-[350px] min-[1024px]:h-[450px]">
      </div>
      {/* Input de búsqueda no controlado */}
      <form className="flex justify-center mx-auto mb-9 px-6 sm:px-40 max-w-[1024px]" onSubmit={handleSubmit}>
        <input id='newLocation'
          className="w-[100%] outline-none border-2 border-green-500 px-1 py-3 text-center bg-black/80 text-white text-sm min-[700px]:text-xl min-[1000px]:text-2xl"
          placeholder="Type a location id..."
          type="text"
          autoComplete="off" />
        <button className="bg-green-500 p-4"><img src='/search-icon.png' alt="" /></button>
      </form>

      {/* Tile */}
      <div className="flex justify-center">
        <h2 className="text-green-500 text-xl min-[700px]:text-3xl mb-10 text-center">Wellcome to the crazy universe!</h2>
      </div>

      {/* Info de location */}
      <div className="mx-auto">
        <section className="bg-black/80 border-2 border-green-400 flex flex-col justify-items-center p-10 items-center gap-6 capitalize min-[700px]:mx-20">
          <h2 className="text-center text-2xl text-green-400">{location?.name}</h2>
          <ul className="text-xl flex flex-wrap gap-6 p-4">
            <li><b className="text-gray-500">type:</b> {location?.type}</li>
            <li><b className="text-gray-500">dimension:</b> {location?.dimension}</li>
            <li><b className="text-gray-500">population:</b> {location?.residents.length}</li>
          </ul>
        </section>
      </div>
    </section >
  )
}
export default Location