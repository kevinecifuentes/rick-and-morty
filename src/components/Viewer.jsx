import axios from 'axios'
import React, { useState } from 'react'

const LocationInput = ({ locattion, setLocattion }) => {
  // Estado local para almacenar el valor de búsqueda y las sugerencias
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])

  // Maneja el cambio en el campo de entrada de búsqueda
  const handleInputChange = (event) => {
    const value = event.target.value
    setSearchQuery(value)

    if (value.trim() !== '') {
      // Realiza una solicitud a la API para obtener las sugerencias de ubicación basadas en el valor de búsqueda
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${value}`)
        .then(({ data }) => {
          setSuggestions(data.results) // Actualiza las sugerencias con los resultados de la API
        })
        .catch((err) => console.log(err))
    } else {
      setSuggestions([]) // Si el campo de búsqueda está vacío, limpia las sugerencias
    }
  }

  // Maneja el clic en una sugerencia de ubicación
  const handleSuggestionClick = (selectedLocattion) => {
    setSearchQuery(selectedLocattion.name) // Establece el valor de búsqueda con el nombre de la ubicación seleccionada
    setLocattion(selectedLocattion) // Establece la ubicación seleccionada como ubicación actual
    setSuggestions([]) // Limpia las sugerencias
  }

  // Maneja el envío del formulario de búsqueda
  const handleSubmit = (event) => {
    event.preventDefault()

    if (searchQuery.trim() !== '') {
      // Realiza una solicitud a la API con el valor de búsqueda y actualiza la ubicación actual en función de los resultados
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${searchQuery}`)
        .then(({ data }) => {
          if (data.results.length > 0) {
            setLocattion(data.results[0]) // Establece la ubicación encontrada como ubicación actual
          } else {
            setLocattion(null) // Si no se encuentran ubicaciones, establece la ubicación actual como null
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <section className='flex flex-col gap-y-10'>
      <form onSubmit={handleSubmit} className='flex justify-center px-2 min-[700px]:px-32 min-[1000px]:px-60 min-[1400px]:px-[25rem]'>
        <input id="searchQuery" className=" outline-none bg-[#0000004c] text-white min-[1000px]:text-lg text-sm w-[100%] h-12 border-2 border-[#8EFF8B] pl-4 min-[700px]:text-center " placeholder="Type a location name..." type="text" value={searchQuery} onChange={handleInputChange} />
        <button className='bg-[#8fff8b9d] hover:bg-[#528f50b0] border-2 border-[#8EFF8B] px-7'>
          <img src="/images/loop.png" alt="" />
        </button>
      </form>
      {/* Renderiza la lista de sugerencias si hay sugerencias disponibles */}
      {suggestions.length > 0 && (
        <ul className='absolute left-[50%] -translate-x-[50%] z-10 bg-black border-2 border-[#8EFF8B] mt-12 min-w-[290px] sm:min-w-[510px] cursor-pointer'>
          {suggestions.map((locattion) => (
            <li className='px-2 py-2 hover:bg-[#8EFF8B] hover:text-black' key={locattion.id}
              onClick={() => handleSuggestionClick(locattion)}>
              {locattion.name}
            </li>
          ))}
        </ul>
      )}


      {/* Renderiza los detalles de la ubicación si existe una ubicación seleccionada */}
      <div className='flex justify-center'>
        <h2 className="min-[900px]:text-xl min-[1000px]:text-2xl">           ¡Wellcome to the crazy universe!
        </h2>
      </div>
      <section className="min-[700px]:px-10">
        <article className="bg-[#4d4c4c29] p-4 mx-4 border-2 border-[#8EFF8B]">
          {locattion && (
            <section>
              <h2 className="text-center pb-5 text-lg min-[900px]:text-2xl">{locattion.name}</h2>
              <ul className="flex flex-wrap px-7 gap-3 min-[370px]:px-14 min-[400px]:px-20 min-[700px]:justify-evenly min-[700px]:px-2" >
                <li className="text-white min-[900px]:text-xl"><span className="text-gray-500"><b>Type: </b></span> {locattion.type}</li>
                <li className="text-white min-[900px]:text-xl"><span className="text-gray-500"><b>Dimencion:</b></span> {locattion.dimension}</li>
                <li className="text-white min-[900px]:text-xl"><span className="text-gray-500"><b>Population:</b></span> {locattion.residents.length}</li>
              </ul>
            </section>
          )}
        </article>


      </section>

    </section>
  )
}

export default LocationInput