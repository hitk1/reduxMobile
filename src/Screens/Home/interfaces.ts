export interface IProduct {
    id: number
    title: string
    price: number
    image: string
    isFavorite?: boolean
    amount: number
    formatedPrice: string
}