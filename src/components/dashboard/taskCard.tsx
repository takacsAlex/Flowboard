import { useDraggable } from "@dnd-kit/core";

export type TaskProps = {
    id: string;
    title: string;
    description: string;
    status: string;
}

const TaskCard = (task: TaskProps) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: task.id,
    })

    const style = transform? {transform: `translate(${transform.x}px, ${transform.y}px)`} : undefined
    return(
        <div className="task_card" ref={setNodeRef} {...listeners} {...attributes} style={style}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    );
}

export default TaskCard;  