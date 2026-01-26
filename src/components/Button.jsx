import { NavLink } from 'react-router-dom'

const Button = ({children, to}) => {
  return(
      <NavLink to={to}>
        <h1>{children}</h1>
      </NavLink>
  )
}

export default Button