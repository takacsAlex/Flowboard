import TaskColumn from "./taskColumn";
import TaskCard from "./taskCard";
import { useState } from "react";
import { useDraggable } from "@dnd-kit/react";
import './taskBoard.css';

const TaskBoard = () => {
    const columns = [
        {id: "to_do", title: "To Do"},
        {id: "in_progress", title: "In Progress"},
        {id: "done", title: "Done"}
    ]

    const tasks = [
        {
            id: 1,
            title: "Task1",
            description: "This is task one",
            status: "to_do"
        },
        {
            id: 2,
            title: "Task2",
            description: "This is task two",
            status: "to_do"
        },
        {
            id: 3,
            title: "Task3",
            description: "This is task three",
            status: "in_progress"
        }
    ]

    const [task, setTasks] = useState(tasks);
    const {ref} = useDraggable({id: "draggable"});


    return(
        <div ref={ref}>
            <div>
            {columns.map((column) => {
                return <TaskColumn column={column} tasks={tasks}/>
            })}
            </div>
        </div>
    );
}

export default TaskBoard;