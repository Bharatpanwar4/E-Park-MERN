import { PRODUCTS_URL } from "../constantants";
import { apiSlice } from "./apiSlice";


export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints:(bulider)=>({
getProducts:bulider.query({
    query:()=>({
        url:PRODUCTS_URL,
    }),
    
    keepUnusedDataFor:5
}),
getProductDetails:bulider.query({
    query:(productId)=>({
        url: `${PRODUCTS_URL}/${productId}`,
    }),
    keepUnusedDataFor:5
})
    })
    
})
export const {useGetProductsQuery,useGetProductDetailsQuery}  = productsApiSlice;