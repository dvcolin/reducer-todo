import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  background: lightblue;
  width: 60%;
  margin: 0 auto;
`;

const TodoInput = styled.input``;

const TodoForm = props => {
  const [newTodo, setNewTodo] = useState({
    item: "",
    completed: false,
    id: Math.floor(Math.random() * 99999999999999)
  });

  const handleChanges = e => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  return (
    <StyledForm>
      <h2>Add a new todo</h2>
      <TodoInput
        onChange={handleChanges}
        name="item"
        type="text"
        placeholder="Enter todo"
      />
      <button
        onClick={e => {
          e.preventDefault();
          props.addTodo(newTodo);
        }}
        type="submit"
      >
        Submit
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          props.clearCompleted();
        }}
      >
        Clear Completed
      </button>
    </StyledForm>
  );
};

export default TodoForm;
