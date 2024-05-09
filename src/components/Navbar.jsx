import { FaLinkedin,FaGithub,FaTwitterSquare,FaInstagram } from "react-icons/fa"
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo"style={{width:"100px"}} />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/rupammahato" target="blank"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/rupam-mahato-415aa3178/" target="blank"><FaLinkedin/></a>
        <a href="" ><FaTwitterSquare/></a>
        <a href="https://www.instagram.com/rupam._mahato/" target="blank"><FaInstagram/></a>
    </div>
    </nav>
  )
}

export default Navbar
