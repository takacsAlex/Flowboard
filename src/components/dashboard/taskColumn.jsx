import TaskCard from "./taskCard";

const TaskColumn = ({column, tasks}) => {
    return(
        <div>
            <h1>{column.title}</h1>
            {tasks.map(task => {
                <TaskCard task={task} />
            })}
        </div>
    );
}

export default TaskColumn;