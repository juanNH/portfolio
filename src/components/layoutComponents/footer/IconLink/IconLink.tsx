import React from 'react'
import { Link } from 'react-router-dom'
import { IconLinkProps } from './interfaces'

const IconLink = ({children, to}:IconLinkProps) => {
  return (
    <Link to={to}>{children}</Link>
  )
}

export default IconLink