import React from "react"

const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>Email icon</div>
      <div>Phone icon</div>
      <div>
        <div>Mapa</div>
        <div>Zolte cos</div>
      </div>
    </div>
  )
})

export default Contact
