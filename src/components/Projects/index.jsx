import Line from '../../assets/Line7.svg';
import ListProjects from './ListProjects/index';

export default function Projects() {
  return (
    <>
      <div className="hidden lg:flex pb-12">
        <p className='text-4xl font-bold'><span className='text-primary'>#</span>projects</p>
        <img className=' w-4/5 px-5 pr-20' src={Line} alt="Line" />
        <button className='whitespace-nowrap text-3xl' type="button">{'View all ~>'}</button>
      </div>
      <div className='flex gap-8 justify-center'>
        <ListProjects />
        <ListProjects />
        <ListProjects />
        <ListProjects />
      </div>
    </>
  )
}
