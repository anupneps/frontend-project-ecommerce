import { Category } from "./category"

export interface Product {
    id: number
    title: string
    description:string
    price:number
    category: Category
    image:string
    quantity:number
    subTotal:number
    
}