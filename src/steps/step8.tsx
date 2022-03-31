// Wrapping as custom hooks
import React from "react";

type Todo = {
  title: string;
  completed: boolean
};


const TodoListItem: React.VFC<{todo: Todo}> = (props) => {
  return (<li>
    {props.todo.title}
    {props.todo.completed}
  </li>);
}

const useTextInput = (defaultValue: string): [
  string,
  Exclude<React.ComponentProps<"input">['onChange'], undefined>
] => {
  const [value, setValue] = React.useState<string>(defaultValue);
  const handleChange = React.useCallback<Exclude<React.ComponentProps<"input">['onChange'], undefined>>((event) => {
    setValue(event.target.value);
  }, [setValue])

  return [value, handleChange];
}


export const App: React.VFC = () => {
  const [todoTitle, handleTodoTitleChange] = useTextInput("sample!!!");
  const todoList: Todo[] = [
    {
      title: "Sample1",
      completed: false
    },
    {
      title: "Sample2",
      completed: false
    }
  ];

  return (
    <div>
      <form>
        <input type="text" name="title" value={todoTitle} onChange={handleTodoTitleChange} />
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