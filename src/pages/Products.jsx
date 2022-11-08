import axios from 'axios'
import { useEffect, useState } from 'react'

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
                <div
                    key={`prod${prod.id}`}
                    className="max-w-sm w-full lg:max-w-full lg:flex border border-gray-400 rounded-md"
                >
                    <div className="h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                        <a href={`/product/${prod.id}`}>
                            <img 
                            src={prod.thumbnail}
                            alt={prod.title}
                            />
                        </a>
                    </div>
                    <div className="bg-slate-200 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="font-bold text-xl mb-2">
                                <a href={`/product/${prod.id}`}>
                                    {prod.title}    
                                </a>
                            </div>

                            <p>
                                {prod.description}
                            </p>
                        </div>
                        <p className='font-bold'>${prod.price}</p>
                    </div>
                </div>
        )
    })
    return(
        <div>
            <p className='text-[60px] flex justify-center my-20 underline'>All Products</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {productMap}
            </div>
        </div>
    )
}