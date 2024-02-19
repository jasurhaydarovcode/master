import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
import Globecard from './new pages/Component/Card/HeadCard';
import Btnfirst from './new pages/Component/btns/First';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                I AM <span>Abdul Aziz</span>
            </div>
            <div className="des">
                {/* 30 */}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores officiis beatae repellendus rem ullam, ipsam nemo dolorem dolorum illo laborum. Ea sed dolor ab qui, doloremque accusantium esse blanditiis possimus!
            </div>
            
            <Btnfirst/>
        </div>
        <div className="avatar">
            <Globecard/>
        </div>
    </section>
    )
}

export default Home
