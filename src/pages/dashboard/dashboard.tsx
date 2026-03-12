import ProfileComponent from "../../components/dashboard/profile";
import ProjectSelecter from "../../components/dashboard/projectSelecter";
import TaskBoard from "../../components/dashboard/taskBoard";
import "./dashboard.css";

const Dashboard = () => {
    return(
        <>
            <div className="row">
                <div className="col"><ProfileComponent /></div>
            </div>
            <div className="row">
                <div className="col"><ProjectSelecter /></div>
            </div>
            <div className="row">
                <div className="col"><TaskBoard /></div>
            </div>
        </>
    );
}

export default Dashboard;