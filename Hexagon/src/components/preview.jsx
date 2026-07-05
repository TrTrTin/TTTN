import { useEffect, useState } from "react";
import { Render } from "@measured/puck";
import { createPuckConfig } from "../admin-puck-config";
import { getProjectById, getProjectByTranslation } from "../services/projectStorage";

export default function Preview({ projectId, onBack, onChangeProject, }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!projectId) return;

    const data = getProjectById(projectId);

    setProject(data);
  }, [projectId]);

  const handleChangeLanguage = (targetLanguage) => {
    if (!project) return;

    const translated = getProjectByTranslation(
      project.translationGroup,
      targetLanguage
    );

    if (!translated) return;

    onChangeProject?.(translated.id);
  };

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Không tìm thấy project.
      </div>
    );
  }

  const puckConfig = createPuckConfig({
    project,
    language: project.language,
    onChangeLanguage: handleChangeLanguage,
  });
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <div className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-2xl font-bold">
          {project.title}
        </h1>

        <button
          onClick={onBack}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white"
        >
          Quay lại
        </button>
      </div> */}

      {/* Website */}
      <Render
        config={puckConfig}
        data={project.content}
      />
    </div>
  );
}