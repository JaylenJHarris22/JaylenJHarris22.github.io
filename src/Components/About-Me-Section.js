import headshot from './imgs/Jaylen1.jpg';

export default function AboutMeSection (){
return(
    <div className='w-full bg-black h-full min-h-screen text-white flex flex-col justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-5'>
            <div className='col-span-2'>
                <img src={headshot} alt="headshot" className='h-1/2'></img>
            </div>
            <div className='col-span-3 flex flex-col content-center h-full'>
                <h3 className='text-green-400 text-2xl font-semibold'>About Me</h3>
                <p>Hello I'm Jaylen, a software engineer that has a passion for building applications and developing modern solutions. I am a thinker and an innovator looking to bring my personal introspection into the world.</p>
            </div>
        </div>
    </div>
)
}