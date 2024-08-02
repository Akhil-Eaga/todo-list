import { useLocalStorage } from "@uidotdev/usehooks";
import TodoInput from "./components/TodoInput";

interface Todo {
  id: number;
  description: string;
}

const App = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (text: string) => {
    const todo: Todo = { id: Date.now(), description: text };
    setTodos([...todos, todo]);
  };

  return <TodoInput addTodoHandler={addTodo} />;
};

export default App;
