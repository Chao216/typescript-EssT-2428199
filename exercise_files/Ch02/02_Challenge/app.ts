enum itemStatus {
  todo = "todo",
  inprogress = "in-progress",
  done = "done",
}

interface todotype {
  id: number;
  title: string;
  status: itemStatus;
  completedOn?: Date;
}

const todoItems: todotype[] = [
  {
    id: 1,
    title: "Learn HTML",
    status: itemStatus.done,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: itemStatus.inprogress },
  { id: 3, title: "Write the best app in the world", status: itemStatus.todo },
];

function getNextId<T extends { id: number }>(items: T[]): number {
  return items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1;
}

function addTodoItem(todo: string): todotype {
  const id = getNextId(todoItems);

  const newTodo = {
    id,
    title: todo,
    status: itemStatus.todo,
  };

  todoItems.push(newTodo);

  return newTodo;
}

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));

todoItems.forEach(console.log);
