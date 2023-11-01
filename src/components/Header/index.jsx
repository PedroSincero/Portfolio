import Burguer from "./Burguer"
import LogoDefault from "../LogoDefault"


export default function Header() {
  return (
    <div className="flex w-360 p-4 justify-between items-end">
      <div className="flex items-center gap-3">
        <LogoDefault />
        <p>Pedro</p>
      </div>
        <Burguer />
    </div>
  )
}
