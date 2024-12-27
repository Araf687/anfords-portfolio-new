import { ProductCardProps } from "@/types/data"
import { allProducts } from "../data/all-products-data"

const getProductDetails=(productId:number)=>{
    return allProducts.filter((item:any)=>item.id===productId)
}

export {getProductDetails}