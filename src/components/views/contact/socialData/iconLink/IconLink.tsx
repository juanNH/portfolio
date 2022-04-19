import { IconLinkProps } from "./interfaces";
import { ALink } from './IconLinkStyles';

const IconLink = ({to ,children}:IconLinkProps) => {
  return (
    <ALink target="_blank" href={to} rel="noreferrer">{children}</ALink>
  )
}

export default IconLink