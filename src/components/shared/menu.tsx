import { useState } from 'react';
import './menu.css';

export function Menu() {
    const [rotate, setRotate] = useState("0");
    const handleClick = () => setRotate("-90deg");

    return (
        <div className="menu">
            <img src="/menu.ico" id="menu" style={{width: "3rem", transition: "all 0.4s", transform: `rotate(${rotate})`}} onClick={handleClick} alt="menuIcon"/>
        </div>
    );
}