import { useRecoilState } from "recoil";
import { nameState } from "../atoms";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Button } from "react-bootstrap";
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

const About = () => {
  //
  const [name, setName] = useRecoilState(nameState);
  const possibleSections = ["greeting", "intro", "iama"];

  return (
    <>
      <div id="greeting" style={styles.wrapper}>
        <h1>Hi{name && `, ${name}`}!</h1>
      </div>

      <div id="intro" style={styles.wrapper}>
        <h1>My name is Logan</h1>
      </div>
      <div id="iama" style={styles.wrapper}>
        <h2>
          <ul>
            I am
            <li>a developer</li>
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
