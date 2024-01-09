import LogoDefault from "../../components/LogoDefault"
import Github from '../../assets/Github.svg'
import Linkedin from '../../assets/Linkedin.svg'
import Discord from '../../assets/Discord.svg'

export default function Footer() {
  return (
    <div className=" hidden lg:block border-t border-secondary ">
      <div className="flex justify-between py-8  px-32 min-[1920px]:px-48">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <LogoDefault />
            <p>Pedro</p>
            <p className=" text-secondary">dckpedro@gmail.com</p>
          </div>
          <p>FullStack Developer</p>
        </div>

        <div>
          <p>Media</p>
          <div className="flex gap-3">
            <img src={Github} alt="github" />
            <img src={Linkedin} alt="linkedin" />
            <img src={Discord} alt="discord" />
          </div>
        </div>
      </div>
    </div>
  )
}
