import { useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Product(){
    const [product, setProduct] = useState({})

    const { id } = useParams()
    const location = useLocation()
    
    const prod = location.state
    console.log('FROM PRODUCT', prod.discountPercentage)
            
            return(
                <div>
            <p className="text-[60px]"> 
                {prod.title}
            </p>
            <div className="flex flex-wrap">
                <img src={prod.images[0]} />
                <img src={prod.images[1]} />
                <img src={prod.images[2]} />
            </div>
            <div>
            <p>
                {prod.description}
            </p>
            <p>${prod.price}</p>
            <p>{prod.discountPercentage}% off</p>
            <p>{prod.rating}/5</p>
            <p>{prod.stock > 50 ? `${prod.stock} left in stock` : `Hurry! Only ${prod.stock} left in stock!`}</p>
            </div>

        </div>
    )
}