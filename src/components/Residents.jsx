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
    <article >
      <div className="relative">
        <img src={residentInfo?.image} alt="" />
        <div className="flex items-center gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className={`h-3 aspect-square rounded-full ${statusStyles[residentInfo?.status]}`}></div>
          {residentInfo?.status}
        </div>
      </div>
      <section>
        <h4>{residentInfo?.name}</h4>
        <ul>
          <li>Species: <span>{residentInfo?.species}</span></li>
          <li>Origin: <span>{residentInfo?.origin.name}</span></li>
          <li>Times apper: <span>{residentInfo?.episode.length}</span></li>
        </ul>
      </section>
    </article>
  )

}
export default Residents