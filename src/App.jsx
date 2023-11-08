import Header from './components/Header'
import Midias from './components/Midias'
import Home from './components/Home'

export default function App() {
  return (
    <div className=" mx-8 lg:w-4/5 lg:mx-auto">
      <Midias />
      <Header />
      <Home />
    </div>
  )
}