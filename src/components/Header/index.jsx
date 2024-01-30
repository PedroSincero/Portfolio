import MenuHamburguer from "./MenuHamburguer"
import LogoDefault from "../LogoDefault"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="flex py-4 px-8 sticky top-0 justify-between bg-background z-40 lg:px-32 min-[1920px]:px-48">
      <Link to="/">
        <div className="flex items-center gap-3 text-2xl font-bold">
          <LogoDefault />
          <p>Pedro</p>
        </div>
      </Link>
      <div className="hidden lg:flex items-start gap-8 self-center text-2xl">
        <Link to="/"><span className=" text-primary">#</span>home</Link>
        <Link to="/projects"><span className=" text-primary">#</span>projects</Link>
        <Link to="/about"><span className=" text-primary">#</span>about-me</Link>
        <Link to="/contact"><span className=" text-primary">#</span>contacts</Link>
      </div>
        <MenuHamburguer />
    </div>
  )
}
