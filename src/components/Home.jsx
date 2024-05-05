import React, { useRef } from 'react'
import SocialCard from './Card/socialCard/socialcard';
import img from '../Assets/me/hero-bg.svg';
function Home() {

    return (
        <section className='grid md:grid-cols-2 grid-cols-1 gap-10 justify-between items-center  h-max relative py-20'>
            <div className=" font-museo-moderno font-system">
                <div className="name text-6xl font-bold leading-tight mb-10">
                        <span className=' '>I AM </span><span className='text-anim text-7xl'>Abdul Aziz</span>
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
