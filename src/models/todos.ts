type TodoStatus = 'todo' | 'working' | 'done'

export interface Todo {
  id: number
  content: string
  status: TodoStatus
  tags: string[]
  title: string
}

export type Todos = Record<TodoStatus, Todo[]>
