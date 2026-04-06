import "./profile.css";
import { DropDownProfile } from "./dropDownProfile.tsx";
import { useState } from "react";

export default function ProfileComponent() {
    const [openProfile, setOpenProfile] = useState(false);
    const [background, setBackground] = useState({})

    return(
        <div className="profile-component" style={background}>
            <div onClick={() => {
                if(openProfile) {
                    setOpenProfile(false);
                    setBackground({});
                } else {
                    setOpenProfile(true);
                    setBackground({background: "rgba(30, 30, 30, .6)"});
                };
            }} 
            style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <span id="nickname">Profile1</span>
                <img src="/profile.ico" id="profile-picture" alt="profile"/>
            </div>
            {openProfile? <DropDownProfile /> : ""}
        </div>
    );
}