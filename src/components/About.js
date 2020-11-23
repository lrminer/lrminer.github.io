const About = () => {
  //
  const name = "";

  const styles = {
    wrapper: {
      background: "#222",
      color: "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      //   fontFamily: "News Gothic",
      //   fontWeight: "bold",
    },
  };
  return (
    <>
      <div style={styles.wrapper}>
        <h1>Hi{name && `, ${name}`}!</h1>
      </div>
      <div style={styles.wrapper}>
        <h1>My name is Logan</h1>
      </div>
      <div style={styles.wrapper}>
        <ul>
          <h2>
            I am also:
            <li>an educator</li>
            <li>a mentor</li>
            <li>a lifelong learner</li>
          </h2>
        </ul>
      </div>
      <div style={styles.wrapper}>
        <h1>Come take a look at my work:</h1>
      </div>
    </>
  );
};

export default About;
