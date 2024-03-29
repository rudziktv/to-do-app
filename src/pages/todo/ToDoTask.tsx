import { useEffect, useState } from "react";
import TaskCheck from "../../components/TaskCheck/TaskCheck";
import { ITask } from "../../services/tasks/ITask";
import "./ToDoTask.css";
import { TaskImportantColor } from "../../services/tasks/TaskImportant";

export const ToDoTask = ({
    task,
    editTask,
    setSelectedTask,
}: ToDoTaskProps) => {
    const [completed, setCompleted] = useState(task.completed);

    useEffect(() => {
        editTask?.({ ...task, completed });
    }, [completed]);

    const formatDate = () => {
        if (!task.date) {
            return "";
        }

        const date = new Date(task.date);
        return date.toLocaleDateString("pl-PL", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
    };

    return (
        <div className="hover-element todo-task" onClick={setSelectedTask}>
            <div className="todo-task-header">
                <TaskCheck checked={completed} onChange={setCompleted} />
                {/* <input type="checkbox" name="" id="" checked={task.completed} /> */}
                <span>{task.title}</span>
            </div>

            <div className="todo-task-tags">
                <div
                    className="todo-task-tag"
                    style={{
                        color: TaskImportantColor(task.important || 0),
                    }}
                >
                    <i className="ri-flag-2-line" />
                    {task.important ? "Important" : "None"}
                    {/* <div className="todo-task-tag-icon" /> */}
                </div>

                {!!task.date && (
                    <div className="todo-task-tag">
                        <i className="ri-calendar-todo-line" />
                        {formatDate()}
                    </div>
                )}

                <div className="todo-task-tag">
                    <div className="todo-task-tag-icon" />
                    Main
                </div>
            </div>
        </div>
    );
};

export interface ToDoTaskProps {
    task: ITask;
    index?: number;
    setSelectedTask: () => void;
    editTask?: (task: ITask) => void;
}
