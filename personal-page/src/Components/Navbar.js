export default function Navbar (){
    return(
        <nav className='flex justify-between items-center bg-black text-green-400'>
            <div className='text-4xl m-4 align-baseline font-semibold italic text-white' id='myName'>jaylen</div>
            <div>
                <ul className='flex items-center m-2.5 font-sans font-semibold'>
                    <li className='m-2'>About me</li>
                    <li className='m-2'>Projects</li>
                    <li className='m-2'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}