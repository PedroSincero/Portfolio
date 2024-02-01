import LogoDefault from "../../components/LogoDefault";
import Github from "../../assets/Github.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Email from "../../assets/Email.svg";

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
          <p>Medias</p>
          <div className="flex gap-3">
            <a
              href="https://github.com/PedroSincero"
              target="__blank"
              className="flex items-center"
            >
              <img src={Github} alt="Linkedin Logo" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-henrique-pires-do-nascimento/"
              target="__blank"
              className="flex items-center col-span-2"
            >
              <img src={Linkedin} alt="Linkedin Logo" />{" "}
            </a>
            <a href="mailto:dckpedro@gmail.com" className="flex items-center">
              <img src={Email} alt="Linkedin Logo" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
