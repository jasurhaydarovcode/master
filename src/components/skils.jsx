import React from "react";
import reactlogo from "../Assets/skils/react.png"
import bootstrap from "../Assets/skils/bootstrap.png"
import javascript from "../Assets/skils/javascript.png"
import sass from "../Assets/skils/sass.png"
import tailwind from "../Assets/skils/tailwind-css.png"
import Card from "./Card/3dCard";

function Skils() {

    return (
        <section className={` mx-auto flex justify-center items-center min-h-screen h-max bg-transparent md:generall__border mb-10`}>
            <div className="absolute w-full md:h-[700px] flex justify-center items-center gap-2 flex-wrap md:generall__boreder overflow-hidden md:p-0 p-5">
                <div className="generall__border p-12">
                    <div className="text-center text-white flex justify-center items-end">
                            <h1 className=" lg:text-8xl md:text-6xl text-5xl mb-5 mt-0-lg"> My Skills </h1>
                    </div>
                    <div className="w-full md:p-20 d-flex justify-center">
                        <div className="flex md:justify-between justify-center items-center w-full flex-wrap">
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skils;