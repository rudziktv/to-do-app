import { ImportantLevel } from "./TaskImportant";

interface ITask {
    id?: string;
    title: string;
    description?: string;
    completed: boolean;
    important?: ImportantLevel;
    date?: Date;
}

export type { ITask };
