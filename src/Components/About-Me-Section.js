export default function AboutMeSection (){
return(
    <div className='w-full bg-black min-h-screen text-white grid grid-cols-1 md:grid-cols-5'>
        <div className='col-span-2'></div>
        <div className='col-span-3 flex flex-col content-center'>
            <h3 className='text-green-400 text-2xl font-semibold'>About Me</h3>
            <p>Hello I'm Jaylen, a software engineer that has a passion for building applications and developing modern solutions. I am a thinker and an innovator looking to bring my personal introspection into the world.</p>
        </div>
    </div>
)
}