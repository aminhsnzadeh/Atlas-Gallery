import React from "react";

function HeadSm(props) {
    return(
        <h3 className="head-sm" data-color={props.color}>{props.value}</h3>
    )
}
function HeadMd(props) {
    return(
        <h2 className="head-md" data-color={props.color}>{props.value}</h2>
    )
}
function HeadBold(props) {
    return(
        <h1 className="head-bold" data-color={props.color}>{props.value}</h1>
    )
}
function Logo(props) {
    return(
        <h3 className="logo" data-color={props.color}>{props.value}</h3>
    )
}

export {
    HeadSm,
    HeadMd,
    HeadBold,
    Logo
}