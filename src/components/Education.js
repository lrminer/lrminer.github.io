import React from "react";

const Education = () => {

    return (
        <section className={"mt-5 p-5"}
                 style={{border: 'black 1px solid', borderRadius: "10px", background: "white"}}>
            <h1 style={{color: "#007ba7"}}>Education</h1>
            <table className={"table table-striped table-responsive-md"}>
                <thead>
                <tr>
                    <th scope={'col'} className={''}>Degree/Certification</th>
                    <th scope={'col'}>Subject</th>
                    <th scope={'col'}>Date Completed</th>
                    <th scope={'col'}>Institution</th>
                    {/*<th scope={'col'}>Role</th>*/}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope={'row'}>Bachelor of Science (B.S.)</th>
                    <td>Biological Sciences</td>
                    <td>05/2016</td>
                    <td>Butler University</td>
                    {/*<td>React Developer</td>*/}
                </tr>
                <tr>
                    <th scope={'row'}>Certificate</th>
                    <td>Full Stack Web Development</td>
                    <td>09/2020</td>
                    <td>Georgia Institute of Technology</td>
                    {/*<td>React Developer</td>*/}
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Education;
