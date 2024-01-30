import AboutMe from "./AboutMe";
import Funfacts from "./Funfacts";
import Skills from "./Skills";

export default function About() {

  return (
    <div className="py-8  px-32 min-[1920px]:px-48">
      <AboutMe />
      <Skills />
      <Funfacts />
    </div>
  );
}
