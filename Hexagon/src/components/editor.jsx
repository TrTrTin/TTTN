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

function detectProjectLanguage(content) {
  const blocks = content?.content || [];

  const languages = [];

  for (const block of blocks) {
    const lang = block.props?.language;

    // Component chưa hỗ trợ language thì bỏ qua
    if (!lang) continue;

    languages.push(lang);
  }

  if (languages.length === 0) {
    return "VI";
  }

  const unique = [...new Set(languages)];

  return unique.length === 1
    ? unique[0]
    : "MIX";
}

export default function Editor({
  projectId,
  onPublish,
}) {
  const [project, setProject] = useState(null);
  const [data, setData] = useState(EMPTY);


  const publishing = useRef(false);

  /* =========================
     LOAD PROJECT
  ========================= */

  useEffect(() => {
    if (!projectId) return;

    const currentProject = getProjectById(projectId);

    if (!currentProject) return;

    setProject(currentProject);



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
      onChangeLanguage: () => { },
    });
  }, [project]);

  /* =========================
     PUBLISH
  ========================= */

  const handlePublish = (newData) => {
    if (!project) return;
    if (publishing.current) return;

    publishing.current = true;

    const normalized = normalize(newData);

    const updated = updateProject(project.id, {
      language: detectProjectLanguage(normalized),
      content: normalized,
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