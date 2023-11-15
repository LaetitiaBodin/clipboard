import Conclusion from "./_Conclusion"
import Description from "./_Description"
import Features from "./_Features"
import Preview from "./_Preview"
import Sponsors from "./_Sponsors"

const Main = () : React.JSX.Element => {

  return (
    <main className="container p-5 mx-auto">
      < Description />
      < Preview />
      < Features />
      < Sponsors />
      < Conclusion />
    </main>
  )
  
}

export default Main