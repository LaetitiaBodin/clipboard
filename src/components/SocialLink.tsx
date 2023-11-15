import SVG from "./SVG"

import { socialProps } from "../interfaces"

import { icons, IconsType } from "../img/icons/icons"

const SocialLink = ( props: socialProps ) : React.JSX.Element => {

  const { text, url } = props

  return (
    <a
      className = "fill-azure-100 hover:fill-grayDark transition-all duration-1000"
      href      = { url }
    >
      < SVG
        cname="w-[1.5rem] h-[1.5rem]"
        svg={ icons[text as keyof IconsType] }
      />
    </a>
  )

}

export default SocialLink