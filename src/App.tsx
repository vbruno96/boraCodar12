import IonIcon from '@reacticons/ionicons'
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

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Sidebar />
      <AppContainer>
        <HeaderContainer>
          <h1>
            Meu Kanban <IonIcon name="pencil" />
          </h1>
          <Avatar imageUrl="https://github.com/vbruno96.png" />
        </HeaderContainer>
        <FormContainer>
          <button type="button">
            <IonIcon name="filter" />
            Filtrar
          </button>
          <InputWrapper>
            <IonIcon name="search-outline" />
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

export default App
