import MenuHamburguer from "./MenuHamburguer"
import LogoDefault from "../LogoDefault"

export default function Header() {
  return (
    <div className="flex py-4 sticky top-0 justify-between bg-background z-40">
      <div className="flex items-center gap-3 text-2xl font-bold">
        <LogoDefault />
        <p>Pedro</p>
      </div>
      <div className="hidden lg:flex items-start gap-8 self-center text-2xl">
        <a href="#home"><span className=" text-primary">#</span>home</a>
        <a href="#projects"><span className=" text-primary">#</span>projects</a>
        <a href="#about-me"><span className=" text-primary">#</span>about-me</a>
        <a href="#contacts"><span className=" text-primary">#</span>contacts</a>
      </div>
        <MenuHamburguer />
    </div>
  )
}
