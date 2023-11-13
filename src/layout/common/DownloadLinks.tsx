import DownloadLink from "../../components/DownloadLink"

import { dlRoutes } from "../../routes"

const DownloadLinks = () : React.JSX.Element => {

  return (
    <div className="flex flex-row flex-wrap w-full justify-center py-8">
      {
        dlRoutes.map((route, idx) => {
          const color = idx % 2 === 0
            ? "bg-turquoise-100 hover:bg-turquoise-80"
            : "bg-azure-100 hover:bg-azure-80"
          return (
            < DownloadLink
              text  = { route.text }
              url   = { route.url }
              cname = { color }
              key   = { `downloadlink_${idx}` }
            />
          )
        })
      }
    </div>
  )

}

export default DownloadLinks