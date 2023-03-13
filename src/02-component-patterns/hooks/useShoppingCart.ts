import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({})

    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
        
        // shoppingCart[ product.id ] = { ...product, count }
        console.log({ count })

        setShoppingCart(oldShoppingCart => {

            if( count === 0 ){
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
                // delete oldShoppingCart[ product.id ]
                // return { ...oldShoppingCart }
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count }
            }
        })
    }


    return{
        shoppingCart,

        onProductCountChange,
    }
    
} 