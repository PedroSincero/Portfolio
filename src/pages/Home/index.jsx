// import Header from './components/Header'
import First from './First'
import Projects from './Projects'
import Skills from './Skills'
import AboutMe from './AboutMe'
import Contacts from './Contacts'

export default function Home() {
  return (
    <>
      <div className=" mx-8 lg:w-4/5 lg:mx-auto">
        <div className='flex flex-col gap-28'>
          <First />
          <Projects />
          <Skills />
          <AboutMe />
          <Contacts />
        </div>
      </div>
    </>
  )
}