import Line from '../../assets/Line7.svg';
import ImageAbout from '../../assets/Image1.png'

export default function AboutMe() {
  return (
    <div className='hidden lg:block'>
      <div className="hidden lg:flex pb-12">
        <p className='text-4xl font-bold'><span className='text-primary'>#</span>About-me</p>
        <img className=' w-2/4 px-5 pr-20' src={Line} alt="Line" />
      </div>
      <div className='flex gap-56'>
        <div className='text-justify text-2xl w-2/3'>
          <p className=' pb-14'>
            I am a web developer
          </p>
          <p className=' pb-14'>
            I have been working with web development for 1 year, I have experience in the following technologies: React, NextJS, NodeJS, Express, MongoDB, MySQL, PostgreSQL, Git, among others.
            I am currently studying the following technologies: React Native, TypeScript, NestJS, GraphQL, among others.
          </p>
          <p className=' pb-14'>
            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks. I am a hard worker and I always try to deliver the best quality possible.
          </p>
          <button className='border border-primary px-4 py-2' type="button">{'Read more ~>'}</button>
        </div>
        <div>
          <img src={ImageAbout} alt="teste" />
        </div>
      </div>
    </div>
  )
}
