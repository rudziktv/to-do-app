const TaskImportantColor = (importantLevel: ImportantLevel) => {
    switch (importantLevel) {
        case 1:
            return "#42BFDD";
        case 2:
            return "#f4d35e";
        case 3:
            return "#da4167";
        default:
            return "#797c7c";
    }
};

type ImportantLevel = 0 | 1 | 2 | 3;

export { TaskImportantColor };

export type { ImportantLevel };
