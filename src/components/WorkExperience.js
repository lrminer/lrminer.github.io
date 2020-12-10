import React from "react";

const WorkExperience = () => {

    return (
        <section className={"mt-5 p-5"}
                 style={{border: 'black 1px solid', borderRadius: "10px", background: "white"}}>
            <h1 style={{color: "#007ba7"}}>Work Experience</h1>
            <table className={"table table-striped table-responsive-md"}>
                <thead>
                <tr>
                    <th scope={'col'} className={''}>Title</th>
                    <th scope={'col'}>Start Date</th>
                    <th scope={'col'}>End Date</th>
                    <th scope={'col'}>Company</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope={'row'}>Teaching Assistant</th>
                    <td>10/2019</td>
                    <td>Current</td>
                    <td>2U</td>
                </tr>
                <tr>
                    <th scope={'row'}>Digital Development Engineer</th>
                    <td>02/2020</td>
                    <td>09/2020</td>
                    <td>Gray Television</td>
                </tr>
                <tr>
                    <th scope={'row'}>Full Stack Engineer</th>
                    <td>11/2019</td>
                    <td>01/2020</td>
                    <td>Private Contract</td>
                </tr>
                </tbody>
            </table>
        </section>

    );
};

export default WorkExperience;
