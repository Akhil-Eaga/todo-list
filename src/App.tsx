import { Container } from "@mui/material";
import { useLocalStorage } from "@uidotdev/usehooks";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export interface Todo {
  id: number;
  description: string;
}

const App = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (text: string) => {
    const todo: Todo = { id: Date.now(), description: text };
    setTodos([...todos, todo]);
  };

  return (
    <Container maxWidth="md">
      <TodoInput addTodoHandler={addTodo} />
      <TodoList todos={todos} />
    </Container>
  );
};

export default App;
