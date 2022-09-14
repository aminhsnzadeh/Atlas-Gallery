import React from "react";

export default function Image(props) {
    return(
        <figure className="image-card">
            <img src={props.src} alt={props.alt} />
            <figcaption>
                <div>
                    <a download href={props.link}><span className="bi-download"></span></a>
                    <i><span>{props.width}</span> x <span>{props.height}</span></i>
                </div>
                <div>
                    <div>
                        <figure className="thumb">
                            <img src={props.thumbSrc} alt={props.thumbAlt} />
                        </figure>
                        <h4 className="thumb-name">{props.name}</h4>
                    </div>
                    <b><span className="bi-heart-fill"></span> <span className="likes">{props.likes}</span>Likes</b>
                </div>
            </figcaption>
        </figure>
    )
}