import React from 'react'
import './Title.css'
function Title({heading,subtitle}) {
  return (
    <div>
            <div className="title">
                  <div className="unbold-title">
                        <p>{heading}</p>
                  </div>
                  <div className="bold-title">
                        <h1>{subtitle}</h1>
                  </div>
            </div>
    </div>
  )
}

export default Title