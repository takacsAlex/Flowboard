import ProfileComponent from "../../components/dashboard/profile";
import ProjectSelecter from "../../components/dashboard/projectSelecter";
import "./dashboard.css";

const Dashboard = () => {
    return(
        <>
            <ProfileComponent />
            <ProjectSelecter />
        </>
    );
}

export default Dashboard;