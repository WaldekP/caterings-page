import React, { useEffect, useState } from "react"
import testimonialsStyles from "../styles/testimonials.module.scss"
import examplePhoto from "../images/chat/ico_chat2.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { testimonials } from "../data/mainPage/testimonials"

const Testimonials = React.forwardRef((props, ref) => {
  const [testimonialNumber, changeTestimonial] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      changeTestimonial(testimonialNumber === 4 ? 1 : testimonialNumber + 1)
    }, 2000)
  }, [testimonialNumber])

  return (
    <div ref={ref}>
      <h2 className={testimonialsStyles.title}>
        Opinie klientów naszego cateringu dietetycznego
      </h2>
      <div className={testimonialsStyles.container}>
        <div className={testimonialsStyles.wrapper}>
          <img srcSet={examplePhoto} alt="Example Photo" />
          <h4>{testimonials[testimonialNumber].testimonial}</h4>
          <p>{testimonials[testimonialNumber].person}</p>
          <div className={testimonialsStyles.circlesContainer}>
            <span>
              <FontAwesomeIcon
                className={`${testimonialsStyles.circle} ${testimonialNumber ===
                  1 && testimonialsStyles.active}`}
                icon="circle"
              />
            </span>
            <span>
              <FontAwesomeIcon
                className={`${testimonialsStyles.circle} ${testimonialNumber ===
                  2 && testimonialsStyles.active}`}
                icon="circle"
              />
            </span>
            <span>
              <FontAwesomeIcon
                className={`${testimonialsStyles.circle} ${testimonialNumber ===
                  3 && testimonialsStyles.active}`}
                icon="circle"
              />
            </span>
            <span>
              <FontAwesomeIcon
                className={`${testimonialsStyles.circle} ${testimonialNumber ===
                  4 && testimonialsStyles.active}`}
                icon="circle"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Testimonials
