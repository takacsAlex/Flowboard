import TaskCard, { TaskProps } from "./taskCard.tsx";
import { useDroppable } from '@dnd-kit/core';

type ColumnProps = {
    column: any;
    tasks: TaskProps[];
}

export default function TaskColumn({column, tasks}: ColumnProps) {
    const {setNodeRef} = useDroppable({
        id: column.id,
    });

    return(
        <div className="task-column" ref={setNodeRef}>
            <h1 className="task-column-title">{column.title}</h1>
            <div>
            {tasks.map((task) => {
                if (task.status === column.id) {
                    return <TaskCard {...task} key={task.id}/>
                }
            })}
            </div>
        </div>
    );
}