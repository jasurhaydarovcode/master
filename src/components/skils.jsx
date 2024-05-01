import React from "react";
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
    let card = document.querySelector('.box');
    document.addEventListener('mousemove', function (e) {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    return (
        <section className=" mx-auto flex justify-center items-center min-h-screen h-max bg-transparent generall__border mb-10">
            <div className="absolute w-full h-[700px] flex justify-center items-center gap-2 flex-wrap overflow-hidden ">
                <div class="skills generall__border">
                    <div className="text-center text-white flex justify-center items-end">
                        <Tegs teg={"h1"}>
                            <h1 className=" text-8xl mb-5 mt-0-lg"> My Skills </h1>
                        </Tegs>
                    </div>
                    <div className="in-sign">
                        <div className="flex justify-between items-center w-full flex-wrap">
                            {data.map((item, index) => (
                                <div className="box skills__card mb-2 generall__border" id="skills" key={index}>
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
        </section>
    );
}

export default Skils;