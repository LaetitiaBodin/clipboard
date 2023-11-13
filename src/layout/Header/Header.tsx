import Intro from './_Intro'
import Logo from '../common/Logo'
import DownloadLinks from '../common/DownloadLinks'

const Header = () : React.JSX.Element => {

  return (
    <header className="text-center">
      <div className="bg-no-repeat bg-contain bg-mobile md:bg-desktop landscape:bg-desktop">
        <div className="container mx-auto p-5">
          < Logo cname="py-20 md:py-30 xl:py-40 w-[8rem] mx-auto" />
          < Intro />
          < DownloadLinks />
        </div>
      </div>
    </header>
  )
  
}

export default Header