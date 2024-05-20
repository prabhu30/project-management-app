import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDeleteProject,
  tasks,
  onAddTask,
  onDeleteTask,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const selectedProjectTasks = tasks.filter(
    (task) => task.projectId === project.id
  );

  return (
    <div className="w-[45rem] mt-14">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="px-4 text-stone-600 hover:text-red-600"
            onClick={() => onDeleteProject(project.id)}
          >
            <i className="fa-solid fa-trash-can text-xl"></i>
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>

      <Tasks
        tasks={selectedProjectTasks}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}
