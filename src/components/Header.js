import react from "react";

import icon from "../assets/images/earth.png"

export default function Header(){
    return (
        <header>
            <img src={icon} alt="logo"/>
            <p className="app-name">My travel journal</p>
        </header>
    )
}