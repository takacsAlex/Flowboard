import './loginForm.css'

const LoginForm = () => {
    return(
        <>
            <div className="container login_form">
                <div className="row">
                    <div className="col">
                        <h1 id="signin_heading">Log into your account!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <label className="form-label" for="email">Email:</label>
                                    <input type="text" id="email" className="form-control btn btn-outline-dark" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="form-label" for="password">Password:</label>
                                    <input type="password" id="password" className="form-control btn btn-outline-dark" />
                                </div>
                            </div>
                            <div className="row">
                                <a href="#" id="link_register">Don't have an account?</a>
                            </div>
                            <div className="row">
                                <input type="submit" value={"Log in"} className="btn btn-outline-dark" id="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginForm;