import { ProductCardProps } from "@/types/main"
import { allProducts } from "../data/all-products-data"

const getProductDetails=(productId:number)=>{
    return allProducts.filter((item:ProductCardProps)=>item.id===productId)
}

export {getProductDetails}