import { projectData } from "../data/projects.js";
import { hyphenate } from "./hyphenateWords.js";

export function find(title) {
  return projectData.find((proj) => hyphenate(proj.title) === title)
}