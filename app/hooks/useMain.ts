import axios from "axios"
import { useQuery } from "react-query"

export const useMain = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const dataRes = await axios.get('https://dummyjson.com/products')
      return dataRes.data.products
    },
  })
}