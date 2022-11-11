import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <ul className='flex'>
            <li>
                <Link
                    to='/home'   
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to='/products'
                >
                    See all products
                </Link>
            </li>
        </ul>
    )
}
