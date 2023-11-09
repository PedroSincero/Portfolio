import CatchPhrase from '../CatchPhrase';
import Description from './Description';
import Profile from './Profile';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className="flex max-lg:flex-col mt-8 lg:mt-20 lg:gap-80">
        <Description />
        <Profile />
      </div>
      <CatchPhrase phase={"Você pode escolher a coragem ou pode escolher o conforto. Mas você não pode ter os dois."} />
    </div>
  )
}
