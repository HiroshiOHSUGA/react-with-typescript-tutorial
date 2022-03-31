// Extract Todo list item element as TodoListItem
//   1. separate
//   2. Defining property type 

import React from "react";

type Todo = {
  title: string;
  limitAt: Date;
  completed: boolean
};


const TodoListItem: React.VFC<{todo: Todo}> = (props) => {
  return (<li>
    {props.todo.title}
    {props.todo.limitAt.toUTCString()}
    {props.todo.completed}
  </li>);
}


export const App: React.VFC = () => {
  const todoList: Todo[] = [
    {
      title: "Sample1",
      limitAt: new Date("2022-12-31 17:00:00"),
      completed: false
    },
    {
      title: "Sample2",
      limitAt: new Date("2022-10-30 17:00:00"),
      completed: false
    }
  ];
  return (
    <div>
      <form>
        <input type="text" name="title" />
        <button>Add todo</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.title} todo={todo}></TodoListItem>
        ))}
      </ul>
    </div>
  );
};