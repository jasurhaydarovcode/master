import Globecard from "../../Component/Card/HeadCard";
import Btnfirst from "../../Component/btns/First";
import "./style.css"

function Head() {
    return (
        <>
            <div class="globe felx flex-row">
                <div className="left text-white py-44 px-10">
                    <div class=" text-white mt-10">
                        <h1 class="text-6xl font-bold text-white">
                            Hi, I'm <span class="text">Abdul Aziz Saidov.</span>
                        </h1>
                        <p class="text-2xl text-white font-semibold mt-2">
                            A Frontedn Developer.
                        </p>
                        <p class="text-gray-600  mb-20 w-8/12 mt-6">
                            I like to create beautiful and functional websites. I can create web applications at any level.
                        </p>
                    </div>
                    <Btnfirst />
                </div>
                <div className="right" >
                    <Globecard />
                </div>
            </div>
        </>
    );
}

export default Head;