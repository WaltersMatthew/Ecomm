import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProdCard from '../partials/ProdCard'

export default function Products(){
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products')
                setProducts(response.data.products)

            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    },[])
    const productMap = products.map(prod => {
        return (
                <ProdCard
                    key={`prodid${prod.id}`}
                    id={prod.id}
                    title={prod.title}
                    description={prod.description}
                    price={prod.price}
                    discountPercentage={prod.discountPercentage}
                    rating={prod.rating}
                    stock={prod.stock}
                    thumbnail={prod.thumbnail}
                    images={prod.images}
                />
        )
    })
    return(
        <div>
            <p className='text-[60px] flex justify-center my-20 underline'>All Products</p>
            <div className='grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {productMap}
            </div>
        </div>
    )
}