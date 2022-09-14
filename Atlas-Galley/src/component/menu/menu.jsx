import React from "react";

function NavItem(props) {
    return(
        <li className="nav-item"><a href={props.link}>{props.value}</a>{props.sub}</li>
    )
}
function SubNav(props) {
    return(
        <>
            <span className="bi-caret-right"></span>
            <ul className="sub-nav">{props.childs}</ul>
        </>
    )
}
function Menu(props) {
    const obj = props.menuContent
    const x = obj.map((content, index) => 
    <NavItem 
        key={index} 
        value={obj[index].title} 
        link={obj[index].link}
        sub={obj[index].subnav === undefined || obj[index].subnav === null  ? null : <SubNav childs={obj[index].subnav.map((content, i) => <li key={i}><a href={obj[index].subnav[i].link}>{obj[index].subnav[i].title}</a></li>)} /> }
    />)
    return(
        <nav className={props.class}>
            <ul>
                {x}
            </ul>
        </nav>
    )
}
export default Menu