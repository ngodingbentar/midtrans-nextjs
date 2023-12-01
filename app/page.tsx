'use client'

import { useDispatch, useSelector } from 'react-redux'
import { IMain, IProduct } from './types/main'
import { useMain } from './hooks/useMain'
import MovieCard from './components/MovieCard'
const HomePage = () => {
  const dispatch = useDispatch()
  const count = useSelector((state: IMain) => state.main.count)
  const {data, isLoading} = useMain()

  const hanldeClick = (type: string) => {
    dispatch({ type: `main/${type}` })
  }

  return (
    <>
      <div className='p-8'>
        <div>
          <div className="min-h-screen">
            <div className="min-h-screen max-w-6xl mx-auto justify-center grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-5 ">
            {!isLoading && data.map((product: IProduct) => (
              <div key={product.id}>
                <MovieCard product={product} />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage