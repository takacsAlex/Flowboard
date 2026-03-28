import { useDraggable } from "@dnd-kit/core";

export type TaskProps = {
    id: string;
    title: string;
    description: string;
    status: string;
    difficulty: string;
}

const TaskCard = (task: TaskProps) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: task.id,
    })

    const style = transform? {transform: `translate(${transform.x}px, ${transform.y}px)`} : undefined
    return(
        <div className="task-card" ref={setNodeRef} {...listeners} {...attributes} style={style}>
            <h1 className="task-card-title">{task.title}
                <span className="task-card-difficulty" style={{backgroundColor: task.difficulty}}></span>
            </h1>
            <p className="task-card-description">{task.description}</p>
        </div>
    );
}

export default TaskCard;  