import "./home.css"
import GetStarted from "../../components/home/getStarted.jsx";
import SignIn from "../../components/home/signIn.jsx";

const HomePage = () => {
    return(
        <>
            <div className="gettingStarted container">
                <GetStarted />
            </div>
            <SignIn />
        </>
    );
}

export default HomePage;