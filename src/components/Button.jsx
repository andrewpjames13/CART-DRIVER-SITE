import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({ href, children }) => {
  const text = <div className="btn">{children}</div>
  const btnProps = { className: 'homeStyle' }
  if (href.includes('https') || href.includes('www')) {
    return (
      <a href={href} {...btnProps} aria-label={children}>
        {text}
      </a>
    )
  }
  return (
    <Link to={href} {...btnProps} aria-label={`${children} button`}>
      {text}
    </Link>
  )
}

export default Button
