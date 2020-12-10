import React from "react";

const Intro = () => {

    return (
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
    );
};

export default Intro;
