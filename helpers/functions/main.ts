import { ProductCardProps } from "@/types/data"
import { visibleProducts } from "@/lib/brands";

const getProductDetails=(productId:number)=>{
    return visibleProducts.filter((item:ProductCardProps)=>item.id===productId)
}

export {getProductDetails}