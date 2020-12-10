import React from "react";

const projects = [
    {
        title: "Pokemonline",
        description: "Gen 1 Pokemon MMORPG powered by WebGL and socket.io",
        href: "https://github.com/lrminer/pokemonline",
    },
    {
        title: "Daily Translator",
        description: "Full Catholic Bible with Spanish translations using swiping gestures. Pulls up a new chapter of bible each day.",
        href: "https://github.com/lrminer/daily-translator",
    }];

const Project = props => {
    return <div className="col-12 col-md-6 mt-5 mb-5">
        <h2>{props.title}</h2>
        <div className={'pt-3'}>{props.description}</div>
        <div className={'pt-3'}><a href={props.href}>GitHub Repo</a>
        </div>
    </div>
}

const Projects = () => {

    return (
        <section className={"mt-5 p-5"}
                 style={{border: 'black 1px solid', borderRadius: "10px"}}>
            <h1 style={{color: "#007ba7"}}>Projects</h1>
            <div className="row">
                {projects.map(project => <Project {...project} />)}
            </div>
        </section>

    );
};

export default Projects;
