import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({})

    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
        
        // shoppingCart[ product.id ] = { ...product, count }
        console.log({ count })

        setShoppingCart(oldShoppingCart => {

            const productInCard: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if( Math.max( productInCard.count + count, 0 ) > 0){
                productInCard.count += count;
                return {
                    ...oldShoppingCart,
                    [ product.id ]: productInCard
                }
            }

            // BORRAR EL PRODUCTO
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return {...rest};

        //     if( count === 0 ){
        //         const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        //         return rest;
                // delete oldShoppingCart[ product.id ]
                // return { ...oldShoppingCart }
        //     }

        //     return {
        //         ...oldShoppingCart,
        //         [ product.id ]: { ...product, count }
        //     }
        // })
        })
    }


    return{
        shoppingCart,

        onProductCountChange,
    }
    
} 