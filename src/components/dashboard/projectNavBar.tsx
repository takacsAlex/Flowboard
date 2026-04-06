import { useState } from "react";
import "./projectNavBar.css";

export default function ProjectNavBar({onSelect}) {
    const [selected, setSelected] = useState("tasks");

    return(
        <div className="project-nav-bar">
            <p id={selected === "tasks"? "nav-bar-chosen" : ""} onClick={() => {
                setSelected("tasks");
                onSelect("tasks");
            }}>Tasks</p>
            <p id={selected === "messages" ? "nav-bar-chosen" : ""} onClick={() =>{ 
                setSelected("messages");
                onSelect("messages");
            }}>Messages</p>
        </div>
    );
}