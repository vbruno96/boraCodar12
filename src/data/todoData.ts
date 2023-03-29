import { Todo } from '@/models/todos'

export const todoStatus = ['todo', 'working', 'done']

export const todos: Todo[] = [
  {
    id: 1,
    title: '#boraCodar um Kanban 🧑‍💻',
    content:
      'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
    tags: ['rocketseat', 'desafio'],
    status: 'todo',
  },
  {
    id: 2,
    title: 'Manter a ofensiva 🔥',
    content:
      'Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva',
    tags: ['rocketseat'],
    status: 'todo',
  },
  {
    id: 3,
    title: 'Conferir o novo desafio 🚀',
    content:
      'Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível',
    tags: ['rocketseat', 'desafio'],
    status: 'working',
  },
  {
    id: 4,
    title: 'Ser incrível 😎',
    content: 'Sempre me lembrar de manter minha autenticidade e espalhar amor',
    tags: ['autocuidado'],
    status: 'working',
  },
  {
    id: 5,
    title: '#boraCodar uma página de login 🧑‍💻',
    content:
      'Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva',
    tags: ['rocketseat', 'desafio'],
    status: 'done',
  },
  {
    id: 6,
    title: '#boraCodar uma página de clima 🧑‍💻',
    content:
      'Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva',
    tags: ['rocketseat', 'desafio'],
    status: 'done',
  },
]
