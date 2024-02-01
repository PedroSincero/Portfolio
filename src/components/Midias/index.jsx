import Line from "./Line";
import Github from "./Github";
import Linkedin from "./Linkedin";

export default function Midias() {
  return (
    <div className=" hidden lg:inline-flex items-center flex-col fixed left-9 z-50 top-0">
      <Line />
      <a href="https://github.com/PedroSincero" target="__blank">
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/pedro-henrique-pires-do-nascimento/"
        target="__blank"
      >
        <Linkedin />
      </a>
    </div>
  );
}
