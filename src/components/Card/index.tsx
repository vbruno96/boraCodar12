import { Draggable } from 'react-beautiful-dnd'
import { CardContainer, TagsContainer } from './styles'

interface CardProps {
  index: number
  title: string
  cardId: string
  content: string
  tags: string[]
}

export function Card({ index, content, cardId, tags, title }: CardProps) {
  return (
    <Draggable draggableId={cardId} index={index}>
      {(provided, snapshot) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <h5>{title}</h5>
          <p>{content}</p>
          <TagsContainer isDragging={snapshot.isDragging}>
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </TagsContainer>
        </CardContainer>
      )}
    </Draggable>
  )
}
