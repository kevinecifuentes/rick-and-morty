import axios from "axios"
import { useEffect, useState } from "react"

const Residents = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null)

  const statusStyles = {
    'Alive': 'bg-green-500',
    'Dead': 'bg-red-500',
    'unknown': 'bg-gray-400'
  }

  useEffect(() => {
    axios.get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <article className="bg-black/80 border-2 border-green-400 text-start">
      <div className="relative">
        <img src={residentInfo?.image} alt="" />
        <div className="flex items-center bg-black/50 py-1 px-6 border-2 border-green-500 gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className={`h-3 aspect-square rounded-full ${statusStyles[residentInfo?.status]}`}></div>
          {residentInfo?.status}
        </div>
      </div>
      <section>
        <div className="text-center py-4 border-b-2 border-white">
          <h2>{residentInfo?.name}</h2>
        </div>
        <ul className="py-4 pl-2">
          <li className="pb-2"><b className="text-gray-500 italic">Species:</b> <span>{residentInfo?.species}</span></li>
          <li className="pb-2"><b className="text-gray-500 italic">Origin:</b> <span>{residentInfo?.origin.name}</span></li>
          <li><b className="text-gray-500 italic">Times apper:</b> <span>{residentInfo?.episode.length}</span></li>
        </ul>
      </section>
    </article>
  )

}
export default Residents