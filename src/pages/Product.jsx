import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

import Carousel from "../partials/Carousel"

export default function Product(){
    const [product, setProduct] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            try {

                new Promise((resolve,reject) => {
                    const response = axios.get(`https://dummyjson.com/products/${id}`)
                    setProduct(response.data)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    },[])
    const runImage = () =>{

    }
    Promise.all([setProduct]).then(values =>{
        console.log(values)
    })
        const imgMap = product.images.map((img, i) => {
        return (
            <img key={`img${i}`} src={img} />
        )
        })

    return(
        <div>
            {/* <Carousel 
                product = {product}
            /> */}
            <p className="text-[60px]"> 
                {product.title}
            </p>
            
            <p>
                {product.description}
            </p>
            <div>
                {imgMap ? imgMap : ''}
            </div>

        </div>
    )
}