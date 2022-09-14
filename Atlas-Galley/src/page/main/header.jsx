import React from "react";
import { useState, useEffect } from "react";
import Menu from "../../component/menu/menu";
import { Logo } from "../../component/text/head";


export default function Header() {
    const header = {
        menu : [
            {
                title : "Home",
                link : "#"
            },
            {
                title : "Gallery",
                link : "#gallery"
            },
            {
                title : "Catagory",
                link : null,
                subnav : [
                    {title : "Nature", "link" : "#"},
                    {title : "City", "link" : "#"},
                    {title : "Office", "link" : "#"},
                    {title : "Dark", "link" : "#"},
                    {title : "Fantastic", "link" : "#"}
                ]
            },
            {
                title : "Contact",
                link : "#contact"
            },
            {
                title : "About",
                link : "#about"
            }
        ],
        logo : 'Amin'
    }
    const [headData, setheadData] = useState(header)
    const [toggle, settoggle] = useState(false)
    const [fix, setfix] = useState("fixed-nav")
    function handleToggle() {
        settoggle(!toggle)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleFix);
    
        return () => {
          window.removeEventListener('scroll', handleFix);
        };
    }, []);
    function handleFix() {  
        setfix(window.scrollY > '100' ? "fixed-nav" : null)
    }
    return(
        <header id="header" className={fix}>
            <Logo value={headData.logo}/>
            <div className="menu desktop">
                <Menu menuContent={headData.menu} />
            </div>
            <div className="menu mobile">
                <button className="mobile-btn" onClick={handleToggle}><span className={toggle ? "bi-x" : "bi-list"} style={{color : toggle ? "white" : "black"}}></span></button>
                <Menu menuContent={headData.menu} class={toggle ? "active-nav" : null} />
            </div>
        </header>
    )
}