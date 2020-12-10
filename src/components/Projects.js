import React from "react";

const Projects = () => {

    return (
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

    );
};

export default Projects;
