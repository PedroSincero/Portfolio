import MenuHamburguer from "./MenuHamburguer"
import LogoDefault from "../LogoDefault"


export default function Header() {
  return (
    <div className="flex w-360 p-4 justify-between items-end">
      <div className="flex items-center gap-3">
        <LogoDefault />
        <p>Pedro</p>
      </div>
      <div>
      <a href="#"><span className=" text-primary">#</span>home</a>
        <a href="#"><span className=" text-primary">#</span>works</a>
        <a href="#"><span className=" text-primary">#</span>about-me</a>
        <a href="#"><span className=" text-primary">#</span>contacts</a>
      </div>
        <MenuHamburguer />
    </div>
  )
}
