import produce from 'immer'
import { IActionFunction } from "../interfaces";
import { IProduct } from '../../../Screens/Home/interfaces'

export const addToCart = (product: IProduct): IActionFunction<IProduct> => ({
    type: 'ADD_TO_CART',
    data: product
})

export const removeFromCart = (productId: number): IActionFunction<number> => ({
    type: 'REMOVE_FROM_CART',
    data: productId
})

export const subtractFromCart = (productId: number): IActionFunction<number> => ({
    type: 'SUBTRACT_FROM_CART',
    data: productId
})


export default function cart(state = <IProduct[]>[], { type, data }: IActionFunction<any>): IProduct[] | undefined {
    switch (type) {
        case 'ADD_TO_CART':
            return produce(state, (draft: IProduct[]) => {

                const productIndex = draft.findIndex(item => item.id === data.id)

                if (productIndex >= 0)
                    draft[productIndex].amount += 1
                else
                    draft.push({
                        ...data,
                        amount: 1
                    })
            })
        case 'REMOVE_FROM_CART':
            return produce(state, (draft: IProduct[]) => {
                draft.splice(draft.findIndex(item => item.id === data), 1) //data é o productId neste caso
            })
        
        case 'SUBTRACT_FROM_CART':
            return produce(state, (draft: IProduct[]) => {

                const productIndex = draft.findIndex(item => item.id === data)

                if(productIndex != -1){
                    if(draft[productIndex].amount > 1)
                        draft[productIndex].amount -= 1
                    else
                        draft.splice(productIndex, 1)
                }

            })

        default: return state
    }

}