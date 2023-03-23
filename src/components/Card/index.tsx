interface CardProps {
  title: string
  content: string
  tags: [string]
}

export function Card({ content, tags, title }: CardProps) {
  return (
    <div className="card">
      <h5>{title}</h5>
      <p>{content}</p>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}
