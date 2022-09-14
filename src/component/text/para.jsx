import React from "react";

function ParaSm(props) {
    return(
        <p className="para-sm" data-color={props.color}>{props.value}</p>
    )
}
function ParaMd(props) {
    return(
        <p className="para-md" data-color={props.color}>{props.value}</p>
    )
}
function ParaBold(props) {
    return(
        <p className="para-bold" data-color={props.color}>{props.value}</p>
    )
}
export {
    ParaSm,
    ParaMd,
    ParaBold
}