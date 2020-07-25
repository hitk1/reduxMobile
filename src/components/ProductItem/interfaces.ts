import { IProduct } from "../../Screens/Home/interfaces";

export interface IProps {
    item: IProduct
    addToCartFunction(item: IProduct): void
    amount: number
}

export interface IMyItems {
    id: number
    title: string
    price: number
    image: string
    isFavorite: boolean
}