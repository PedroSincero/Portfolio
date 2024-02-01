import Title from "../../../components/Title";
import Linkedin from "../../../assets/Linkedin.svg";
import Email from "../../../assets/Email.svg";

const text = `I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me`;

export default function Contact() {
  return (
    <div>
      <Title title={"contacts"} span={"/"} subTitle={"Who am i?"} />
      <div className="flex justify-between">
        <div className="lg:w-1/5 text-secondary lg:pt-16">{text}</div>
        <div className="hidden lg:inline-flex p-4 flex-col items-start gap-4 border border-secondary">
          <p>Me mande uma mensagem em: </p>
          <a
            href="https://www.linkedin.com/in/pedro-henrique-pires-do-nascimento/"
            target="__blank"
            className="flex items-center gap-1"
          >
            <img src={Linkedin} alt="Linkedin Logo" />{" "}
            <span> /pedro-henrique-pires-do-nascimento</span>
          </a>
          <a
            href="mailto:dckpedro@gmail.com"
            className="flex items-center gap-1"
          >
            <img src={Email} alt="Linkedin Logo" />{" "}
            <span>dckpedro@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
