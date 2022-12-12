import { Link } from "react-router-dom"

export default function ProdCard(props) {
    return(
        <div
            key={`prod${props.id}`}
            className="max-w-sm w-full lg:max-w-full lg:flex mx-auto border border-gray-400 rounded-md lg:drop-shadow-sm"
        >
            <div className="h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <Link to={`/product/${props.id}`}>
                    <img 
                    src={props.thumbnail}
                    alt={props.title}
                    />
                </Link>
            </div>
            <div className="bg-slate-200 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="font-bold text-xl mb-2">
                        <a href={`/product/${props.id}`}>
                            {props.title}    
                        </a>
                    </div>

                    <p>
                        {props.description}
                    </p>
                </div>
                <p className='font-bold'>${props.price}</p>
            </div>
        </div>
    )
}