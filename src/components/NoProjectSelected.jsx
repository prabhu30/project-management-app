import NoProjectsImage from "../assets/no-projects.png";
import NewProjectBtn from "./NewProjectBtn";

export default function NoProjectSelected({ onAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={NoProjectsImage}
        alt="An Empty Task List"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or create a new one
      </p>
      <p className="mt-8">
        <NewProjectBtn onClick={onAddProject}>Create Project</NewProjectBtn>
      </p>
    </div>
  );
}
