import React from "react";

export default (props) => {
    return (
        <footer className="container-fluid bg-4 text-center">
            <p>Find Me
                <a href="https://www.linkedin.com/in/justin-abreu-b4a081129/">
                    <img alt="linkin"
                    src={props.liIcon}></img>
                </a>
                <a href="https://github.com/JGABREU2145">
                    <img alt="github" 
                    src={props.ghIcon}></img>
                </a>
            </p> 
        </footer>
    )
}