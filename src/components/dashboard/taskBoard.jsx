import TaskColumn from "./taskColumn";
import TaskCard from "./taskCard";
import { useState } from "react";
import { useDraggable } from "@dnd-kit/react";
import { DragDropProvider } from "@dnd-kit/react";
import { DndContext } from "@dnd-kit/core";
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

    const [task, setTask] = useState();

    // const targets = []
    // tasks.forEach((task) => {
    //     targets.push(task);
    // })
    // const [target, setTarget] = useState();

    const draggable = (
        tasks.map((task) => {
            return <TaskCard task={task} />
        })
    );


    return(
        <div>
            <DragDropProvider onDragEnd={(event) => {
                if(event.canceled) return;
                setTask(event.operation.target?.id);
            }}
            >
                
                <div>
                {!task ? draggable : null}
                {columns.map((column) => {
                    return <TaskColumn key={column.id} column={column}>
                        {task == column.id? draggable : `Droppable ${column.id}`}
                    </TaskColumn>
                })}
                </div>
            </DragDropProvider>
        </div>  
    );
}

export default TaskBoard;