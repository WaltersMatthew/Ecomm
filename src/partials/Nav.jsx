import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <nav className='fixed top-0 left-0 right-0 z-10 bg-blue-200'>
            <ul className='flex justify-center bg-'>
                
                <li className='bg-blue-200 my-2 border border-black rounded md:py-2 px-4 md:px-10'>
                    <Link
                        to='/'   
                        >
                        Home
                    </Link>
                </li>

            </ul>
        </nav>
    )
}
