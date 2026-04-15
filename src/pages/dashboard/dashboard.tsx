import ProfileComponent from "../../components/dashboard/profile";
import ProjectSelecter from "../../components/dashboard/projectSelecter";
import TaskBoard from "../../components/dashboard/taskBoard.tsx";
import Menu  from "../../components/shared/menu.tsx";
import ProjectNavBar from "../../components/dashboard/projectNavBar.tsx";
import MessageBoard from "../../components/dashboard/messageBoard.tsx";
import { useState } from "react";
import "./dashboard.css";

const Dashboard = () => {
    const [navBarStatus, setNavBarStatus] = useState("tasks");

    const handleNavBar = (status) => {
        setNavBarStatus(status);
    }

    return(
        <>
            <Menu />
            <ProfileComponent />
            <ProjectSelecter />
            <ProjectNavBar onSelect={handleNavBar}/>
            {navBarStatus === "tasks" ? <TaskBoard /> : <MessageBoard />}
        </>
    );
}
export default Dashboard;