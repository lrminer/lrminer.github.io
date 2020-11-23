const Skills = () => {
  //
  const name = "";

  const styles = {
    wrapper: {
      background: "#222",
      color: "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      //   justifyContent: "space-around",
      alignItems: "center",
    },
  };
  const skills = [
    { name: "React JS", type: "Frontend" },
    { name: "React Native", type: "Frontend" },
    { name: "Node", type: "Frontend" },
    { name: "Express", type: "Frontend" },
    { name: "GraphQL", type: "Frontend" },
    { name: "MongoDB", type: "Frontend" },
    { name: "MySQL", type: "Frontend" },
    { name: "Postgres", type: "Frontend" },
    { name: "Redux", type: "Frontend" },
    { name: "Recoil", type: "Frontend" },
    { name: "Bootstrap", type: "Frontend" },
    { name: "Bulma", type: "Frontend" },
    { name: "CSS", type: "Frontend" },
    { name: "SCSS", type: "Frontend" },
    { name: "Webpack", type: "Frontend" },
    { name: "NextJS", type: "Frontend" },
    { name: "Gatsby", type: "Frontend" },
    { name: "Angular", type: "Frontend" },
    { name: "RESTful APIs", type: "Frontend" },
    { name: "Authentication", type: "Frontend" },
    { name: "Webhooks", type: "Frontend" },
    { name: "Microservices", type: "Frontend" },
    { name: "AWS", type: "Frontend" },
    { name: "Tensorflow", type: "Frontend" },
    { name: "Linux", type: "Frontend" },
    { name: "Docker", type: "Frontend" },
    { name: "Git", type: "Frontend" },
    { name: "GitHub", type: "Frontend" },
    { name: "Unit Testing", type: "Frontend" },
    { name: "CI/CD", type: "Frontend" },
    { name: "Postman", type: "Frontend" },
    { name: "Javascript", type: "Frontend" },
    { name: "Python", type: "Frontend" },
    { name: "NPM", type: "Frontend" },
    { name: "DevOps", type: "Frontend" },
    { name: "Brain.js", type: "Frontend" },
    { name: "Handlebars", type: "Frontend" },
    { name: "Socket.io", type: "Frontend" },



    // { name: "Redux" },
  ];

  const sortByName = (a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  };


  return (
    <div style={styles.wrapper}>
      {/*       <h1>Skills</h1>
       */}{" "}
      <h2>Experience with:</h2>
      <div className="row">
        {skills.sort(sortByName).map((skill) => {
          return (
            <div className="col-6 col-sm-4 col-md-2 col-lg-2 text-center">
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
