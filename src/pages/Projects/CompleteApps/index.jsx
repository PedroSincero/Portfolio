import Title from "../../../components/Title";
import ListProjects from "../../../components/Projects/ListProjects";

export default function CompleteApps() {
  return (
    <div>
      <Title title={'complete-apps'} span={'#'}/>
      <div className="flex gap-8">
        <ListProjects />
        <ListProjects />
        <ListProjects />
        <ListProjects />
        <ListProjects />
      </div>
    </div>
  )
}
