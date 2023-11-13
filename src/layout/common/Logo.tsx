import SVG from '../../components/SVG'

import { logoProps } from '../../interfaces'

import { icons } from '../../img/icons/icons'

const Logo = ( props : logoProps) : React.JSX.Element => {

  const { cname } = props

  return (
    < SVG
      svg   = { icons.logo }
      cname = { cname }
    />
  )
}

export default Logo