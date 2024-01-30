import Title from "../../../components/Title";
import ListProjects from "../../Home/Projects/ListProjects";

export default function CompleteApps() {
  return (
    <div>
      <Title title={'complete-apps'} span={'#'}/>
      <div className="flex gap-5 flex-wrap">
        <ListProjects />
        <ListProjects />
        <ListProjects />
        <ListProjects />
        <ListProjects />
        <ListProjects />
      </div>
    </div>
  )
}
