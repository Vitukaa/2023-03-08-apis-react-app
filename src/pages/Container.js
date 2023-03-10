import React from 'react'
import './Container.css'

export default function Container({ className, children }) {
    let classes = `container ${className ? className : ''}`

  return (
    <div className={classes}>
        {children}
    </div>
  )
}
