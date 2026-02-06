import HomePage from "./home/home.tsx";
import RegisterPage from "./auth/registerPage.tsx";
import Dashboard from "./dashboard/dashboard.tsx";
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
            <Route path="/signup" element={<RegisterPage onRegister={handleRegister}/>}/>
            <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
    );
}

export default Router; 