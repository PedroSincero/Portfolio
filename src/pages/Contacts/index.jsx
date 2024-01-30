import Title from "../../components/Title";
import Linkedin from "../../assets/Linkedin.svg";
import Email from "../../assets/Email.svg";
import Github from "../../assets/Github.svg";
import Discord from "../../assets/Discord.svg";

export default function Contacts() {
  const text = `I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me`;
  return (
    <div>
      <div className="py-8  px-32 min-[1920px]:px-48">
        <Title title={"contacts"} span={"/"} subTitle={"Who am i?"} />
        <div className="flex justify-between">
          <div className="w-1/5 text-secondary pt-16">{text}</div>
          <div className=" inline-flex p-4 flex-col items-start gap-4 border border-secondary">
            <p>Me mande uma mensagem em: </p>
            <div className="flex items-center gap-1">
              <img src={Linkedin} alt="Linkedin Logo" />
              <p>/pedro-henrique-pires-do-nascimento</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={Email} alt="Email Logo" />
              <p>dckpedro@gmail.com</p>
            </div>
          </div>
        </div>
        <Title title={"all-medias"} span={"#"} />
        <div className="flex gap-3 items-center">
          <img src={Github} alt="Linkedin Logo" /> PedroSincero
          <img src={Discord} alt="Linkedin Logo" /> #pedrosincero
          <img src={Linkedin} alt="Linkedin Logo" />{" "}
          /pedro-henrique-pires-do-nascimento
          <img src={Email} alt="Linkedin Logo" /> dckpedro@gmail.com
        </div>
      </div>
    </div>
  );
}
