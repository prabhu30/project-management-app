import NewProjectBtn from "./NewProjectBtn";

export default function Sidebar({
  projects,
  onAddProject,
  homePage,
  onViewHome,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      {!homePage && (
        <button className="mb-8" onClick={onViewHome}>
          ← &nbsp; Go to Home
        </button>
      )}
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <NewProjectBtn onClick={onAddProject}>+ Add Project</NewProjectBtn>
      </div>
      <ul className="mt-8">
        {projects.map(({ id, title, description, dueDate }) => {
          return (
            <li key={id}>
              <button className="w-full text-left px-3 py-1 rounded-sm my-2 text-stone-400 hover:text-stone-200 hover:bg-stone-800 border-2 border-stone-600">
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
