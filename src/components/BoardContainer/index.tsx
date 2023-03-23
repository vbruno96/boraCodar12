import { Card } from '@/components/Card'

interface ICard {
  title: string
  content: string
  tags: [string]
}

interface BoardContainerProps {
  title: string
  cards: ICard[]
}

export function BoardContainer({ cards, title }: BoardContainerProps) {
  return (
    <div className="board-container">
      <h3>{title}</h3>
      <div className="board-cards">
        {cards.map((card) => (
          <Card
            key={card.title}
            content={card.content}
            tags={card.tags}
            title={card.title}
          />
        ))}
      </div>
    </div>
  )
}
