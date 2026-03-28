import { useState } from "react";
import { DragEndEvent } from "@dnd-kit/core";
import { DndContext } from "@dnd-kit/core";
import { TaskProps } from "./taskCard.tsx";
import TaskColumn from "./taskColumn.tsx";
import './taskBoard.css';

const TaskBoard = () => {
    const columns = [
        {id: "to_do", title: "To Do"},
        {id: "in_progress", title: "In Progress"},
        {id: "done", title: "Done"}
    ]

    const initialTasks = [
        {
            id: "1",
            title: "Task1",
            description: "This is task one",
            status: "to_do",
            difficulty: "red"
        },
        {
            id: "2",
            title: "Task2",
            description: "This is task two",
            status: "to_do",
            difficulty: "green"
        },
        {
            id: "3",
            title: "Task3",
            description: "This is task three",
            status: "in_progress",
            difficulty: "orange"
        }
    ];

    const [tasks, setTasks] = useState(initialTasks);

    function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;
        if(!over) return;

        const taskId = active.id as string;
        const newStatus = over.id as TaskProps["status"];
        setTasks(() => tasks.map((task) => task.id === taskId ? {
            ...task,
            status: newStatus
        } : task));
    }

    return(
        <div className="task-board">
            <DndContext onDragEnd={handleDragEnd}>
                {columns.map((column) => {
                    return <TaskColumn key={column.id} column={column} tasks={tasks.filter((task) => task.status === column.id)} />
                })}
            </DndContext>
        </div>  
    );
}

export default TaskBoard;