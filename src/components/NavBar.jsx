import React from "react";
import BtnDownload from "./buttons/download";


const NavBar = () => {
    return (
        <>
            <header className="bg-transparent bg-red-400 fixed w-full h-20 flex top-0 items-center justify-between z-20 px-20">
                <div className="logo">
                    <img src="/logo.png" alt="" /> Portfolio
                </div>
                <div className="transition-all">
                    <BtnDownload text='Download Cv' link={'Abdulaziz_Abdusaidov_Frontend_Engineer.pdf'} />
                </div>
            </header>
        </>
    )
}


export default NavBar