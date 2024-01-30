import Title from "../../../components/Title";
import DefaultImage from "../../../assets/jc.png";
const text = `Hello, i’m Pedro!

I’m a self-taught front-end developer based in Goianinha, Brasil. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 

Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.`;


export default function AboutMe() {
  return (
    <div>
      <Title title={"about-me"} span={"/"} subTitle={"Who am i?"} />
      <div className="flex justify-between">
        <div className="w-3/5 whitespace-break-spaces text-secondary pt-16">
          {text}
        </div>
        <img src={DefaultImage} alt="jc" />
      </div>
    </div>
  );
}
