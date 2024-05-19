import NewProjectBtn from "./NewProjectBtn";

export default function Sidebar({ onAddProject, homePage, onViewHome }) {
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
      <ul></ul>
    </aside>
  );
}
