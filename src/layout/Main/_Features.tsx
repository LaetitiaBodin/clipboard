import { useEffect, useState } from "react"

import { fetchData } from "../../utils"

import Text from "../../components/Text"
import SVG from "../../components/SVG"

import { dataProps } from "../../interfaces"

import { icons, IconsType } from "../../img/icons/icons"

const Features = () => {

  const [ data, setData ] = useState<dataProps | null>(null)

  useEffect(() => {
    fetchData(setData, './db/features.json')
  }, [])

  return (
    data
      ?
      <div
        className = "w-full lg:w-5/6 mx-auto text-center py-10"
      >
        < Text
          level = { 2 }
          text  = { data?.summary?.text }
          title = { data?.summary?.title }
        />
        <div className="flex flex-row flex-wrap items-start justify-center pt-10">
          {
            data?.details?.map((d, idx) => {
              return (
                <div
                  className = "w-full md:w-2/6 p-5"
                  key = { `feature_${idx}` }
                >
                  < SVG 
                    svg = { icons[d.icon as keyof IconsType] }
                    cname = 'w-[2rem] h-[2rem] mx-auto'
                  />
                  < Text
                    level = { 3 }
                    text  = { d.text }
                    title = { d.title }
                  />
                </div>
              )
            })
          }
        </div>
      </div>
      :
      <></>
  )

}

export default Features