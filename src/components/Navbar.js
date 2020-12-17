import React, {useState} from 'react'
import {Link} from 'react-scroll'
import Toggle from './Toggle'

const Navbar = ({theme, toggleTheme}) => {



    return (

            <div style={{background: '#007ba7', color: 'white', position: "fixed", top: 0, width: "100%", zIndex: 999}}>
                <div className={'container d-flex justify-content-between'} style={{padding: "15px 0px"}}>
                    <div id="title" className={'pl-2 pl-sm-0 d-flex justify-content-between align-items-center'}>
                        <Link activeClass="active"
                              to="topOfPage"
                              smooth={true}
                              hashSpy={true}
                              duration={500}
                              delay={0}
                        >
                            Logan Miner
                        </Link>
                        <Toggle theme={theme} toggleTheme={toggleTheme} />


                    </div>
                    <div className={'d-flex flex-row align-items-center justify-content-center'} id="social-links">
                        <div className="d-flex flex-row pr-2 pr-sm-0">
                            <div className={'pl-3'}>
                                <a style={{color: "white"}} href="LoganMinerSoftwareEngineerResume.PDF" download={true}>Resume</a>
                            </div>
                            <div className={'pl-3'}>
                                <a style={{color: "white"}} href="https://github.com/lrminer">GitHub</a>
                            </div>
                            <div className={'pl-3'}>
                                <a style={{color: "white"}}
                                   href="https://www.linkedin.com/in/logan-miner/"

                                >LinkedIn</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Navbar