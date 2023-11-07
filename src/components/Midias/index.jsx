import Line from './Line'
import Github from './Github'
import Linkedin from './Linkedin'

export default function Midias() {
  return (
    <div className=" hidden lg:inline-flex items-center flex-col absolute left-9 " >
      <Line />
      <Github />
      <Linkedin />
    </div>
  )
}
