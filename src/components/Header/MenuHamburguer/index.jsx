import OpenIcon from "./OpenIcon";
import CloseIcon from "./CloseIcon";
import { useState } from "react";
import BurguerOpen from "./BurguerOpen";

export default function MenuHamburguer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex self-center lg:hidden">
      <button type="button" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <OpenIcon /> }
      </button>
      {open && <BurguerOpen /> }
    </div>
  )
}
