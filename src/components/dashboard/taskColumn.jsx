import TaskCard from "./taskCard";
import {useDroppable} from '@dnd-kit/react';

const TaskColumn = ({column, tasks, children}) => {
    const {ref} = useDroppable({id: column.id});

    return(
        <div className="task_column" ref={ref}>
            <h1>{column.title}</h1>
            <div>
            {/* {tasks.map(task => {
                if (task.status == column.id) {
                    return <TaskCard task={task} />
                }
            })} */}
                {children}
            </div>
        </div>
    );
}

export default TaskColumn;