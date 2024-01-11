import ListProjectC from "../../../components/ListProjectC";
import ListProjects from "../../../components/Projects/ListProjects";
import Title from "../../../components/Title";
import defaultImage from '../../../assets/dImage.jpg';

export default function SmallProjects() {
  return (
    <div>
      <Title title={'small-projects'} span={'#'}/>
      <div className="flex gap-5 flex-wrap">
        <ListProjectC tag={'HTML SCSS Python Flask'} title={'CheartNodes'} description={'Site de fazer coisinhas coisadas'} live={'https://twitter.com/home'} code={'https://twitter.com/home'}/>
        <ListProjectC tag={'HTML SCSS Python Flask'} title={'CheartNodes'} description={'Site de fazer coisinhas coisadas'} live={'https://twitter.com/home'} code={'https://twitter.com/home'}/>
        <ListProjectC tag={'HTML SCSS Python Flask'} title={'CheartNodes'} description={'Site de fazer coisinhas coisadas'} live={'https://twitter.com/home'} code={'https://twitter.com/home'}/>
        <ListProjectC tag={'HTML SCSS Python Flask'} title={'CheartNodes'} description={'Site de fazer coisinhas coisadas'} live={'https://twitter.com/home'} code={'https://twitter.com/home'}/>
        <ListProjectC tag={'HTML SCSS Python Flask'} title={'CheartNodes'} description={'Site de fazer coisinhas coisadas'} live={'https://twitter.com/home'} code={'https://twitter.com/home'}/>
        <ListProjectC tag={'HTML SCSS Python Flask'} title={'CheartNodes'} description={'Site de fazer coisinhas coisadas'} live={'https://twitter.com/home'} code={'https://twitter.com/home'}/>
        <ListProjectC tag={'HTML SCSS Python Flask'} title={'CheartNodes'} description={'Site de fazer coisinhas coisadas'} live={'https://twitter.com/home'} code={'https://twitter.com/home'}/>
        <ListProjectC tag={'HTML SCSS Python Flask'} title={'CheartNodes'} description={'Site de fazer coisinhas coisadas'} live={'https://twitter.com/home'} code={'https://twitter.com/home'}/>
      </div>
    </div>
  )
}
