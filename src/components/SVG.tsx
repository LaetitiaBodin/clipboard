import { svgProps } from "../interfaces"

const SVG = ( props : svgProps ) : React.JSX.Element => {

  const { svg, cname } = props

  const SVG = svg

  return (
    <div className={ cname }>
      <>
        < SVG />
      </>
    </div>
  )
  
}

export default SVG