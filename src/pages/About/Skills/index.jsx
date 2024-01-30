import Title from "../../../components/Title";
import Skill from "../../Home/Skills/Skill";

export default function Skills() {
  return (
    <>
      <Title title={"skills"} span={"#"} />
      <div className="flex gap-4">
        <Skill
          title="Languages"
          tecnologies={["Typescript ", "Lua ", "Python ", "Javascript "]}
        />
        <Skill
          title="Databases"
          tecnologies={["SQLite ", "PostgreSQL ", "Mongo "]}
        />
        <Skill
          title="Tools"
          tecnologies={[
            "VSCode",
            "Neovim ",
            "Linux ",
            "Figma ",
            "XFCE ",
            "Arch ",
            "Git ",
            "Font ",
            "Awesome ",
          ]}
        />
        <Skill
          title="Other"
          tecnologies={["HTML ", "CSS ", "EJS ", "SCSS ", "REST", "Jinja"]}
        />
        <Skill
          title="Frameworks"
          tecnologies={[
            "React ",
            "Vue ",
            "Disnake ",
            "Discord ",
            "Flask",
            "Express.js",
          ]}
        />
      </div>
    </>
  );
}
