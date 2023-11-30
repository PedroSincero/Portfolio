import Line from './Line'
import Github from './Github'
import Linkedin from './Linkedin'
import Discord from './Discord'

export default function Midias() {
  return (
    <div className=" hidden lg:inline-flex items-center flex-col fixed left-9 z-50 top-0" >
      <Line />
      <Github />
      <Linkedin />
      <Discord />
    </div>
  )
}
