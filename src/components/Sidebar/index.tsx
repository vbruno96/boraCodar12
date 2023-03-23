import IonIcon from '@reacticons/ionicons'
import Logo from '../../assets/logo.svg'

export function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="" />
      <nav>
        <ul className="menu">
          <li>
            <a href="#" className="menu-item active">
              <IonIcon name="tablet-portrait" />
              Boards
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <IonIcon name="people" />
              Equipes
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <IonIcon name="document-text" />
              Relatórios
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <IonIcon name="cog" />
              Ajustes
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
