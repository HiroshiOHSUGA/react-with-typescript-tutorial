// Defining Todo item type and mock data

import React from "react";

type Todo = {
  title: string;
  limitAt: Date;
  completed: boolean
};

export const App: React.VFC = () => {
  const todo: Todo[] = [
    {
      title: "Sample",
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
        <li>Todo1 2022-01-01 12:30 Completed</li>
        <li>Todo1 2022-01-01 12:30</li>
        <li>Todo1 2022-01-01 12:30</li>
        <li>Todo1 2022-01-01 12:30</li>
        <li>Todo1 2022-01-01 12:30</li>
        <li>Todo1 2022-01-01 12:30</li>
      </ul>
    </div>
  );
};