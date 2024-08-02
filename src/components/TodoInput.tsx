import { TextField } from "@mui/material";
import React, { FC, useState } from "react";

interface TodoInputProps {
  addTodoHandler: (text: string) => void;
}

const TodoInput: FC<TodoInputProps> = ({ addTodoHandler }) => {
  const [todo, setTodo] = useState("");

  const submitHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTodoHandler(todo);
      setTodo("");
    }
  };

  return (
    <TextField
      fullWidth
      label="Todo"
      variant="outlined"
      value={todo}
      onChange={(event) => setTodo(event?.target.value)}
      onKeyUp={submitHandler}
    />
  );
};

export default TodoInput;
