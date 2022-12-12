import { useParams, useLocation } from "react-router-dom"

export default function Product(){

    const { id } = useParams()
    const location = useLocation()
    const prod = location.state   
    
    let starRating = ''
    if (prod.rating < 2){
        starRating = '⭐️'
    }else if (prod.rating < 3){
        starRating = '⭐️⭐️'
    }else if (prod.rating < 4){
        starRating = '⭐️⭐️⭐️'
    }else if (prod.rating < 5){
        starRating = '⭐️⭐️⭐️⭐️'
    }else if (prod.rating === 5){
        starRating = '⭐️⭐️⭐️⭐️⭐️'
    }

    return(
        // wrapper div
        <div className="my-10 mx-4">
            {/* title and rating div */}
            <div className="">
                <p className="xl:text-6xl lg:text-6xl md:text-4xl text-2xl font-bold mb-6 flex justify-center"> 
                    {prod.title}
                </p>
                <div className="mb-10 text-2xl md:text-4xl">
                    <p className="flex justify-center">{starRating}</p>
                    <p className='flex justify-center'>{prod.rating}/5</p>
                </div>
            </div>
            {/* image container */}
            <div className="flex flex-wrap mx-6">
                <img src={prod.images[0]} alt={`${prod.title}`}/>
                <img src={prod.images[1]} alt={`${prod.title}`}/>
                <img src={prod.images[2]} alt={`${prod.title}`}/>
            </div>

                <div className="my-4 flex">
                    <p className="text-6xl font-bold">${prod.price}</p>
                    <button className="bg-blue-200 drop-shadow-md ml-6 sm:ml-24 px-10 py-4 rounded-md hover:bg-blue-500 hover:text-white active:bg-blue-700 active:drop-shadow-none">
                        Add to Cart 🛒
                    </button>
                </div>

                <p className="my-2">
                    {prod.description}
                </p>

                <p className="my-2">
                    {prod.discountPercentage > 15 
                        ? 
                    <span className="text-red-500 font-bold">GREAT DEAL! {prod.discountPercentage}% off</span> 
                        : 
                    <span className="text-green-600 font-bold">{prod.discountPercentage}% off</span> }
                </p>

                <p>
                    {prod.stock > 50 ? `${prod.stock} left in stock` : `Hurry! Only ${prod.stock} left in stock!`}
                </p>

        </div>
    )
}