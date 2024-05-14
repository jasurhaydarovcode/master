import React, { useRef } from 'react'
import SocialCard from './Card/socialCard/socialcard';
import img from '../Assets/me/hero-bg.svg';
function Home() {

    return (
        <section className='grid md:grid-cols-2 grid-cols-1 gap-10 justify-between items-center  h-max relative py-20'>
            <div className=" font-museo-moderno font-system lg:pt-0 pt-20 md:p-10 ">
                <div className="name lg:text-6xl md:text-5xl text-3xl font-bold leading-tight mb-10">
                        <span className=' '>I AM </span><span className='text-anim lg:text-7xl md:text-6xl text-5xl'>Abdul Aziz</span>
                </div>
                    <p className="p text-gray-300   border-[#333] ">
                        I'M Web developer
                    </p>
                <div className='mt-10'>
                    <SocialCard />
                </div>
            </div>
            <div className="avatar">
                <img src={img} alt="" />
            </div>
        </section>
    )
}

export default Home
