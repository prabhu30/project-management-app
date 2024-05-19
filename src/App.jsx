import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSaveProjectDetails(projectData) {
    setProjectsState((prevState) => {
      return {
        selectedProjectId: undefined,
        projects: [
          ...prevState.projects,
          {
            ...projectData,
          },
        ],
      };
    });
  }

  const homePage = projectsState.selectedProjectId === undefined;

  function handleViewHomePage() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSaveProjectDetails={handleSaveProjectDetails} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen flex gap-8">
      <Sidebar
        homePage={homePage}
        onViewHome={handleViewHomePage}
        onAddProject={handleAddProject}
      />
      {content}
    </main>
  );
}

export default App;
