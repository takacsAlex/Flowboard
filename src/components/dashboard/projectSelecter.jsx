import { useState } from 'react';
import './projectSelecter.css'

export default function ProjectSelecter() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Select your project:");
    const options = [
        "Main",
        "Project1",
        "Project2",
        "Project3"
    ];
    
    const handleSelect = (option) => {
        setSelected(option + ":");
        setIsOpen(false);
    };

    return(
        <div className="projectSelecterModule">
            <div class="select-box">
            <div class={`options-container ${isOpen ? "active" : ""}`}>
            {options.map((option, index) => (
                <div
                    key={index}
                    className="option"
                    onClick={() => handleSelect(option)}
                >
                    <label>{option}</label>
                </div>
            ))}
            </div>
            <div class="selected" onClick={() => setIsOpen(!isOpen)}>
                {selected}
            </div>
        </div>
        </div>
    );
}