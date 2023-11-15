import { useEffect, useState } from "react"

import { fetchData } from "../../utils"

import Text from "../../components/Text"
import Img from "../../components/Img"

import { dataProps } from "../../interfaces"

const Preview = () => {

  const [ data, setData ] = useState<dataProps | null>(null)

  useEffect(() => {
    fetchData(setData, './db/preview.json')
  }, [])

  return (
    data
      ?
      <div
        className = "w-full md:w-4/6 mx-auto text-center py-10"
      >
        < Text
          level  = { 2 }
          text   = { data?.summary?.text }
          title  = { data?.summary?.title }
        />
        < Img
          src   = { data?.pics?.[0]?.src }
          alt   = { data?.pics?.[0]?.alt }
          cname = "pt-5"
        />
      </div>
      :
      <></>
  )

}

export default Preview