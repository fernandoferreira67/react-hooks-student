import { NavLink } from 'react-router-dom'

const Button = ({children, to}) => {
  return(
      <NavLink to={to}>
        <h1 className="px-4 py-2 bg-gray-700 text-white rounded-lg">{children}</h1>
      </NavLink>
  )
}

export default Button