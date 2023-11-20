import Line from '../../assets/Line7.svg';
import ImageAbout from '../../assets/Image1.png'

export default function AboutMe() {
  return (
    <div>
      <div className="hidden lg:flex pb-12">
        <p className='text-4xl font-bold'><span className='text-primary'>#</span>About-me</p>
        <img className=' w-2/4 px-5 pr-20' src={Line} alt="Line" />
      </div>
      <div>
        <p className='text-justify text-lg'>
          {"I'm a 17 years old developer, I started programming at 12 years old, I started with Lua and Python, I was very interested in the area of ​​programming, I started to study more and more, I started to learn Javascript, Typescript, HTML, CSS, I started to study frameworks like React, Vue, Express, Flask, I started to study databases like PostgreSQL, SQLite, MongoDB, I started"}
        </p>
        <div>
          <img src={ImageAbout} alt="teste" />
        </div>
      </div>
    </div>
  )
}
