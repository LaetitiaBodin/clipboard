import SocialLink from "../../components/SocialLink"

import { socialRoutes } from "../../routes"

const SocialBar = () : React.JSX.Element => {

  return (
    <ul className="flex flex-row flex-wrap justify-center my-4 md:my-8 mx-5">
      {
        socialRoutes.map((route, idx) => {
          return (
            <li
              className = "scale-100 hover:scale-105 mx-2 sm:my-0 transition-all duration-1000"
              key       = { `sociallink_${idx}` }>
              < SocialLink
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
  
export default SocialBar