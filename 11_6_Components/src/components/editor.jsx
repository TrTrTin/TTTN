import React from "react";
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import puckConfig from "../admin-puck-config.jsx";

const initialData = JSON.parse(
  localStorage.getItem("puck-page") || '{"content":[]}'
);

export default function Editor() {
  return (
    <Puck
      config={puckConfig}
      data={initialData}
      onPublish={(data) => {
        localStorage.setItem(
          "puck-page",
          JSON.stringify(data)
        );

        alert("Publish thành công");
      }}
    />
  );
}