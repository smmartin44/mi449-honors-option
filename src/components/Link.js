import React from 'react'
import './Link.css'

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // prevent full page reload
    event.preventDefault()
    window.history.pushState({}, '', href)

    // communicate that URL has changed
    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  )
}

export default Link
