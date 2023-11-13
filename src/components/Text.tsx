import { textProps } from "../interfaces"

const Text = ( props : textProps ) : React.JSX.Element => {

  const { cname, level, title, text } = props

  const Tag = `h${ level }` as keyof JSX.IntrinsicElements

  return (
    <div className={ cname }>
      < Tag className="font-semibold tracking-wide text-grayDark py-2">
        { title }
      </ Tag >
      <p className="text-grayLight whitespace-pre-wrap py-2">
        { text }
      </p>
    </div>
  )

}

export default Text