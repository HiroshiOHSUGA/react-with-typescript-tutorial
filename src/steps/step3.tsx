// Render dynamic Todo item with loop

import React from "react";

type Todo = {
  title: string;
  limitAt: Date;
  completed: boolean
};

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
          <li key={todo.title}>
            {todo.title}
            {todo.limitAt.toUTCString()}
            {todo.completed}
          </li>
        ))}
      </ul>
    </div>
  );
};