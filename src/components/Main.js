import Intro from "./Intro";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";
import Projects from './Projects'
import AdditionalInformation from "./AdditionalInformation";
const Main = () => {
    return (
        <div className={"mt-5 pt-5 pb-5"} style={{background: "wheat"}}>
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