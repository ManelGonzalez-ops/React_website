import React, { useRef, useEffect } from 'react'



export default function SkillUnit({ info }) {

    const divRef = useRef(null)



    useEffect(() => {
        if (divRef && divRef.current && divRef.current.classList !== undefined) {

            const observer = new IntersectionObserver(item => {
                if (item[0].isIntersecting) {
                    item[0].target.classList.add("onView")
                }
            })

            observer.observe(divRef.current)
        }

    }, [divRef])


    return (

        <div className="skill-unit sass" ref={divRef}>
            <span >
                <info.svg />
            </span>
            <div className="wrap-skill">

                <p>{info.title}</p>
            </div>
        </div>

    )
}
