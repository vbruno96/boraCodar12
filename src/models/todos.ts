export interface Todo {
  id: number
  content: string
  status: 'TODO' | 'WORKING' | 'DONE'
  tags: string[]
  title: string
}
