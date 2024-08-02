import { List, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";
import { Todo } from "../App";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} divider>
          <ListItemText>{todo.description}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
