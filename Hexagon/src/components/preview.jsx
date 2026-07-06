import { useEffect, useState } from "react";
import { Render } from "@measured/puck";
import { createPuckConfig } from "../admin-puck-config";
import { getProjectById, getTranslations } from "../services/projectStorage";

export default function Preview({ projectId, onBack, onChangeProject, }) {
  const [project, setProject] = useState(null);
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    if (!projectId) return;

    const data = getProjectById(projectId);

    setProject(data);

    if (data) {
      const translationProjects = getTranslations(
        data.translationGroup
      );

      setTranslations(translationProjects);
    }
  }, [projectId]);

  const handleChangeLanguage = (projectId) => {
    onChangeProject?.(projectId);
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  const puckConfig = createPuckConfig({
    project,

    translations,

    onChangeLanguage: handleChangeLanguage,

  });

  return (
    <div className="min-h-screen bg-white">
      {/* Website */}
      <Render
        config={puckConfig}
        data={project.content}
      />
    </div>
  );
}
