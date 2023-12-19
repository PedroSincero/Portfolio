import Header from './components/Header'
import Midias from './components/Midias'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className=" mx-8 lg:w-4/5 lg:mx-auto">
        <Header />
        <Midias />
        <div className='flex flex-col gap-28'>
          <Home />
          <Projects />
          <Skills />
          <AboutMe />
          <Contacts />
        </div>
      </div>
        <Footer /> 
    </>
  )
}