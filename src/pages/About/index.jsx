import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Skill from "../../components/Skills/Skill";
import Title from "../../components/Title";

export default function About() {
  const text =  `Hello, i’m Pedro!

  I’m a self-taught front-end developer based in Goianinha, Brasil. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 

  Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.`;

  return (
    <>
      <Header />
      <div className="py-8  px-32 min-[1920px]:px-48">
        <div>
          <Title title={'about-me'} span={'/'} subTitle={'Who am i?'}/>
          <div className="w-3/4 whitespace-break-spaces text-secondary">
            { text }
          </div>
          <img src="" alt="" />
        </div>
        <div>
          <Title title={'skills'} span={'#'}/>
          <div className="flex">
            <Skill title="Languages" tecnologies={['Typescript ', 'Lua ', 'Python ', 'Javascript ']} />
            <Skill title="Databases" tecnologies={['SQLite ', 'PostgreSQL ', 'Mongo ']}/>
            <Skill title="Tools" tecnologies={['VSCode', 'Neovim ', 'Linux ', 'Figma ', 'XFCE ', 'Arch ', 'Git ', 'Font ', 'Awesome ']}/>
            <Skill title="Other" tecnologies={['HTML ', 'CSS ', 'EJS ', 'SCSS ', 'REST', 'Jinja']}/>
            <Skill title="Frameworks" tecnologies={['React ', 'Vue ', 'Disnake ', 'Discord ', 'Flask', 'Express.js']}/>
          </div>
        </div>
        <div>
          <Title title={'my-fun-facts'} span={'#'}/>
          <div className=" inline-flex flex-wrap gap-3 w-3/5">
            <p className="border border-secondary p-2 text-secondary">I like more than summer</p>
            <p className="border border-secondary p-2 text-secondary">I often bike with my friends</p>
            <p className="border border-secondary p-2 text-secondary">I like <strong>Pizza</strong> and <strong>Pasta</strong> </p>
            <p className="border border-secondary p-2 text-secondary">I was in <strong>Egypt</strong>, <strong>Poland</strong> and <strong>Turkey</strong></p>
            <p className="border border-secondary p-2 text-secondary">My favorite movie is <strong>The Green Mile</strong></p>
            <p className="border border-secondary p-2 text-secondary">I am still in school</p>
            <p className="border border-secondary p-2 text-secondary">I don`t have any siblings</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
