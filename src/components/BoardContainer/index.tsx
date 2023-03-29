import { CardsBox } from '@/components/CardsBox'
import { BoardContent } from './styles'
import { todoStatus, todos } from '@/data/todoData'
import {
  DragDropContext,
  DraggableLocation,
  DropResult,
} from 'react-beautiful-dnd'
import { useState } from 'react'
import { getTodosByStatus } from '@/utils/getTodosByStatus'
import { Todo } from '@/models/todos'

export function BoardContainer() {
  const [boardData, setBoard] = useState(getTodosByStatus(todos, todoStatus))

  function reorder(list: Todo[], startIndex: number, endIndex: number) {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  function move(
    source: Todo[],
    destination: Todo[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation,
  ) {
    const sourceCopy = Array.from(source)
    const destinationCopy = Array.from(destination)
    const [removed] = sourceCopy.splice(droppableSource.index, 1)

    destinationCopy.splice(droppableDestination.index, 0, removed)

    return {
      [droppableSource.droppableId]: sourceCopy,
      [droppableDestination.droppableId]: destinationCopy,
    }
  }

  function handleDragEnd({ destination, source }: DropResult) {
    if (!destination) return

    if (source.droppableId === destination.droppableId) {
      const newTodoList = reorder(
        boardData[source.droppableId as keyof typeof boardData],
        source.index,
        destination.index,
      )
      setBoard((prevState) => ({
        ...prevState,
        [source.droppableId]: newTodoList,
      }))
    } else {
      const newTodoList = move(
        boardData[source.droppableId as keyof typeof boardData],
        boardData[destination.droppableId as keyof typeof boardData],
        source,
        destination,
      )

      setBoard((prevState) => ({
        ...prevState,
        ...newTodoList,
      }))
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <BoardContent>
        {Object.keys(boardData).map((board) => (
          <CardsBox
            key={board}
            title={board}
            boxId={board}
            cards={boardData[board as keyof typeof boardData]}
          />
        ))}
      </BoardContent>
    </DragDropContext>
  )
}
