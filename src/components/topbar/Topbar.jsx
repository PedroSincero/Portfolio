import * as S from './topbar';
import {Person, Mail} from '@material-ui/icons'

export default function Topbar() {
  return (
    <S.Topbar>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Intro</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+55 11 982519612</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>dckpedro@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </S.Topbar>
  )
}
