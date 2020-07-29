import React, {useState, useEffect} from 'react'

export default function ImagenPnp({hq, lq}) {

    const [url, setUrl] = useState(lq || hq)

    useEffect(()=>{

        if(url === lq){
            setUrl(process.env.PUBLIC_URL + "images/IMG-20190806-WA0018.jpg")
        }
    }, [])
    
    return (
    
        <img src={url} className="foto-layer" alt="mama"/>
     
    )
}
