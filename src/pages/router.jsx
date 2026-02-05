import HomePage from "./home/home.tsx";
import RegisterPage from "./auth/registerPage.tsx";
import Dashboard from "./dashboard/dashboard.tsx";
import {Route, Routes} from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

const Router = () => {

    const [cookies, setCookies] = useCookies(["user"]);

    const handleRegister = (data) => {
        console.log(data);
        setCookies("user", data, { path: "/", maxAge: Number(process.env.COOKIES_EXPERATION_TIME)});
        console.log(cookies);
    }

    return(
        <Routes>
            <Route path="/" element={
                    <div>{cookies.user? <Dashboard /> : <HomePage />}</div>
            }/>
            <Route path="/signup" element={<RegisterPage onRegister={handleRegister}/>}/>
            <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
    );
}

export default Router; 