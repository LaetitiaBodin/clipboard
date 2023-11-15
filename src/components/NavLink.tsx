import { navProps } from "../interfaces"

const NavLink = ( props: navProps ) : React.JSX.Element => {

  const { text, url } = props

  return (
    <a href={ url }>
      { text }
    </a>
  )

}

export default NavLink