import Title from "../../../components/Title";
import Linkedin from "../../../assets/Linkedin.svg";
import Email from "../../../assets/Email.svg";
import Github from "../../../assets/Github.svg";

export default function AllMedias() {
  return (
    <div>
      <Title title={"all-medias"} span={"#"} />
      <div className=" grid grid-cols-2 lg:flex gap-3 items-center">
        <a
          href="https://github.com/PedroSincero"
          target="__blank"
          className="flex items-center"
        >
          <img src={Github} alt="Linkedin Logo" /> <span> PedroSincero </span>
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-henrique-pires-do-nascimento/"
          target="__blank"
          className="flex items-center col-span-2"
        >
          <img src={Linkedin} alt="Linkedin Logo" />{" "}
          <span> /pedro-henrique-pires-do-nascimento</span>
        </a>
        <a href="mailto:dckpedro@gmail.com" className="flex items-center">
          <img src={Email} alt="Linkedin Logo" /> <pan>dckpedro@gmail.com</pan>
        </a>
      </div>
    </div>
  );
}
