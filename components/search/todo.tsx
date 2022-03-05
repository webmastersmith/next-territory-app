import { createContext, useMemo, useState, useContext } from 'react'

const TodosContext = createContext(null)

export function useTodosContext() {
  const [todos, setTodos] = useState([])
  const todosContext = useMemo(() => ({ todos, setTodos }), [todos, setTodos])
  return todosContext
}
export function useTodos() {
  return useContext(TodosContext)
}

function TodosPage() {
  const todosContext = useTodosContext()
  return (
    <TodosContext.Provider value={todosContext}>
      {/* other components containing TodoList and TodoAddButton deep down */}
    </TodosContext.Provider>
  )
}

function TodoList() {
  //@ts-ignore
  const { todos } = useTodos()
  // we can use todos where we want here
  return
}
function TodoAddButton() {
  //@ts-ignore
  const { setTodos } = useTodos()
  // we can call setTodos where we want here
  return
}
