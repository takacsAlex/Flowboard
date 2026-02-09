import "./profile.css";

const ProfileComponent = () => {
    return(
        <div className="profileComponent">
            <span id="nickname">Alex</span>
            <img src="/profile.ico" id="profilePicture" alt="profile"/>
        </div>
    );
}

export default ProfileComponent;