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
        <h1>My name is Logan</h1>
      </div>
      {/* <div style={styles.wrapper}>
      </div> */}
      <div style={styles.wrapper}>
        <h2>
          <ul>
            I am
            <li>an educator</li>
            <li>a mentor</li>
            <li>a lifelong learner</li>
          </ul>
        </h2>
      </div>
      {/* <div style={styles.wrapper}>
        <h1>Come take a look at my work:</h1>
      </div> */}
    </>
  );
};

export default About;
