import Title from "../../../components/Title";
import ListProjects from "../../../components/Projects/ListProjects";

export default function CompleteApps() {
  return (
    <div>
      <Title title={'complete-apps'} span={'#'}/>
      <div className="flex gap-8 justify-center">
        <ListProjects />
        <ListProjects />
        <ListProjects />
        <ListProjects />
      </div>
    </div>
  )
}
