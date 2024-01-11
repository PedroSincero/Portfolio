import ListProjectC from "../../../components/ListProjectC";
import ListProjects from "../../../components/Projects/ListProjects";
import Title from "../../../components/Title";
import defaultImage from '../../../assets/dImage.jpg';

export default function SmallProjects() {
  return (
    <div>
      <Title title={'small-projects'} span={'#'}/>
      <div className="flex gap-8">
        <ListProjectC tag={'HTML SCSS Python Flask'} title={'CheartNodes'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus et praesentium dolore quos aliquid sit? Praesentium magnam laborum rerum sapiente ex est optio. Itaque minus deserunt provident corporis cumque.'} live={'https://twitter.com/home'} code={'https://twitter.com/home'}/>
        <ListProjectC tag={'HTML SCSS Python Flask'} title={'CheartNodes'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus et praesentium dolore quos aliquid sit? Praesentium magnam laborum rerum sapiente ex est optio. Itaque minus deserunt provident corporis cumque.'} live={'https://twitter.com/home'} code={'https://twitter.com/home'}/>
        <ListProjectC tag={'HTML SCSS Python Flask'} title={'CheartNodes'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus et praesentium dolore quos aliquid sit? Praesentium magnam laborum rerum sapiente ex est optio. Itaque minus deserunt provident corporis cumque.'} live={'https://twitter.com/home'} code={'https://twitter.com/home'}/>
        <ListProjectC tag={'HTML SCSS Python Flask'} title={'CheartNodes'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus et praesentium dolore quos aliquid sit? Praesentium magnam laborum rerum sapiente ex est optio. Itaque minus deserunt provident corporis cumque.'} live={'https://twitter.com/home'} code={'https://twitter.com/home'}/>
        <ListProjectC tag={'HTML SCSS Python Flask'} title={'CheartNodes'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus et praesentium dolore quos aliquid sit? Praesentium magnam laborum rerum sapiente ex est optio. Itaque minus deserunt provident corporis cumque.'} live={'https://twitter.com/home'} code={'https://twitter.com/home'}/>
      </div>
    </div>
  )
}
