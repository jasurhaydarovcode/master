import "../css/GlobalCss/style.css"
import React, { useEffect, useState } from "react";
import reactlogo from "../Assets/skils/react.png"
import bootstrap from "../Assets/skils/bootstrap.png"
import javascript from "../Assets/skils/javascript.png"
import sass from "../Assets/skils/sass.png"
import tailwind from "../Assets/skils/tailwind-css.png"
import Tegs from "./tegs";
function Skils() {



    const data = [
        { image: reactlogo, text: 'React JS' },
        { image: bootstrap, text: 'Bootstrap' },
        { image: sass, text: 'Sass' },
        { image: javascript, text: 'Java Script' },
        { image: tailwind, text: 'Tailwind css' },
        // ... boshqa ma'lumotlar
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-transparent bg-slate-500 ">
            <div className="absolute w-full h-[700px] flex justify-center items-center gap-2 flex-wrap overflow-hidden ">
                <div class="signin headshadow__fourth">
                    <div className="text-center text-white flex justify-center items-end">
                        <Tegs teg={"h1"}>
                            <h1 className=" text-8xl mb-5 mt-0-lg"> My Skills </h1>
                        </Tegs>
                    </div>
                    <div className="in-sign">
                        <div className="w-10/12 pr-5 ">
                            <Tegs teg={"p"}>
                                <p className="pl-8">I am an experienced Frontend Developer, adept in building custom software and websites from the ground up using Javascript, React, Vue js Node js.</p>
                            </Tegs>
                        </div>
                        <div className="flex justify-between items-center w-full flex-wrap">
                            {data.map((item, index) => (
                                <div className="sign-card mb-2" key={index}>
                                    <div className="">
                                        <img src={item.image} alt="react js logo" />
                                    </div>
                                    <p className="p-incard text-center rounded-3xl">{item.text}</p>
                                </div>
                            ))}
                            <div className="App">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skils;