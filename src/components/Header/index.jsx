import MenuHamburguer from "./MenuHamburguer"
import LogoDefault from "../LogoDefault"

export default function Header() {
  return (
    <div className="flex py-4 justify-between items-end">
      <div className="flex items-center gap-3 text-2xl font-bold">
        <LogoDefault />
        <p>Pedro</p>
      </div>
      <div className="hidden lg:flex items-start gap-8 self-center text-2xl">
        <a href="#"><span className=" text-primary">#</span>home</a>
        <a href="#"><span className=" text-primary">#</span>works</a>
        <a href="#"><span className=" text-primary">#</span>about-me</a>
        <a href="#"><span className=" text-primary">#</span>contacts</a>
      </div>
        <MenuHamburguer />
    </div>
  )
}
