import React from "react";
import { useState } from "react";
import { HeadBold } from "../../component/text/head";
import { ParaBold } from "../../component/text/para";
import { PriBtn, SecBtn } from "../../component/button/button";

export default function Head() {
    const head = {
        mainHead : 'Browse our most fantastic photos with greatest quality',
        mainPara : 'A project that feeds with "Unsplash" gallery API ...'
    }
    const [headContent, setHeadContent] = useState(head)
    return(
        <section id="head">
            <section>
                <article>
                    <HeadBold color='white' value={headContent.mainHead} />
                    <ParaBold color='white' value={headContent.mainPara} />
                    <PriBtn link='#gallery' value='See Gallery' styles={{marginRight : "16px"}} />
                    <SecBtn link='#' value='See Refrence' />
                </article>
            </section>
        </section>
    )
}