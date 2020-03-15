import React from "react";

export default (props) => {
    return (
    <div className="container-fluid bg-1 text-center">
        <h3 className="margin">Justin Abréu</h3>
            <img src={props.pic} 
                className="img-responsive img-circle margin"
                
                alt="Justin Abréu" 
                width="350" 
                height="350">
                
            </img>
        <h3>^ That's me. Right there ^ <i className="fas fa-dice-one    "></i></h3>
    </div>
    )
}