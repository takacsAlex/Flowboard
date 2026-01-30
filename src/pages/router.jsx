import HomePage from "./home/home.tsx";
import AuthPage from "./auth/auth.tsx";
import {Route, Routes} from "react-router-dom"

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/signin" element={<AuthPage />}/>
        </Routes>
    );
}

export default Router; 