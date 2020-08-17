import React, { useRef, useEffect } from 'react'
import { GoPlus } from "react-icons/go"
import { GrFormViewHide } from "react-icons/gr"

export default function SeeMoreBtn({ toggleSeeMore, seeMore, isFirstTime, setNotFirstTime }) {

  const iconMore = useRef(null)

  useEffect(() => {

    if (iconMore && iconMore.current) {

      const observerIcon = new IntersectionObserver(item => {
        if (item[0].isIntersecting) {
          if (item[0].target.childNodes[2] && item[0].target.childNodes[2].classList !== undefined && !seeMore) {
            if (isFirstTime) {
              item[0].target.childNodes[2].classList.add("rotate")
            }
            setNotFirstTime()
          }
        }
      }, { threshold: 1 })

      observerIcon.observe(iconMore.current)
    }
  }, [iconMore])


  return (

    <button className={seeMore ? "seemore hide" : "seemore"} ref={iconMore} onClick={() => {
      toggleSeeMore(prev => !prev)
    }}>{seeMore ? "Hide" : "Show more"}
            &nbsp;
      {seeMore ? <GrFormViewHide className="icon-more big" /> : <GoPlus className={isFirstTime ? "icon-more" : "icon-more big"} />}</button>

  )
}
