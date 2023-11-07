import Description from './Description';
import Profile from './Profile';

export default function Home() {
  return (
    <div className="flex mt-20 gap-80">
      <Description />
      <Profile />
    </div>
  )
}
