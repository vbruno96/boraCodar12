import { CardsBox } from '@/components/CardsBox'
import { BoardContent } from './styles'

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

export function BoardContainer() {
  return (
    <BoardContent>
      <CardsBox title="A fazer" cards={todo} />
      <CardsBox title="Fazendo" cards={working} />
      <CardsBox title="Feito" cards={done} />
    </BoardContent>
  )
}
