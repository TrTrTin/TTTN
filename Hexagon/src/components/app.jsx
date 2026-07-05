import { useState } from "react";
import Projects from "./projects";
import Editor from "./editor";
import Preview from "./preview";



export default function App() {
  const handleOpen = (projectId) => {
  setCurrentProjectId(projectId);
  setPage("preview");
};


  const handleEdit = (projectId) => {
    setCurrentProjectId(projectId);
    setPage("editor");
  };
  const [page, setPage] = useState("projects");
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const handlePublish = (projectId) => {
    setCurrentProjectId(projectId);
    setPage("preview");
    setReloadKey(prev => prev + 1);
  };
  const handleCreate = (projectId) => {
    setCurrentProjectId(projectId);
    setPage("editor");
  };

  const [reloadKey, setReloadKey] = useState(0);

  return (
    <>
      {page === "projects" && (
        <Projects
          key={reloadKey}
          onCreate={handleCreate}
          onEdit={handleEdit}
          onOpen={handleOpen}
        />
      )}

      {page === "editor" && (
        <Editor
  key={currentProjectId}
  projectId={currentProjectId}
  onBack={() => setPage("projects")}
  onPublish={handlePublish}
  onChangeProject={setCurrentProjectId}
/>
      )}

      {page === "preview" && (
        <Preview
          projectId={currentProjectId}
          onBack={() => setPage("projects")}
          onChangeProject={setCurrentProjectId}
        />
      )}
    </>
  );
}