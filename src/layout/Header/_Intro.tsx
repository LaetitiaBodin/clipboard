import { useEffect, useState } from "react"

import { fetchData } from "../../utils"

import Text from "../../components/Text"

import { dataProps } from "../../interfaces"

const Intro = () : React.JSX.Element => {

  const [ data, setData ] = useState<dataProps | null>(null)

  useEffect(() => {
    fetchData(setData, './db/intro.json')
  }, [])

  return (
    data
      ?
        < Text
          level = { 1 }
          text  = { data?.summary?.text }
          title = { data?.summary?.title }
        />
      :
        <></>
  ) 
}

export default Intro