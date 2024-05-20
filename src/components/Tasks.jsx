import TaskInput from "./TaskInput";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <TaskInput onAddTask={onAddTask} />
      {tasks.length > 0 ? (
        <ul className="w-3/4 mt-8">
          {tasks.length > 0 &&
            tasks.map((task) => {
              return (
                <li
                  key={task.id}
                  className="flex justify-between px-4 py-2 my-4 bg-stone-300 rounded-md"
                >
                  <span>{task.text}</span>
                  <button
                    className="text-stone-700 hover:text-red-500"
                    onClick={() => onDeleteTask(task.id)}
                  >
                    <i className="fa-solid fa-trash-can text-md"></i>
                  </button>
                </li>
              );
            })}
        </ul>
      ) : (
        <p className="text-stone-600 my-4">
          This project doesn't have any tasks yet.
        </p>
      )}
    </section>
  );
}
