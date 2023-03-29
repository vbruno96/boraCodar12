import { IoFilter, IoSearchOutline, IoPencil } from 'react-icons/io5'
import { ThemeProvider } from 'styled-components'
import { Sidebar } from '@/components/Sidebar'
import { Avatar } from '@/components/Avatar'
import { defaultTheme } from '@/styles/themes/default'
import { GlobalStyle } from '@/styles/global'
import {
  AppContainer,
  FormContainer,
  HeaderContainer,
  InputWrapper,
} from '@/styles/app'
import { BoardContainer } from './components/BoardContainer'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Sidebar />
      <AppContainer>
        <HeaderContainer>
          <h1>
            Meu Kanban <IoPencil />
          </h1>
          <Avatar imageUrl="https://github.com/vbruno96.png" />
        </HeaderContainer>
        <FormContainer>
          <button type="button">
            <IoFilter />
            Filtrar
          </button>
          <InputWrapper>
            <IoSearchOutline />
            <input
              name="query"
              id="query"
              placeholder="Busque por cards, assuntos ou responsáveis..."
            />
          </InputWrapper>
        </FormContainer>
        <BoardContainer />
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}