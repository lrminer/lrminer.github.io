import { Fragment } from "react";

import skills from "../data/skills";

const Skills = () => {
  const sortByName = (a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  };

  const detProgWidth = (expLvl) => {
    switch (expLvl) {
      case "beginner":
        return "25%";
      case "intermediate":
        return "50%";
      case "advanced":
        return "75%";
      case "expert":
        return "100%";
      default:
        return "0,0,0";
    }
  };

  return (
    <section
      className={"mt-5 p-5"}
      style={{ border: "black 1px solid", borderRadius: "10px" }}
    >
      <h1 style={{ color: "#007ba7" }}>Technologies</h1>
      <div className={"container"} id="skills">
        <div className="row">
          <div className={"col-6"}>
            <div className={"list-group list-group-flush"}>
              {skills.sort(sortByName).map((skill, i) => {
                if (i % 2 === 0) {
                  return (
                    <Fragment key={i}>
                      <a
                        className={
                          "list-group-item list-group-item-action text-center"
                        }
                        style={{}}
                        href={skill.docs}
                      >
                        {skill.name}
                      </a>
                      <div className="progress">
                        <div
                          className={`progress-bar bg-info`}
                          role="progressbar"
                          style={{ width: detProgWidth(skill.experience) }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </Fragment>
                  );
                }
              })}
            </div>
          </div>
          <div className={"col-6"}>
            <div className={"list-group list-group-flush"}>
              {skills.sort(sortByName).map((skill, i) => {
                if (i % 2 !== 0) {
                  return (
                    <Fragment key={i}>
                      <a
                        className={
                          "list-group-item list-group-item-action text-center"
                        }
                        style={{}}
                        href={skill.docs}
                      >
                        {skill.name}
                      </a>
                      <div className="progress">
                        <div
                          className={`progress-bar bg-info`}
                          role="progressbar"
                          style={{ width: detProgWidth(skill.experience) }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </Fragment>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
