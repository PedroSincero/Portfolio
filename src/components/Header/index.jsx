import MenuHamburguer from "./MenuHamburguer"
import LogoDefault from "../LogoDefault"

export default function Header() {
  return (
    <div className="flex p-4 justify-between items-end">
      <div className="flex items-center gap-3">
        <LogoDefault />
        <p>Pedro</p>
      </div>
      <div className="hidden lg:flex items-start gap-8 self-center">
        <a href="#" className=""><span className=" text-primary">#</span>home</a>
        <a href="#"><span className=" text-primary">#</span>works</a>
        <a href="#"><span className=" text-primary">#</span>about-me</a>
        <a href="#"><span className=" text-primary">#</span>contacts</a>
      </div>
        <MenuHamburguer />
    </div>
  )
}
