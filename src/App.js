import {useState, useEffect, useMemo} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import Modal from "./components/Modal";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import {RecoilRoot} from "recoil";
import {Link} from "react-scroll";
import Navbar from './components/Navbar'

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Main></Main>
        </>

    )
}

export default App;
