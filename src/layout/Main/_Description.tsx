import { useEffect, useState } from "react"

import { fetchData } from "../../utils"

import Text from "../../components/Text"
import Img from "../../components/Img"

import { dataProps } from "../../interfaces"

const Description = () : React.JSX.Element => {

  const [ data, setData ] = useState<dataProps | null>(null)

  useEffect(() => {
    fetchData(setData, './db/description.json')
  }, [])

  return (
    data
      ? <div>
          < Text
            cname = "text-center lg:w-4/6 xl:w-3/6 mx-auto"
            level = { 2 }
            text  = { data?.summary?.text }
            title = { data?.summary?.title }
          />
          <div
            className = "flex flex-row justify-center items-center flex-wrap content-center py-8 px-auto">
            < Img
              src = { data?.pics?.[0]?.src }
              alt = { data?.pics?.[0]?.alt }
              cname = "w-full lg:w-3/6"
            />
            <div
              className = "flex flex-col justify-around items-between text-center lg:text-left w-full xl:w-2/6 lg:w-3/6 py-5 lg:py-0 lg:ps-16 xl:ps-30"
            >
              {
                data?.details?.map((d, idx) => {
                  return (
                    < Text
                    key = { `description_${idx}` }
                    level = { 3 }
                    text  = { d.text }
                    title = { d.title }
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      :
        <></>
  ) 
}

export default Description