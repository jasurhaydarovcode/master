import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <header className="bg-transparent">
            <div className="logo">
                <img src="/logo.png" alt="" /> Portfolio
            </div>
            <nav>

            </nav>
            <div className="icon-bar">
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    )
}


export default NavBar