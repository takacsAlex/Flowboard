import TaskCard from "./taskCard.tsx";
import { useDroppable } from '@dnd-kit/core';
import { TaskProps } from "./taskCard.tsx";

type ColumnProps = {
    column: any;
    tasks: TaskProps[];
}

const TaskColumn = ({column, tasks}: ColumnProps) => {
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

export default TaskColumn;