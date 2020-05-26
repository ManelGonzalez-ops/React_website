import React, {useEffect, useRef} from 'react'
import ring1 from "./ringtones/alarm_beeps.mp3"

export default function AudioCom(props) {
    const tono = useRef(null)
    useEffect(()=>{
        if(props.ring){
            tono.current.load()
            tono.current.play()
        }
        else{
            tono.current.pause()
            
        }
    }, [props.ring])  
    
    useEffect(()=>{
        tono.current.load()
            tono.current.play().then(()=>{
               setTimeout(()=>{
                    tono.current.pause()  
                }, 300)

            })
    }, [props.roundName])


    return (
        <div><audio ref={tono} src={ring1}>
            </audio> 
            </div>
    )
}

