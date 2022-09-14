import React, { useState } from "react";
import { HeadMd } from "../../component/text/head";
import { ParaMd } from "../../component/text/para";

export default function Footer() {
    const obj = [
        [
            {
                title : 'Fantasty',
                link : '#'
            },
            {
                title : 'Nature',
                link : '#'
            },
            {
                title : 'Car',
                link : '#'
            },
            {
                title : 'Dark',
                link : '#'
            },
            {
                title : 'Abstract',
                link : '#'
            },
            {
                title : 'sky',
                link : '#'
            }
        ],
        [
            {
                title : 'Sample text 1',
                link : '#'
            },
            {
                title : 'Sample text 2',
                link : '#'
            },
            {
                title : 'Sample text 3',
                link : '#'
            },
            {
                title : 'Sample text 4',
                link : '#'
            },
            {
                title : 'Sample text 5',
                link : '#'
            },
            {
                title : 'Sample text 6',
                link : '#'
            }
        ],
        [
            {
                title : 'Sample text 1',
                link : '#'
            },
            {
                title : 'Sample text 2',
                link : '#'
            },
            {
                title : 'Sample text 3',
                link : '#'
            },
            {
                title : 'Sample text 4',
                link : '#'
            },
            {
                title : 'Sample text 5',
                link : '#'
            },
            {
                title : 'Sample text 6',
                link : '#'
            }
        ]
    ]
    const [list, setList] = useState(obj)
    // console.log(list[0])
    return(
        <footer>
            <section>
                <article>
                    <HeadMd color='white' value='About Website' />
                    <ParaMd color='white' value='Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsam aut maxime alias, repellendus libero?' />
                    <br />
                    <ParaMd color='white' value='Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsam aut maxime alias?' />
                </article>
                <div>
                    <Lists headList='Catagories' child={list[0].map((content, i)=> <li key={i}><a href={list[0][i].link}>{list[0][i].title}</a></li>)} />
                    <Lists headList='Catagories' child={list[1].map((content, i)=> <li key={i}><a href={list[1][i].link}>{list[1][i].title}</a></li>)} />
                    <Lists headList='Catagories' child={list[2].map((content, i)=> <li key={i}><a href={list[1][i].link}>{list[1][i].title}</a></li>)} />
                </div>
            </section>
            <h4 className="head-md coder">Powered by <a target='_blank' href="http://aminhsnzadeh.ir/">Amin Hasanzadeh</a></h4>
        </footer>
    )
}
function Lists(props) {
    return(
        <ul className="foot-list">
            <li className="foot-list-head">{props.headList}</li>
            {props.child}
        </ul>
    )
}