import React from "react";
import reactlogo from "../Assets/skils/react.png"
import bootstrap from "../Assets/skils/bootstrap.png"
import javascript from "../Assets/skils/javascript.png"
import sass from "../Assets/skils/sass.png"
import tailwind from "../Assets/skils/tailwind-css.png"
import Card from "./Card/3dCard";

function Skils() {

    return (
        <section className={` mx-auto flex justify-center items-center min-h-screen h-max bg-transparent generall__border mb-10`}>
            <div className="absolute w-full h-[700px] flex justify-center items-center gap-2 flex-wrap overflow-hidden ">
                <div class="generall__border p-12">
                    <div className="text-center text-white flex justify-center items-end">
                            <h1 className=" text-8xl mb-5 mt-0-lg"> My Skills </h1>
                    </div>
                    <div className="w-full p-20">
                        <div className="flex justify-between items-center w-full flex-wrap">
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skils;