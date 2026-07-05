import { useEffect, useState } from "react";
import {
  createProject,
  getProjects,
  deleteProject,
  copyProject,
  renameProject,
  createTranslation
} from "../services/projectStorage";

export default function Projects({ onCreate, onEdit, onOpen }) {

  const handleRename = (id) => {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    const newName = window.prompt("Nhập tên trang mới:", project.title);
    if (!newName || newName.trim() === "") return;

    renameProject(id, newName.trim());

    setProjects(getProjects()); // refresh UI
  };

  const [projects, setProjects] = useState([]);

  // Load data từ localStorage
  useEffect(() => {
    setProjects(getProjects());
  }, []);

  // Tạo project mới
  const handleCreate = () => {
    const project = createProject();

    setProjects(getProjects()); // refresh list

    onCreate(project.id);
  };


  const handleCopy = (id) => {
    copyProject(id);
    setProjects(getProjects());
  };


  const handleTranslate = (id) => {
    const project = createTranslation(id);

    if (!project) return;

    // refresh danh sách
    setProjects(getProjects());

    // mở luôn Editor của bản dịch
    onEdit(project.id);
  };

  // Delete project
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Xóa page này?");
    if (!confirmDelete) return;

    deleteProject(id);

    setProjects(getProjects());
  };
  return (
    <div className="min-h-screen bg-slate-100 px-12 py-10">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <button
          onClick={handleCreate}
          className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700"
        >
          + Tạo Page
        </button>

        <h1 className="text-5xl font-extrabold tracking-tight text-gray-800">
          Trang quản lí
        </h1>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        {/* Header */}
        <div className="grid grid-cols-12 border-b bg-slate-50 px-6 py-5 text-sm font-bold uppercase tracking-wider text-gray-600">
          <div className="col-span-4">Tên trang</div>
          <div className="col-span-2">Ngôn ngữ</div>
          <div className="col-span-3">Ngày tạo</div>
          <div className="col-span-3 text-right">Thao tác</div>
        </div>

        {/* List */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-12 items-center border-b px-6 py-5 transition hover:bg-blue-50"
          >
            {/* Title */}
            <div className="col-span-4">
              <button
                onClick={() => onOpen(project.id)}
                className="text-left text-lg font-semibold text-blue-600 hover:underline"
              >
                {project.title}
              </button>
            </div>

            <div className="col-span-2">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${(project.language || "VI") === "EN"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-green-100 text-green-700"
                  }`}
              >
                {project.language || "VI"}
              </span>
            </div>

            {/* Date */}
            <div className="col-span-3 font-medium text-gray-500">
              {project.createdAt || "—"}
            </div>

            {/* Actions */}
            <div className="col-span-3 flex justify-end gap-3">
              <button
                onClick={() => handleRename(project.id)}
                className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-yellow-600"
              >
                Rename
              </button>

              <button
                onClick={() => handleTranslate(project.id)}
                className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-purple-700"
              >
                Translate
              </button>


              <button
                onClick={() => onEdit(project.id)}
                className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-amber-600"
              >
                Edit
              </button>

              <button
                onClick={() => handleCopy(project.id)}
                className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-600"
              >
                Copy
              </button>

              <button
                onClick={() => handleDelete(project.id)}
                className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Empty */}
        {projects.length === 0 && (
          <div className="py-16 text-center text-lg text-gray-500">
            Chưa có page nào.
          </div>
        )}
      </div>
    </div>
  );
}