import React from 'react'

const Navbar = () => {

    return <div style={{background: '#007ba7', color: 'white', position: "fixed", top: 0, width: "100%", zIndex: 999}}>
        <div className={'container d-flex justify-content-between'} style={{padding: "15px 0px"}}>
            <div id="title" className={'pl-2 pl-sm-0'}>
                Logan Miner
            </div>
            <div className={'d-flex flex-row align-items-center justify-content-center'} id="social-links">
                <div className="d-flex flex-row pr-2 pr-sm-0">
                    <div className={'pl-3'}>
                        <a style={{color: "white"}} href="LOGAN_MINER_RESUME.pdf" download={true}>Resume</a>
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
}

export default Navbar