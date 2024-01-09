import ListProjects from "../../../components/Projects/ListProjects";
import Title from "../../../components/Title";

export default function SmallProjects() {
  return (
    <div>
      <Title title={'small-projects'} span={'#'}/>
      <div className="flex gap-8 justify-center">
        <ListProjects />
        <ListProjects />
        <ListProjects />
        <ListProjects />
      </div>
    </div>
  )
}
