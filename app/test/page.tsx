'use client'

import { useDispatch, useSelector } from 'react-redux'
import { IMain, IProduct } from '../types/main'
import { useMain } from '../hooks/useMain'
const TestPage = () => {
  const dispatch = useDispatch()
  const count = useSelector((state: IMain) => state.main.count)
  const {data, isLoading} = useMain()
  console.log('data', data)

  const hanldeClick = (type: string) => {
    dispatch({ type: `main/${type}` })
  }

  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center '>
      <div>count : {count}</div>
      <div>
        <button onClick={() => hanldeClick('plus')}>+</button>
        <button onClick={() => hanldeClick('minus')} className='ml-4'>-</button>
      </div>
      {!isLoading && data && data.map((item: IProduct) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}

export default TestPage