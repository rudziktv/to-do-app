export const ToDoNavElement = ({
    name,
    count,
    color,
    icon,
    id,
    className,
}: ToDoNavElementProps) => {
    return (
        <div id={id} className={`todo-nav-element ${className}`}>
            <div
                className="todo-nav-element-icon"
                style={{
                    backgroundColor: color ? color : "transparent",

                    boxShadow: color ? "0 0 2px 0 rgba(0, 0, 0, 0.38)" : "",
                }}
            >
                {icon}
            </div>
            <span className="todo-nav-element-name">{name}</span>
            {count != undefined && (
                <span className="todo-nav-element-count">{count}</span>
            )}
        </div>
    );
};

export interface ToDoNavElementProps {
    name: string;
    count?: number;

    icon?: React.ReactNode;

    color?: string;

    id?: string;
    className?: string;
}
