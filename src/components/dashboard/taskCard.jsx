import { useDraggable } from "@dnd-kit/react";

const TaskCard = ({task}) => {

    const {ref} = useDraggable({id: task.id});

    return(
        <div className="task_card" ref={ref}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    );
}

export default TaskCard;