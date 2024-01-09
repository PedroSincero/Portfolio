import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Title from "../../components/Title"
import CompleteApps from "./CompleteApps"
import SmallProjects from "./SmallProjects"

export default function Projects() {
  return (
    <>
        <Header />
        <div className="py-8  px-32 min-[1920px]:px-48">
          <Title title={'projects'} span={'/'} subTitle={'List of my projects'}/>
          <CompleteApps />
          <SmallProjects />
        </div>
        
        <Footer />
    </>
  )
}
