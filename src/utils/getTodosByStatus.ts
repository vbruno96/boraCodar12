import { Todo } from '@/models/todos'

export function getTodosByStatus(todos: Todo[], status: string): Todo[] {
  return todos.filter((todo) => todo.status === status)
}
