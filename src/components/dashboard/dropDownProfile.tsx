import "./dropDownProfile.css";

export function DropDownProfile() {
    return(
        <div className="drop-down-profile">
            <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li id="log-out">Log out</li>
            </ul>
        </div>
    );
}