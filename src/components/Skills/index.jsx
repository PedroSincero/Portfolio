import Line from '../../assets/Line7.svg';
import Skill from './Skill';
import SkillPhoto from '../../assets/Group36.png';

export default function Skills() {
  return (
    <div className='hidden lg:block'>
      <div className="hidden lg:flex pb-12">
        <p className='text-4xl font-bold'><span className='text-primary'>#</span>Skills</p>
        <img className=' w-2/4 px-5 pr-20' src={Line} alt="Line" />
      </div>
      <div className='flex'>
        <div className=' w-2/5'>
          <img className=' w-full' src={SkillPhoto} alt="teste" />
        </div>
        <div className=' grid grow justify-end content-start'>
          <div className=' flex flex-row gap-3 pb-4'>
            <Skill title="Languages" tecnologies={['Typescript ', 'Lua ', 'Python ', 'Javascript ']}/>
            <Skill title="Databases" tecnologies={['SQLite ', 'PostgreSQL ', 'Mongo ']}/>
            <Skill title="Tools" tecnologies={['VSCode', 'Neovim ', 'Linux ', 'Figma ', 'XFCE ', 'Arch ', 'Git ', 'Font ', 'Awesome ']}/>
          </div>
        <div className=' flex justify-end gap-3'>
          <Skill title="Other" tecnologies={['HTML ', 'CSS ', 'EJS ', 'SCSS ', 'REST', 'Jinja']}/>
          <Skill title="Frameworks" tecnologies={['React ', 'Vue ', 'Disnake ', 'Discord ', 'Flask', 'Express.js']}/>
        </div>
        </div>
      </div>
    </div>
  )
}
