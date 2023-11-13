import Line from '../../assets/Line7.svg';
import ListProjects from './ListProjects/index';

export default function Projects() {
  return (
    <>
      <div className="hidden lg:flex">
        <p className='text-4xl font-bold'><span className='text-primary'>#</span>projects</p>
        <img className=' w-4/5 px-5' src={Line} alt="Line" />
        <button className='whitespace-nowrap' type="button">{'View all ~>'}</button>
      </div>
      <ListProjects />
    </>
  )
}
