const STORAGE_KEY = "projects";

/* =========================
   STORAGE
========================= */

function load() {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function save(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function now() {
  return new Date().toLocaleString();
}

function uid() {
  return crypto?.randomUUID?.() || String(Date.now());
}

function emptyContent() {
  return {
    root: {},
    content: [],
  };
}

function cloneContentWithLanguage(content, language) {
  const cloned =
    typeof structuredClone === "function"
      ? structuredClone(content)
      : JSON.parse(JSON.stringify(content));

  // MIX không phải ngôn ngữ của component
  if (language === "MIX") {
    return cloned;
  }

  cloned.content = (cloned.content || []).map((block) => {
    if (!block.props?.language) {
      return block;
    }

    return {
      ...block,
      props: {
        ...block.props,
        language,
      },
    };
  });

  return cloned;
}

/* =========================
   GET
========================= */

export function getProjects() {
  return load();
}

export function getProjectById(id) {
  return load().find((p) => p.id === id);
}

export function getProjectByTranslation(groupId, language) {
  return load().find(
    (p) =>
      p.translationGroup === groupId &&
      p.language === language
  );
}

export function getTranslations(groupId) {
  return load().filter(
    (p) => p.translationGroup === groupId
  );
}

/* =========================
   CREATE
========================= */

export function createProject() {
  const projects = load();

  const id = uid();

  const project = {
    id,
    title: "New Page",

    language: "VI",

    translationGroup: id,

    status: "draft",

    createdAt: now(),
    updatedAt: now(),

    content: emptyContent(),
  };

  projects.push(project);

  save(projects);

  return project;
}

/* =========================
   UPDATE (PUBLISH)
========================= */

export function updateProject(id, payload) {
  const projects = load();

  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) return null;

  projects[index] = {
    ...projects[index],

    language: payload.language ?? projects[index].language,

    content: payload.content ?? projects[index].content,

    status: "published",

    updatedAt: now(),
    publishedAt: now(),
  };

  save(projects);

  return projects[index];
}

/* =========================
   DELETE
========================= */

export function deleteProject(id) {
  save(load().filter((p) => p.id !== id));
}

/* =========================
   COPY
========================= */

export function copyProject(id) {
  const projects = load();

  const original = projects.find((p) => p.id === id);

  if (!original) return null;

  const copy = {
    ...original,

    id: uid(),

    title: `${original.title} (Copy)`,

    status: "draft",

    createdAt: now(),
    updatedAt: now(),
  };

  projects.push(copy);

  save(projects);

  return copy;
}

/* =========================
   RENAME
========================= */

export function renameProject(id, title) {
  const projects = load();

  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) return;

  projects[index].title = title;
  projects[index].updatedAt = now();

  save(projects);
}

/* =========================
   TRANSLATE
========================= */

export function createTranslation(id, targetLanguage = null) {
  const projects = load();

  const original = projects.find((p) => p.id === id);

  if (!original) return null;

  const groupId = original.translationGroup || original.id;

  const language =
    targetLanguage ??
    (
      original.language === "VI"
        ? "EN"
        : original.language === "EN"
          ? "MIX"
          : "VI"
    );

  const existed = projects.find(
    (p) =>
      p.translationGroup === groupId &&
      p.language === language
  );

  if (existed) {
    return existed;
  }

  const translated = {
    ...original,

    id: uid(),

    translationGroup: groupId,

    language,

    status: "draft",

    createdAt: now(),
    updatedAt: now(),

    content: cloneContentWithLanguage(
      original.content,
      language
    ),
  };

  projects.push(translated);

  save(projects);

  return translated;
}
/* =========================
   CHANGE LANGUAGE
========================= */

export function updateProjectLanguage(id, language) {
  const projects = load();

  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) return null;

  projects[index].language = language;
  projects[index].updatedAt = now();

  save(projects);

  return projects[index];
}


