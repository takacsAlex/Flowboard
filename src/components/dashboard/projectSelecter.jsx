import './projectSelecter.css'

const ProjectSelecter = () => {
    return(
        <div className="projectSelecterModule">
        <form>
            <select id="project-selecter">
                <option value="">Main</option>
                <option value="">Project1</option>
                <option value="">Project2</option>
                <option value="">Project3</option>
                <option value="">new project</option>
            </select>
        </form>
        </div>
    );
}

export default ProjectSelecter;