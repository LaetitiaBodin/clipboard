import Logo from "../common/Logo"
import NavBar from "./_NavBar"
import SocialBar from "./_SocialBar"

const Footer = () : React.JSX.Element => {

  return (
    <footer className="mt-20 text-center">
      <div className="bg-gradient-to-br from-turquoise-20 to-azure-20">
        <div className="mx-auto w-full lg:w-5/6 flex flex-col md:flex-row flex-wrap justify-around items-center">
          < Logo cname="w-[3rem] my-4 md:my-8 mx-5" />
          < NavBar />
          < SocialBar />
        </div>
      </div>
    </footer>
  )
  
}

export default Footer