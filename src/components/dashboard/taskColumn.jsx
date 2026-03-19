import TaskCard from "./taskCard";

const TaskColumn = ({column, tasks}) => {
    return(
        <div>
            <h1>{column.title}</h1>
            <div>
            {tasks.map(task => {
                return <TaskCard task={task} />
            })}
            </div>
        </div>
    );
}

export default TaskColumn;