import "@measured/puck/puck.css";
import { Puck } from "@measured/puck";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPuckConfig } from "../admin-puck-config";

import {
  getProjectById,
  updateProject,
} from "../services/projectStorage";

const EMPTY = {
  root: {},
  content: [],
};

function normalize(content) {
  return {
    root: content?.root || {},
    content: Array.isArray(content?.content)
      ? content.content
      : [],
  };
}

export default function Editor({
  projectId,
  onPublish,
}) {
  const [project, setProject] = useState(null);
  const [data, setData] = useState(EMPTY);
  const [language, setLanguage] = useState("VI");

  const publishing = useRef(false);

  /* =========================
     LOAD PROJECT
  ========================= */

  useEffect(() => {
    if (!projectId) return;

    const currentProject = getProjectById(projectId);

    if (!currentProject) return;

    setProject(currentProject);

    setLanguage(currentProject.language || "VI");

    setData(
      normalize(currentProject.content)
    );
  }, [projectId]);

  /* =========================
     PUCK CONFIG
  ========================= */

  const config = useMemo(() => {
    return createPuckConfig({
      project,
      language,

      // Chỉ để Header biết cờ nào đang active.
      // Chưa xử lý đổi ngôn ngữ trong Editor.
      onChangeLanguage: () => {},
    });
  }, [project, language]);

  /* =========================
     PUBLISH
  ========================= */

  const handlePublish = (newData) => {
    if (!project) return;
    if (publishing.current) return;

    publishing.current = true;

    const updated = updateProject(project.id, {
      language,
      content: normalize(newData),
    });

    if (updated) {
      setProject(updated);
      setData(normalize(updated.content));

      onPublish?.(updated.id);
    }

    setTimeout(() => {
      publishing.current = false;
    }, 300);
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen">
      <Puck
        config={config}
        data={data}
        onChange={(newData) => {
          setData(normalize(newData));
        }}
        onPublish={handlePublish}
      />
    </div>
  );
}