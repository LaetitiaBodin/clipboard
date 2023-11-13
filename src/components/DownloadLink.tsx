import { dlProps } from "../interfaces"

const DownloadLink = ( props : dlProps ) : React.JSX.Element => {

  const { text, cname, url } = props

  return (
    <a
      href      = { url }
      className = { `${cname} font-semibold m-2 py-2 px-6 text-white rounded-full transition-all duration-300` }
    >
      { text }
    </a>
  )

}

export default DownloadLink