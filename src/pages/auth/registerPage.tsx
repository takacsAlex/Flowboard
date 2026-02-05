import RegisterForm from "../../components/auth/registerForm";
import "./registerPage.css";

interface props {
    onRegister: () => void
}

const RegisterPage = ({onRegister}: props) => {

    return(
        <>
            <RegisterForm onSubmit={onRegister}/>
        </>
    );
}

export default RegisterPage;