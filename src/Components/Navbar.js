export default function Navbar (){
    return(
        <nav className='flex justify-between items-center bg-black text-white fixed w-full'>
            <div className='text-4xl m-2 align-baseline font-semibold italic bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent p-2' id='myName'>jaylen</div>
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