import { useEffect, useState } from "react"

import { fetchData } from "../../utils"

import Text from "../../components/Text"
import DownloadLinks from '../common/DownloadLinks'

import { dataProps } from "../../interfaces"

const Conclusion = () : React.JSX.Element => {

  const [ data, setData ] = useState<dataProps | null>(null)

  useEffect(() => {
    fetchData(setData, './db/conclusion.json')
  }, [])

  return (
    data
      ?
        <div className="text-center py-10">
          < Text
            level = { 2 }
            text  = { data?.summary?.text }
            title = { data?.summary?.title }
          />
          < DownloadLinks />
        </div>
      :
        <></>
  )
}

export default Conclusion