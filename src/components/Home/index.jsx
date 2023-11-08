import Description from './Description';
import Profile from './Profile';

export default function Home() {
  return (
    <div className="flex max-lg:flex-col mt-8 lg:mt-20 lg:gap-80">
      <Description />
      <Profile />
    </div>
  )
}
