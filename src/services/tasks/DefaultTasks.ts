import { ITask } from "./ITask";

const DefaultTasks: ITask[] = [
    {
        id: crypto.randomUUID(),
        title: "Create new docs",
        completed: false,
        important: 3,
        date: "2023-01-24",
    },
    {
        id: crypto.randomUUID(),
        title: "Get some sleep",
        completed: false,
        important: 2,
    },
    {
        id: crypto.randomUUID(),
        title: "Done this fucking music app",
        completed: false,
        important: 1,
        date: "2024-01-04",
    },
    {
        id: crypto.randomUUID(),
        title: "Don't be so lazy",
        completed: true,
    },
];

export default DefaultTasks;
