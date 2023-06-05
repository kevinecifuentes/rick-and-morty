import axios from "axios"
import { useEffect, useState } from "react"

const Location = ({ location, setLocation }) => {

  //? Input no controlado 

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newLocation = e.target.newLocation.value

  //   const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

  //   axios.get(URL)
  //     .then(({ data }) => setLocation(data))
  //     .catch((err) => console.log(err))
  // }

  //? Input controlado 
  const [getLocation, setGetLocation] = useState('')
  // const [searchDimenson, setSearchDimenson] = useState(second)

  const handleLocation = (e) => {
    e.preventDefault()
    const newLocationControlled = e.target.value

      `https://rickandmortyapi.com/api/location/?name${value}`

    const URL = `https://rickandmortyapi.com/api/location/${newLocationControlled}`

    axios.get(URL)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {

  }, [])



  return (
    <section className="bg-[url(/images/background-header.png)] bg-cover min-h-[200px] bg-center w-[100%]">
      <div className="bg-[url(/images/logo.png)] h-[250px] bg-cover bg-center flex min-[700px]:h-[350px] min-[1024px]:h-[450px]">
      </div>
      {/* Input de búsqueda no controlado */}
      {/* <form className="flex justify-center justify-items-center py-5" onSubmit={handleSubmit}>
        <input id='newLocation' className="px-1 text-black" placeholder="Type a location id" type="text" />
        <button className="bg-red-500">Search<i className="bx bx-search ml-2"></i></button>
      </form> */}

      {/* Inpunt controlado  */}
      <form className="flex justify-center justify-items-center py-6">

        <input value={getLocation} onChange={handleLocation} className="outline-none border-2 border-green-500 px-1 py-3 w-70 text-center bg-black/80 text-white min-[1000px]: text-lg  " placeholder="Type a location id..." type="text" autoComplete="off " />

        <button className="bg-green-500 p-4"><img src='/search-icon.png' alt="" /></button>

      </form>

      {/* Info de location  */}
      <section className="bg-black/80 border-2 border-green-400 flex flex-col mx-8 py-8 items-center gap-2 capitalize ">
        <h2 className="text-center text-2xl text-green-400">{location?.name}</h2>
        <ul className="text-xl flex flex-wrap gap-4 p-4">
          <li><b className="text-gray-500">type:</b> {location?.type}</li>
          <li><b className="text-gray-500">dimension:</b> {location?.dimension}</li>
          <li><b className="text-gray-500">population:</b> {location?.residents.length}</li>
        </ul>
      </section>
    </section >
  )
}
export default Location