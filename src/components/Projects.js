import React from "react";
import projects from "../data/projects";

const Project = (props) => {
  return (
    <div className="col-12 col-md-6 mt-5 mb-5">
      <h2>{props.title}</h2>
      <div className={"pt-3"}>{props.description}</div>
      <div className={"pt-3"}>
        <a href={props.href}>GitHub Repo</a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      className={"mt-5 p-5"}
      style={{ border: "black 1px solid", borderRadius: "10px" }}
    >
      <h1 style={{ color: "#007ba7" }}>Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
