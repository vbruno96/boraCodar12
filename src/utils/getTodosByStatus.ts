import { Todo, Todos } from '@/models/todos'

function todoByStatus(todos: Todo[], status: string) {
  return todos.filter((todo) => todo.status === status && todo)
}

export function getTodosByStatus(todos: Todo[], status: string[]): Todos {
  return status.reduce(
    (acumulator, statusKey) => ({
      ...acumulator,
      [statusKey]: todoByStatus(todos, statusKey),
    }),
    {},
  )
}
