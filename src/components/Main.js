import React, {useEffect} from 'react'
import Skills from "./Skills";

const Main = () => {
    return (
        <div className={"pt-5 pb-5"} style={{background: "wheat"}}>
            <div className="container p-0">
                <section className={"p-5"}
                         style={{border: 'black 1px solid', borderRadius: "10px", background: "white"}}>
                    <h1 style={{color: "#007ba7"}}>Logan Miner</h1>
                    <p>Attained Full Stack Development Certificate from Georgia Institute of Technology.</p>
                    {/*<p>Proficient with Node, Express, React, MongoDB, MySQL, Postgres, and GraphQL, among various other*/}
                    {/*    technologies.</p>*/}
                    <p>Able to master new skills quickly.</p>
                    <p>Possess a strong attention to detail, a voracious learning attitude, and an ability to teach
                        others through effective listening and understanding of code intent.</p>
                    <p>Experience working with teams developing content management, news, and e-commerce applications.</p>
                    <p>Looking to implement agile methodologies with a development team to create necessary tools
                        catering to a variety of audiences.</p>
                </section>
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
                            {/*<th scope={'col'}>Role</th>*/}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope={'row'}>Teaching Assistant</th>
                            <td>09/2019</td>
                            <td>Current</td>
                            <td>2U</td>
                            {/*<td>React Developer</td>*/}
                        </tr>
                        <tr>
                            <th scope={'row'}>Digital Development Engineer</th>
                            <td>02/2020</td>
                            <td>09/2020</td>
                            <td>Gray Television</td>
                            {/*<td>React Developer</td>*/}
                        </tr>
                        <tr>
                            <th scope={'row'}>Full Stack Engineer</th>
                            <td>11/2019</td>
                            <td>01/2020</td>
                            <td>Private Contract</td>
                            {/*<td>React Developer</td>*/}
                        </tr>
                        </tbody>
                    </table>
                </section>
                <section className={"mt-5 p-5"}
                         style={{border: 'black 1px solid', borderRadius: "10px", background: "white"}}>
                    <h1 style={{color: "#007ba7"}}>Experience working with:</h1>
                    <Skills/>
                </section>
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
                <section className={"mt-5 p-5"}
                         style={{border: 'black 1px solid', borderRadius: "10px", background: "white"}}>
                    <h1 style={{color: "#007ba7"}}>Projects</h1>
                    <div className="row">
                        <div className="col-12 col-md-6 mt-5 mb-5">
                            <h2>Pokemonline</h2>
                            <div className={'pt-3'}>Gen 1 Pokemon MMORPG powered by WebGL and socket.io</div>
                            <div className={'pt-3'}><a href="https://github.com/lrminer/pokemonline">GitHub Repo</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-5 mb-5">
                            <h2>Daily Translator</h2>
                            <div className={'pt-3'}>Full Catholic Bible with Spanish translations using swiping
                                gestures. Pulls up a new chapter of bible each day.
                            </div>
                            <div className={'pt-3'}><a href="https://github.com/lrminer/daily-translator">GitHub
                                Repo</a></div>
                        </div>

                    </div>
                </section>
                <section className={"mt-5 p-5"}
                         style={{border: 'black 1px solid', borderRadius: "10px", background: "white"}}>
                    <h1 style={{color: "#007ba7"}}>Additional Information</h1>
                    <p>Reach out to me via <a href="mailto:logan.miner@protonmail.com?subject=lrminer.github.io">email</a>.</p>
                </section>
            </div>
        </div>
    )
}

export default Main