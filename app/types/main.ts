interface IMain {
  main : {
    count: number
  }
}

interface IProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}


export type { IMain, IProduct }