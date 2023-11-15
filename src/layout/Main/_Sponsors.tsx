import { useEffect, useState } from "react"

import { fetchData } from "../../utils"

import Img from "../../components/Img"

import { dataProps } from "../../interfaces"

const Sponsors = () => {

  const [ data, setData ] = useState<dataProps | null>(null)

  useEffect(() => {
    fetchData(setData, './db/sponsors.json')
  }, [])

  return (
    data
      ? 
        <div className="flex flex-row justify-center items-around space-x-4 md:space-x-16 lg:py-10">
          {
            data?.pics?.map((d, idx) => {
              return (
                < Img
                  src   = { d.src }
                  alt   = { d.alt }
                  cname ="shrink"
                  key   = { `sponsor_${idx}` }
                />
              )
            })
          }
        </div>
      :
      <></>
  )

}

export default Sponsors
