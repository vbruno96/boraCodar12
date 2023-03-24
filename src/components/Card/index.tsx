import { CardContainer, TagsContainer } from './styles'

interface CardProps {
  title: string
  content: string
  tags: [string]
}

export function Card({ content, tags, title }: CardProps) {
  return (
    <CardContainer>
      <h5>{title}</h5>
      <p>{content}</p>
      <TagsContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>
    </CardContainer>
  )
}
