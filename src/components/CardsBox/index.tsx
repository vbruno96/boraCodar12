import { Card } from '@/components/Card'
import { CardsBoxContainer } from './styles'
import { Todo } from '@/models/todos'

interface CardsBoxProps {
  title: string
  cards: Todo[]
}

export function CardsBox({ cards, title }: CardsBoxProps) {
  return (
    <CardsBoxContainer>
      <h3>{title}</h3>
      {cards.map((card) => (
        <Card
          key={card.title}
          content={card.content}
          tags={card.tags}
          title={card.title}
        />
      ))}
    </CardsBoxContainer>
  )
}
