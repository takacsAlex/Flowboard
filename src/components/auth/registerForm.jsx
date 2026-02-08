import React, { useState } from "react";
import "./registerForm.css";

const RegisterForm = ({ onSubmit }) => {
    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit({nickName, email, password, passwordAgain})
    }

    return(
        <>
            <div className="container register_form">
                <div className="row">
                    <div className="col">
                        <h1 id="signup_heading">Get started!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <label className="form-label" for="nickname">Nickname:</label>
                                    <input type="text" id="nickname" className="form-control btn btn-outline-dark" value={nickName} onChange={(e) => setNickName(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label className="form-label" for="email">Email:</label>
                                    <input type="email" id="email" className="form-control btn btn-outline-dark" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="form-label" for="password">Password:</label>
                                    <input type="password" id="password" className="form-control btn btn-outline-dark" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div className="col">
                                    <label className="form-label" for="password_again">Password again:</label>
                                    <input type="password" id="password_again" className="form-control btn btn-outline-dark" value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row">
                                <a href="#" id="link_login">Already have an account?</a>
                            </div>
                            <div className="row">
                                <input type="submit" value={"Create an account"} className="btn btn-outline-dark" id="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterForm;