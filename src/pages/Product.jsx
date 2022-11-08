import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Product(){
    const [product, setProduct] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`)
                setProduct(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    },[])

    return(
        <div>
            <p className="text-[60px]"> 
                {product.title}
            </p>
            <p>
                {product.description}
            </p>
        </div>
    )
}