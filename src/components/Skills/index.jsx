import Line from '../../assets/Line7.svg';
import Skill from './Skill';
import SkillPhoto from '../../assets/Group36.png';

export default function Skills() {
  return (
    <>
      <div className="hidden lg:flex pb-12">
        <p className='text-4xl font-bold'><span className='text-primary'>#</span>skills</p>
        <img className=' w-4/5 px-5 pr-20' src={Line} alt="Line" />
      </div>
      <div className='flex'>
      <img src={SkillPhoto} alt="teste" />
      <Skill title="Languages" tecnologies={['Typescript ', 'Lua ', 'Python ', 'Javascript ']}/>
      </div>
    </>
  )
}
