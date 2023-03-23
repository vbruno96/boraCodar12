import IonIcon from '@reacticons/ionicons'
import { Sidebar } from '@/components/Sidebar'
import { Avatar } from '@/components/Avatar'
import { BoardContainer } from '@/components/BoardContainer'

const todo = [
  {
    title: '#boraCodar um Kanban 🧑‍💻',
    content:
      'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
    tags: ['rocketseat', 'desafio'],
  },
  {
    title: 'Manter a ofensiva 🔥',
    content:
      'Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva',
    tags: ['rocketseat'],
  },
]

const working = [
  {
    title: 'Conferir o novo desafio 🚀',
    content:
      'Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível',
    tags: ['rocketseat', 'desafio'],
  },
  {
    title: 'Ser incrível 😎',
    content: 'Sempre me lembrar de manter minha autenticidade e espalhar amor',
    tags: ['autocuidado'],
  },
]

const done = [
  {
    title: '#boraCodar uma página de login 🧑‍💻',
    content:
      'Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva',
    tags: ['rocketseat', 'desafio'],
  },
  {
    title: '#boraCodar uma página de clima 🧑‍💻',
    content:
      'Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva',
    tags: ['rocketseat', 'desafio'],
  },
]

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <header>
          <h1>
            Meu Kanban <IonIcon name="pencil" />
          </h1>
          <Avatar imageUrl="https://github.com/vbruno96.png" />
        </header>
        <form>
          <button type="button">
            <IonIcon name="filter" />
            Filtrar
          </button>
          <div className="input-wrapper">
            <IonIcon name="search-outline" />
            <input
              name="query"
              id="query"
              placeholder="Busque por cards, assuntos ou responsáveis..."
            />
          </div>
        </form>
        <div className="content">
          <BoardContainer title="A fazer" cards={todo} />
          <BoardContainer title="Fazendo" cards={working} />
          <BoardContainer title="Feito" cards={done} />
        </div>
      </main>
    </>
  )
}

export default App
