import { Card } from '@/components/Card'
import { CardsBoxContainer } from './styles'
import { Todo } from '@/models/todos'
import { Droppable } from 'react-beautiful-dnd'

interface CardsBoxProps {
  cards: Todo[]
  boxId: string
  title: string
}

export function CardsBox({ cards, boxId, title }: CardsBoxProps) {
  return (
    <CardsBoxContainer>
      <h3>{title}</h3>
      <Droppable droppableId={boxId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((card, index) => (
              <Card
                key={card.title}
                content={card.content}
                tags={card.tags}
                title={card.title}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </CardsBoxContainer>
  )
}
