'use client'

import { IProduct } from "../types/main"

const MovieCard = ({product}: {product: IProduct}) => {

  return (
    <div
      className="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-first lg:order-none h-[400px] relative">
      <div>
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
      </div>
      <div className="py-5 px-6 sm:px-8">
        <h2 className="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">{product.title}</h2>
        <div className="flex justify-between">
          <p>Price: {product.price}</p>
          <p>{product.rating} / 5.00</p>
        </div>
        <p>Stock: {product.stock}</p>
      </div>
      <div className="absolute bottom-0 right-0">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to Cart</button>
      </div>
    </div>
  )
}

export default MovieCard