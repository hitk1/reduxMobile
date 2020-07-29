import { IProduct } from "src/Screens/Home/interfaces";

export interface IProps {
    item: IProduct
    addToCartFunction(item: IProduct): void
    subtractFromCartFunction(productId: number): void
    removeFromCartFunction(productId: number): void
}