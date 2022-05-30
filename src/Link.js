/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Link } from 'react-router-dom'

const Link = ({ className, children }) => {
  console.log(children)
  return <a className={className}>{children}</a>
}

export default Link
