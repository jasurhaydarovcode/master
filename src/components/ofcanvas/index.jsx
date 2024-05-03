import React, { useState } from 'react';
import { useColor } from '../../provider/color';

function Modal({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const { textColor } = useColor()

    let changingcolors = document.getElementById("changing-colors");
    let threeBackground = document.getElementById("three-background");

    // if (changingcolors.checked) sessionStorage.setItem("changing-colors", "true")
    // else sessionStorage.setItem("changing-colors", "false");

    // if (threeBackground.checked) sessionStorage.setItem("three-background", "true");
    // else sessionStorage.setItem("three-background", "false");



    const toggleOffcanvas = () => setIsOpen(!isOpen);

    window.addEventListener('keydown' || "click", (e) => {
        if (e.key === "Escape") setIsOpen(false);
        if (e.key === "Escape" || e.type === "click") setIsOpen(false);
    })



    return (
        <>
            <button
                className={`px-2 py-2 dynamic-style-bg text-white rounded  rel `}
                onClick={toggleOffcanvas}
            >
                {children}
            </button>

            <div className={`fixed h-screen z-40 inset-0 overflow-hidden ${!isOpen && 'hidden'}`}>
                <div className="absolute inset-0 overflow-hidden">
                    {/* Background overlay */}
                    <div
                        className="absolute inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
                        onClick={toggleOffcanvas}
                    ></div>

                    <section className="absolute inset-y-0 left-0 max-w-full flex ">
                        <div className="relative w-screen max-w-md">
                            <div className="h-full flex flex-col generall__border  shadow-xl overflow-y-scroll">
                                <div className="px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                                            settings
                                        </h2>
                                        <div className="ml-3 h-7 flex items-center">
                                            <button
                                                className=" rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                                                onClick={toggleOffcanvas}
                                            >
                                                <span className="sr-only">Close panel</span>
                                                {/* Replace below with an appropriate icon as needed */}
                                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex-1 py-6 px-4 sm:px-6">
                                    {/* Replace with your content */}
                                    <div className="absolute inset-0 py-6 px-4 sm:px-6 ">
                                        <div className="h-full border-2 border-dashed  p-3 generall__border" aria-hidden="true">
                                            <div>
                                                <input type='checkbox' class='ios8-switch' id='changing-colors' />
                                                <label for='changing-colors'>changing colors</label>
                                            </div>
                                            <div>
                                                <input type='checkbox' class='ios8-switch' id='three-background' />
                                                <label for='three-background'>three background</label>
                                            </div>
                                            <input type="checkbox" id='chek' />
                                        </div>
                                    </div>
                                    {/* /End replace */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Modal;
