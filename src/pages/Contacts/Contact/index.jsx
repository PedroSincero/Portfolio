import Title from "../../../components/Title";
import Linkedin from "../../../assets/Linkedin.svg";
import Email from "../../../assets/Email.svg";

const text = `I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me`;

export default function Contact() {
  return (
    <div>
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
    </div>
  );
}
