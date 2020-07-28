import { IProduct } from "../../Screens/Home/interfaces";

export interface IProps {
    item: IProduct
    amount: number
    addToCartFunction(item: IProduct): void
    subtractFromCartFunction(productId: number): void
}

export interface IMyItems {
    id: number
    title: string
    price: number
    image: string
    isFavorite: boolean
}