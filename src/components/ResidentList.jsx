import { useEffect, useState } from "react"
import Residents from "./Residents"
import { paginationLogic } from "../func/pagination"

const FIRST_PAGE = 1

const ResidentList = ({ residents, location }) => {
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE)

  const { pages, residentsInPage } = paginationLogic(currentPage, residents)

  useEffect(() => {
    setCurrentPage(FIRST_PAGE)
  }, [location])


  return (
    <section>

      {/* Lista de residentes  */}
      <section className="grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto py-6">
        {
          residentsInPage?.map(resident => <Residents residentUrl={resident} key={resident} />)
        }
      </section>

      {/* Paginación  */}
      <section className="flex justify-center gap-4 flex-wrap pb-8">
        {
          pages.map(
            page => <button key={page} onClick={() => setCurrentPage(page)} className={`p-2 px-3 rounded-md hover:bg-red-500 ${currentPage === page ? 'bg-blue-500' : 'bg-green-600'}`}>
              {page}
            </button>
          )
        }
      </section>

    </section>
  )
}
export default ResidentList