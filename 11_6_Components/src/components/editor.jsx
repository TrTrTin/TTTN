import React from "react";
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import puckConfig from "../admin-puck-config.jsx";

const data = {
  content: [],
};

export default function Editor() {
  return <Puck config={puckConfig} data={data} />;
}