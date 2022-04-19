import { IconLinkProps } from './interfaces'

const IconLink = ({children, to}:IconLinkProps) => {
  return (
    <a target="_blank" href={to} rel="noreferrer">{children}</a>
  )
}

export default IconLink