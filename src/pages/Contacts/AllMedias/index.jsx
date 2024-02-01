import Title from "../../../components/Title";
import Linkedin from "../../../assets/Linkedin.svg";
import Email from "../../../assets/Email.svg";
import Github from "../../../assets/Github.svg";
import Discord from "../../../assets/Discord.svg";

export default function AllMedias() {
  return (
    <div>
      <Title title={"all-medias"} span={"#"} />
      <div className=" grid grid-cols-2 lg:flex gap-3 items-center">
        <div className="flex items-center">
          <img src={Github} alt="Linkedin Logo" /> <span> PedroSincero </span>
        </div>
        <div className="flex items-center">
          <img src={Discord} alt="Linkedin Logo" /> <span> #pedrosincero </span>
        </div>
        <div className="flex items-center col-span-2">
          <img src={Linkedin} alt="Linkedin Logo" />{" "}
          <span> /pedro-henrique-pires-do-nascimento</span>
        </div>
        <div className="flex items-center">
          <img src={Email} alt="Linkedin Logo" /> <pan>dckpedro@gmail.com</pan>
        </div>
      </div>
    </div>
  );
}
