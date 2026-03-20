import TaskCard from "./taskCard";

const TaskColumn = ({column, tasks}) => {
    return(
        <div className="task_column">
            <h1>{column.title}</h1>
            <div>
            {tasks.map(task => {
                if (task.status == column.id) {
                    return <TaskCard task={task} />
                }
            })}
            </div>
        </div>
    );
}

export default TaskColumn;