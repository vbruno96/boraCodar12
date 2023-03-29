import {
  IoTabletPortrait,
  IoPeople,
  IoDocumentText,
  IoCog,
} from 'react-icons/io5'
import Logo from '@/assets/logo.svg'
import { SidebarContainer } from './styles'

export function Sidebar() {
  return (
    <SidebarContainer>
      <img src={Logo} alt="" />
      <nav>
        <a href="#" className="menu-item active">
          <IoTabletPortrait />
          Boards
        </a>
        <a href="#" className="menu-item">
          <IoPeople />
          Equipes
        </a>
        <a href="#" className="menu-item">
          <IoDocumentText />
          Relatórios
        </a>
        <a href="#" className="menu-item">
          <IoCog />
          Ajustes
        </a>
      </nav>
    </SidebarContainer>
  )
}
