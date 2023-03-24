import { CardsBox } from '@/components/CardsBox'
import { BoardContent } from './styles'
import { todos } from '@/data/todoData'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useState } from 'react'
import { getTodosByStatus } from '@/utils/getTodosByStatus'

export function BoardContainer() {
  const [boardData, setBoard] = useState([
    getTodosByStatus(todos, 'TODO'),
    getTodosByStatus(todos, 'WORKING'),
    getTodosByStatus(todos, 'DONE'),
  ])
  function handleDragEnd({ destination, source }: DropResult) {
    if (!destination) return
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <BoardContent>
        <CardsBox title="A fazer" cards={todo} />
        <CardsBox title="Fazendo" cards={working} />
        <CardsBox title="Feito" cards={done} />
      </BoardContent>
    </DragDropContext>
  )
}
