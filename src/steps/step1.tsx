import React from "react";

export const App: React.VFC = () => {
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