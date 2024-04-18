import React, { useRef } from 'react'
import CustomHook from './CustomHook';
import Globecard from './Card/HeadCard';
import Btnfirst from './buttons/First';
import ColorChangingMaterials from './Color';
function Home() {
    const scrollTab = useRef();
    CustomHook(scrollTab);

    return (
        <section ref={scrollTab} className='grid grid-cols-2 gap-10 justify-between items-center h-[600px] relative '>
            <div className=" font-museo-moderno font-system">
                <div className="name text-6xl font-bold leading-tight">
                    I AM <span className='text-anim text-7xl'>Abdul Aziz</span>
                </div>
                <p className="p text-gray-300 mt-8  border-[#333] mb-10">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores officiis beatae repellendus rem ullam, ipsam nemo dolorem dolorum illo laborum. Ea sed dolor ab qui, doloremque accusantium esse blanditiis possimus!
                </p>
                <div className=''>
                    <Btnfirst />
                </div>
            </div>
            <div className="avatar">
                {/* <Globecard/> */}
                <ColorChangingMaterials />
            </div>
        </section>
    )
}

export default Home
