import { imgProps } from "../interfaces"

const Img = ( props : imgProps ) : React.JSX.Element => {

  const { alt, src, cname } = props

  return (
    <div className={ `${cname} relative z-[0]` }>
      <img
        src       = { src }
        alt       = { alt }
        className = "w-full block relative z-[1]"
      />
      <div className="w-full h-full block absolute z-[2] top-0 left-0">
      </div>
    </div>
  )

}

export default Img