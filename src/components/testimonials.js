import React from "react"
import testimonialsStyles from '../styles/testimonials.module.scss'

const Testimonials = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h2 className={testimonialsStyles.title}>Opinie klientów naszego cateringu dietetycznego</h2>
      <div className={testimonialsStyles.container}>
      <p>Lorem lorem imprusm bla bla bla</p>
      <img />
      <p>Jacek Placek</p>
      </div>
    </div>
  )
})

export default Testimonials
