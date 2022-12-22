
import {DetailContextProvider} from "../context/DetailProvider"
import {OrderContextProvider} from "../context/OrderProvider"
import {ProductContextProvider} from "../context/ProductProvider"
import {ShoppingCartProvider} from "../context/ShoppingCartContext"

export function AppProvider({children}){
    return (
        <DetailContextProvider>
            <OrderContextProvider>
                <ProductContextProvider>
                    <ShoppingCartProvider>
                        {children}
                    </ShoppingCartProvider>
                </ProductContextProvider>
            </OrderContextProvider>
        </DetailContextProvider>
    )
}

