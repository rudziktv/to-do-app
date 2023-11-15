interface ITask {
    id?: string;
    title: string;
    description?: string;
    completed: boolean;
    important?: boolean;
    date?: Date;
}

export type { ITask };
