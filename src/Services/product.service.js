import {StoreInterceptor } from "../Services/interceptor"


export const get_products = async () => {
  console.log("GET Products")
  const Response = await StoreInterceptor.get('https://dummyjson.com/products')
  const Products = Response.data
  console.log(Products)
  return Products
}