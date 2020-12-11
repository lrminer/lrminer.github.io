import React, {useState} from "react";
import workExperience from '../data/workExperience';
// import Modal from './Modal';
import Modal from 'react-modal';
// import ModalWrapper from "./Modal.styled";

const Job = ({title, startDate, endDate, company, description, achievements}) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <tr className={"pointer"} onClick={toggleOpen}>
                <th scope={"row"}>{title}</th>
                <td>{startDate}</td>
                <td>{endDate}</td>
                <td>{company}</td>
            </tr>


            <Modal
                className={"myModal"}
                overlayClassName={"overlay"} closeTimeoutMD={250}
                onRequestClose={toggleOpen}
                isOpen={open}>
                <div
                    // style={{color: "white"}}
                >
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{company}</p>
                    </div>
                    {achievements.length > 0 && <ul className={"list-group list-group-flush"}>
                        {achievements.map((achievement, index) => (
                            <li className={"list-group-item"} key={{index}}>
                                {achievement}
                            </li>
                        ))}
                    </ul>}
                </div>
            </Modal>
        </>
    )
}

const WorkExperience = () => {

    return (
        <section className={"mt-5 p-5"}
                 style={{border: 'black 1px solid', borderRadius: "10px"}}>
            <h1 style={{color: "#007ba7"}}>Work Experience</h1>
            <table className={"table table-striped table-responsive-md"}>
                <thead>
                <tr>
                    <th scope={'col'}>Title</th>
                    <th scope={'col'}>Start Date</th>
                    <th scope={'col'}>End Date</th>
                    <th scope={'col'}>Company</th>
                </tr>
                </thead>
                <tbody>
                {workExperience.map((job, index) => <Job key={index} {...job} />)}
                </tbody>
            </table>
            <p>*Click on a row to see more details</p>
        </section>

    );
};

export default WorkExperience;
