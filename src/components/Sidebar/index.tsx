import IonIcon from '@reacticons/ionicons'
import Logo from '@/assets/logo.svg'
import { SidebarContainer } from './styles'

export function Sidebar() {
  return (
    <SidebarContainer>
      <img src={Logo} alt="" />
      <nav>
        <a href="#" className="menu-item active">
          <IonIcon name="tablet-portrait" />
          Boards
        </a>
        <a href="#" className="menu-item">
          <IonIcon name="people" />
          Equipes
        </a>
        <a href="#" className="menu-item">
          <IonIcon name="document-text" />
          Relatórios
        </a>
        <a href="#" className="menu-item">
          <IonIcon name="cog" />
          Ajustes
        </a>
      </nav>
    </SidebarContainer>
  )
}
