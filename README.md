# React with Typescript tutorial

## Requirements

- node v12 or higher

## Creating Todo App

1. Set up
2. Defining todo item type
3. Rendering array with loop
4. Extracting todo list item as a component
5. Wow specification was changed!
6. Text input form with state
7. Handling use input
8. (optional) Custom hooks
9. Adding todo from user input
10. 完成


### 1. Set up

- clone
- npm i
- npm start
- open `App.tsx` with your editor

### 2. Defining todo item type

Define new type as a model of application and create mock data.

```tsx
type Xxxxx = ....;

const x:Xxxxx = ...;
```

Note: When you are writing a mock, your editor will suggest and complete keys.

### 3. Rendering array with loop


Render array by loop using `Array.map` function.


```tsx
{list.map((item) => <SomeElement />}
```

Note: Understand brackets in JSX.

Note: This is a typical pattern for list.


### 4. Extracting todo list item as a component

```tsx
const XxxxComponent: React.VFC<{...}> = props = {

}
```

Note: How to define your function as aReact component.

Note: You can know how Typescript compiler support you in JSX before you define component props.



### 5. Wow specification was changed!

limitAt を真面目にやると時間がないので消します。

Note: Typescript will show you all you have to fix.


### 6. Text input form with state

You have to access user input text from a text field.
Step 6 and 7 show a basic pattern how to handle user input in React.

```tsx
const [value] = React.useState<string>("");

<input value={value}>
```

Note: After you set value to input element, user can't change text. This is a very important concept of React.

### 7. Handling user input

You have to receive changed text from a input event.

```tsx
const [value, setValue] = React.useState<string>("");

<input value={value} onChange={event => setValue(event.target.value)} />
```

Note: These event and data flow implemented in step 6 and 7 are very important. (Completly different from 2-way bindings)

### 8. (optional) Custom hooks

詳しくはやりません。
興味があれば別で React Hooks の解説をやります。

### 9. Adding todo from user input

Updating `todoList` variable with user input text when user clicked button.
But...

```tsx
const handleSubmit = React.useCallback(() => {
    event.preventDefault();
    list.push({...});
}, [...]);
```

Note: Also when you write an argument of `push`, your editor supports you.

Note: It doesn't work. 

### 10. 完成

In step 9, your application didn't work. This is one of difficult points to understand. You might have to practice to understand it. 

Any dynamic data in React you have to use `React.useState`.

```tsx

const [value, setValue] = React.useState(...);
const handleSubmit = React.useCallback(() => {
    setValue(...);
}, [...]);
```

Note: `[...list]` is array spread syntax often used for imutable operation.
