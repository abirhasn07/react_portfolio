import React from 'react'
import Marquee from "react-fast-marquee"

import './Marquee.css'
const MarqueeContainer = () => {
  return (
      <div className='marquee_container'>
          <Marquee gradient={false} speed={100} pauseOnHover={true} direction={"right"}>
              <h2 className='marquee_title'>frontend enginner, Webflow designer, creative developer</h2>
          </Marquee>
    </div>
  )
}

export default MarqueeContainer