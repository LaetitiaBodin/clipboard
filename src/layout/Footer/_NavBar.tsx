import NavLink from "../../components/NavLink"

import { navRoutes } from "../../routes"

const NavBar = () : React.JSX.Element => {

  return (
    <ul className="flex flex-col sm:flex-row flex-wrap justify-center my-4 md:my-8 mx-5">
      {
        navRoutes.map((route, idx) => {
          return (
            <li
              className = "scale-100 hover:scale-105 my-2 sm:my-0 font-normal text-grayDark hover:text-azure-100 p-2 transition-all duration-1000"
              key       = { `navlink_${idx}` }
            >
              < NavLink
                text  = { route.text }
                url   = { route.url }
              />
            </li>
          )
        })
      }
    </ul>
  )

}

export default NavBar