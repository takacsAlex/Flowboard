import './getStarted.css'

const GetStarted = () => {
    return(
        <div className="get_started">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Organize your tasks effortlessly and completely free with Flowboard!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>
                            Flowboard helps you organize your tasks in a clear, visual way so you can focus on what actually matters. Create boards, move tasks forward, and keep your workflow simple and distraction free. Best of all, it’s completely free to get started with no setup and no hassle.
                        </h2>
                    </div>
                </div>
                <div className="container" id="get_started_bts">
                <div className="row gap-4">
                    <div className="col-xl-4 col-xs-12">
                    <a href="/signup"><button className="btn btn-outline-light" id="get_started_bt">Get started!</button></a>
                    </div>
                    <div className="col-xl-5 col-xs-12 offset-0">
                        <button className="btn btn-outline-secondary" id="read_more_bt">or read more about us</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;