import { IProducts } from "src/Screens/Home/interfaces";

export interface IProps {
    item: IProducts
}

export interface IMyItems {
    id: number
    title: string
    price: number
    image: string
    isFavorite: boolean
}