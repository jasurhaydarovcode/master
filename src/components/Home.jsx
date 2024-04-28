import React, { useRef } from 'react'
import CustomHook from './CustomHook';
import Tegs from './tegs';
import SocialCard from './Card/socialcard';
function Home() {
    const scrollTab = useRef();
    CustomHook(scrollTab);

    return (
        <section ref={scrollTab} className='grid grid-cols-2 gap-10 justify-between items-center h-[600px] relative '>
            <div className=" font-museo-moderno font-system">
                <div className="name text-6xl font-bold leading-tight mb-10">
                    <Tegs teg={"h1"}>
                        <span className='pl-8 '>I AM </span><span className='text-anim text-7xl'>Abdul Aziz</span>
                    </Tegs>
                </div>
                <Tegs teg={"p"}>
                    <p className="p text-gray-300   border-[#333] pl-10">
                        I'M Web developer
                    </p>
                </Tegs>
                <div className='mt-10'>
                    <SocialCard />

                </div>
            </div>
            <div className="avatar">
                {/* <Globecard/> */}
                {/* <ThreeJsScene /> */}
            </div>
        </section>
    )
}

export default Home
