import React, { useState, useEffect } from "react";
import { LightBtn, PriBtn } from "../../component/button/button";
import { HeadMd } from "../../component/text/head";
import Image from "../../component/image/image";
import axios from "axios"

export default function Gallery() {
    const gal = {
        galHead : 'Gallery',
        catagory : ['Random', 'Collection', 'Dark', 'Fantasty']
    }
    const [galContent, setgalContent] = useState(gal)
    const [image, setImage] = useState([])
    const [count, setCount] = useState(30)
    const [load ,setLoad] = useState(12)
    const url = 'https://api.unsplash.com/photos/random?count='+ count +'&client_id=vw9L6zrdKbNtrQhjpP5qztJTsAcNxjVPW2J3ZHsqt7c'
    const handleCount = ()=> {
        setLoad(prev => prev + 12)
    }
    // console.log(image)
    const fetch = async () => {
        const { data: response } = await axios.get(url);
        setImage(response)
    }
    useEffect(() => {
        fetch()
    }, [])
    const render = image.slice(0, load).map((content, i) => <Image key={image[i].id} src={image[i].urls.regular} alt={image[i].description} thumbSrc={image[i].urls.thumb} thumbAlt={image[i].user.name} name={image[i].user.name} likes={image[i].likes} width={image[i].width} height={image[i].height} link={image[i].links.download} />)
    return(
        // <Image src={Test} alt='test alt' thumbSrc={Test} thumbAlt='some text' name='Amin Hasanzadeh' likes='+999' width='3000' height='2000' link='#' />
        <section id="gallery">
            <section>
                <HeadMd value={galContent.galHead + " : currently " + count + " Image loaded"} />
                <div className="gallery">
                    <div className="filter">
                        <LightBtn styles={{margin : "0.5rem"}} value={galContent.catagory[0]} actived='active' />
                        <LightBtn styles={{margin : "0.5rem"}} value={galContent.catagory[1]} />
                        <LightBtn styles={{margin : "0.5rem"}} value={galContent.catagory[2]} />
                        <LightBtn styles={{margin : "0.5rem"}} value={galContent.catagory[3]} />
                    </div>
                    <section className="grid-box">
                        {render}
                    </section> 
                    <PriBtn value='Load More' click={handleCount} />
                </div>
            </section>
        </section>
    )
}

