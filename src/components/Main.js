import Intro from "./Intro";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";
import Projects from './Projects'
import AdditionalInformation from "./AdditionalInformation";
const Main = () => {
    return (
        <div className={"pt-5 pb-5"} style={{background: "#555"}}>
            <div className="container p-0">
                <Intro/>
                <WorkExperience/>
                <Skills/>
                <Education/>
                <Projects/>
                <AdditionalInformation />
            </div>
        </div>
    )
}

export default Main