import CatchPhrase from '../../../components/CatchPhrase';
import Description from './Description';
import Profile from './Profile';

export default function Home() {
  return (
    <div className='flex flex-col' id='home'>
      <div className="flex max-lg:flex-col mt-8 lg:mt-20 lg:gap-80">
        <Description />
        <Profile />
      </div>
      <CatchPhrase phase={"Caneta azul, azul caneta Caneta azul tá marcada com minha letra"} />
    </div>
  )
}
