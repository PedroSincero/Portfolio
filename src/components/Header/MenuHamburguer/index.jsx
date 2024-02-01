import { useState } from "react";
import { Cross as Hamburger } from 'hamburger-react'
import BurguerOpen from "./BurguerOpen";

export default function MenuHamburguer() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex self-center lg:hidden">
      {/* <button type="button" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <OpenIcon setOpen={ setOpen }/> }
      </button> */}
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && <BurguerOpen setOpen={ setOpen } /> }
    </div>
  )
}
