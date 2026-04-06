import { useState } from 'react';
import "./menu.css";

export default function Menu() {
    const [rotate, setRotate] = useState("0");

    return (
        <div className="menu">
            <img src="/menu.ico" style={{width: "3rem", transition: "all 0.4s", transform: `rotate(${rotate})`}} onClick={() => rotate === "0" ? setRotate("-90deg") : setRotate("0")} alt="menuIcon"/>
        </div>
    );
}