import { Link } from "react-router-dom";

export default function BurguerOpen({ setOpen }) {
  return (
    <div className="absolute h-screen w-screen left-0 top-20 z-50 bg-background">
      <div className="flex flex-col gap-8 text-5xl mt-10 p-4">
        <Link to="/" onClick={ () => setOpen(false)}><span className=" text-primary">#</span>home</Link>
        <Link to="/projects" onClick={ () => setOpen(false)}><span className=" text-primary">#</span>projects</Link>
        <Link to="/about" onClick={ () => setOpen(false)}><span className=" text-primary">#</span>about-me</Link>
        <Link to="/contact" onClick={ () => setOpen(false)}><span className=" text-primary">#</span>contacts</Link>
      </div>
    </div>
  )
}
