import React, { useState, useEffect } from "react";
import { Puck, Render } from "@measured/puck";
import "@measured/puck/puck.css";
import puckConfig from "../admin-puck-config.jsx";

export default function Editor() {
  const [data, setData] = useState({ content: [] });
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("puck-page");

    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  if (preview) {
    return (
      <Render
        config={puckConfig}
        data={data}
      />
    );
  }

  return (
    <Puck
      config={puckConfig}
      data={data}
      onPublish={(newData) => {
        localStorage.setItem(
          "puck-page",
          JSON.stringify(newData)
        );

        setData(newData);
        setPreview(true);
      }}
    />
  );
}