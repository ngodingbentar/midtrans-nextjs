'use client'

import { useEffect, useState } from "react"
import { IProduct } from "../types/main"
import Checkout from "./Checkout"

const MovieCard = ({product}: {product: IProduct}) => {
  const [productId, setProductId] = useState(0)

  function handleId (id: number) {
    setProductId(id)
  }

  useEffect(() => {
    if(productId === product.id) {
      const srcSnap ="https://app.sandbox.midtrans.com/snap/snap.js"
      const clientKey = process.env.NEXT_PUBLIC_CLIENT || ''
      const script = document.createElement("script")
  
      script.src = srcSnap
      script.setAttribute('data-client-key', clientKey)
      script.async = true
  
      document.body.appendChild(script)
  
      return () => {
        document.body.removeChild(script)
      }
    }
  }, [productId]);

  return (
    <div
      className="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-first lg:order-none h-[450px] relative">
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
      <div className="absolute bottom-0 right-0 w-full px-4">
        <Checkout product={product} setProductId={handleId} />
      </div>
    </div>
  )
}

export default MovieCard