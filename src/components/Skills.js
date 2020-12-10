const Skills = () => {
    const skills = [
        {
            name: "React JS",
            type: "Frontend",
            docs: "https://reactjs.org/docs/getting-started.html",
            experience: "expert"
        },
        {
            name: "React Native",
            type: "Frontend",
            docs: "https://reactnative.dev/docs/getting-started",
            experience: "intermediate"
        },
        {name: "Node", type: "Frontend", docs: "https://nodejs.org/en/docs/", experience: "expert"},
        {name: "Express", type: "Frontend", docs: "https://expressjs.com/", experience: "expert"},
        {name: "GraphQL", type: "Frontend", docs: "https://graphql.org/code/", experience: "advanced"},
        {name: "MongoDB", type: "Frontend", docs: "https://docs.mongodb.com/", experience: "advanced"},
        {name: "MySQL", type: "Frontend", docs: "https://dev.mysql.com/doc/", experience: "advanced"},
        {name: "Postgres", type: "Frontend", docs: "https://www.postgresql.org/docs/current/", experience: "advanced"},
        {
            name: "Redux",
            type: "Frontend",
            docs: "https://redux.js.org/introduction/getting-started",
            experience: "advanced"
        },
        {
            name: "Recoil",
            type: "Frontend",
            docs: "https://recoiljs.org/docs/introduction/getting-started/",
            experience: "intermediate"
        },
        {
            name: "Bootstrap",
            type: "Frontend",
            docs: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
            experience: "expert"
        },
        {
            name: "CSS",
            type: "Frontend",
            docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            experience: "expert"
        },
        {name: "SCSS", type: "Frontend", docs: "https://sass-lang.com/documentation", experience: "advanced"},
        {name: "Webpack", type: "Frontend", docs: "https://webpack.js.org/concepts/", experience: "intermediate"},
        {name: "NextJS", type: "Frontend", docs: "https://nextjs.org/docs", experience: "intermediate"},
        {name: "Gatsby", type: "Frontend", docs: "https://www.gatsbyjs.com/docs/", experience: "advanced"},
        {name: "Angular", type: "Frontend", docs: "https://angular.io/docs", experience: "beginner"},
        {name: "AWS", type: "Frontend", docs: "https://aws.amazon.com/", experience: "intermediate"},
        {name: "Tensorflow", type: "Frontend", docs: "https://www.tensorflow.org/api_docs", experience: "beginner"},
        {name: "Linux", type: "Frontend", docs: "https://www.kernel.org/doc/html/latest/", experience: "advanced"},
        {name: "Docker", type: "Frontend", docs: "https://docs.docker.com/", experience: "intermediate"},
        {name: "Git", type: "Frontend", docs: "https://git-scm.com/doc", experience: "expert"},
        {name: "GitHub", type: "Frontend", docs: "https://github.com/lrminer", experience: "expert"},
        {
            name: "Postman",
            type: "Frontend",
            docs: "https://learning.postman.com/docs/getting-started/introduction/",
            experience: "advanced"
        },
        {
            name: "Javascript",
            type: "Frontend",
            docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            experience: "expert"
        },
        {name: "Python", type: "Frontend", docs: "https://docs.python.org/3/", experience: "beginner"},
        {name: "npm", type: "Frontend", docs: "https://docs.npmjs.com/", experience: "advanced"},
        {name: "Brain.js", type: "Frontend", docs: "https://brain.js.org/#/", experience: "beginner"},
        {name: "Socket.io", type: "Frontend", docs: "https://socket.io/docs/v3/index.html", experience: "advanced"},
        {name: "Jest", type: "Frontend", docs: "https://jestjs.io/en/", experience: "intermediate"},
        {name: "Enzyme", type: "Frontend", docs: "https://enzymejs.github.io/enzyme/", experience: "intermediate"},

        // { name: "Redux" },
    ];

    const sortByName = (a, b) => {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    };

    // const bgColor = (expLvl) => {
    //     switch (expLvl) {
    //         case 'beginner':
    //             return ''
    //         case 'intermediate':
    //             return '#888'
    //         case 'advanced':
    //             return '#666'
    //         case 'expert':
    //             return '#666'
    //         default:
    //             return '0,0,0'
    //     }
    // }

    const detProgWidth = (expLvl) => {
        switch (expLvl) {
            case 'beginner':
                return '25%'
            case 'intermediate':
                return '50%'
            case 'advanced':
                return '75%'
            case 'expert':
                return '100%'
            default:
                return '0,0,0'
        }
    }

    return (

        <section className={"mt-5 p-5"}
                 style={{border: 'black 1px solid', borderRadius: "10px"}}>
            <h1 style={{color: "#007ba7"}}>Experience working with:</h1>
            <div className={'container'} id="skills">
                <div className="row">
                    <div className={'col-6'}>
                        <div className={"list-group list-group-flush"}>
                            {skills.sort(sortByName).map((skill, i) => {
                                if (i % 2 === 0) {
                                    return <>
                                        <a className={"list-group-item list-group-item-action text-center"} style={{}}
                                           href={skill.docs}>{skill.name}</a>
                                        <div className="progress">
                                            <div className={`progress-bar bg-info`} role="progressbar"
                                                 style={{width: detProgWidth(skill.experience)}}
                                                 ariaValuenow="25" ariaValuemin="0" ariaValuemax="100"></div>
                                        </div>
                                    </>
                                } else {
                                    return;
                                }
                            })}
                        </div>
                    </div>
                    <div className={'col-6'}>
                        <div className={"list-group list-group-flush"}>
                            {skills.sort(sortByName).map((skill, i) => {
                                if (i % 2 === 0) {
                                    return
                                } else {
                                    return <>
                                        <a className={"list-group-item list-group-item-action text-center"} style={{}}
                                           href={skill.docs}>
                                            {skill.name}
                                        </a>
                                        <div className="progress">
                                            <div className={`progress-bar bg-info`} role="progressbar"
                                                 style={{width: detProgWidth(skill.experience)}}
                                                 ariaValuenow="25" ariaValuemin="0" ariaValuemax="100"></div>
                                        </div>
                                    </>;
                                }
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default Skills;
