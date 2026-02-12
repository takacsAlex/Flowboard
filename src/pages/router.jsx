import HomePage from "./home/home.tsx";
import RegisterPage from "./auth/registerPage.tsx";
import LoginPage from "./auth/loginPage.tsx";
import Dashboard from "./dashboard/dashboard.tsx";
import NotFoundPageWidget from "../components/shared/pageNotFound.jsx";
import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

const Router = () => {
    const [cookies, setCookies] = useCookies(["user"]);

    const handleRegister = (data) => {
        const cookieTTL = Number(process.env.REACT_APP_COOKIE_EXPERATION_TIME)
        setCookies("user", data, { path: "/", maxAge: cookieTTL});
    }

    return(
        <Routes>
            <Route path="/" element={cookies.user? <Dashboard /> : <HomePage />}/>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/signup" element={<RegisterPage onRegister={handleRegister}/>}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/dashboard" element={<Dashboard />}/>

            {/* for every unknown path: */}
            <Route path="/*" element={<NotFoundPageWidget />}/>
        </Routes>
    );
}

export default Router; 
