import React from "react";

function PriBtn(props) {
    return(
        <button onClick={props.click} style={props.styles} className="btn-primary"><a href={props.link}>{props.value}</a></button>
    )
}
function SecBtn(props) {
    return(
        <button onClick={props.click} style={props.styles} className="btn-secondary"><a href={props.link}>{props.value}</a></button>
    )
}
function DarkBtn(props) {
    return(
        <button onClick={props.click} style={props.styles} className="btn-dark"><a href={props.link}>{props.value}</a></button>
    )
}
function LightBtn(props) {
    return(
        <button onClick={props.click} style={props.styles} className={"btn-light " + props.actived}><a href={props.link}>{props.value}</a></button>
    )
}
export {
    PriBtn,
    SecBtn,
    DarkBtn,
    LightBtn
}