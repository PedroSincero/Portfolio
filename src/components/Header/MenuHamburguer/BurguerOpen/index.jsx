export default function BurguerOpen() {
  return (
    <div className="absolute h-screen w-screen left-0 top-20 z-50 bg-background">
      <div className="flex flex-col gap-8 text-5xl mt-10 p-4">
        <a href="#"><span className=" text-primary">#</span>home</a>
        <a href="#"><span className=" text-primary">#</span>works</a>
        <a href="#"><span className=" text-primary">#</span>about-me</a>
        <a href="#"><span className=" text-primary">#</span>contacts</a>
      </div>
    </div>
  )
}
