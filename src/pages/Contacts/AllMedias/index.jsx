import Title from "../../../components/Title";
import Linkedin from "../../../assets/Linkedin.svg";
import Email from "../../../assets/Email.svg";
import Github from "../../../assets/Github.svg";
import Discord from "../../../assets/Discord.svg";

export default function AllMedias() {
  return (
    <div>
      <Title title={"all-medias"} span={"#"} />
      <div className="flex gap-3 items-center">
        <img src={Github} alt="Linkedin Logo" /> PedroSincero
        <img src={Discord} alt="Linkedin Logo" /> #pedrosincero
        <img src={Linkedin} alt="Linkedin Logo" />{" "}
        /pedro-henrique-pires-do-nascimento
        <img src={Email} alt="Linkedin Logo" /> dckpedro@gmail.com
      </div>
    </div>
  );
}
