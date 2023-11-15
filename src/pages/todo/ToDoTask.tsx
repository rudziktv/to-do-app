import { useState } from "react";
import TaskCheck from "../../components/TaskCheck/TaskCheck";
import { ITask } from "../../services/tasks/ITask";
import "./ToDoTask.css";

export const ToDoTask = ({ task }: ToDoTaskProps) => {
    const [first, setFirst] = useState(false);
    return (
        <div className="hover-element todo-task">
            <div className="todo-task-header">
                <TaskCheck checked={first} onChange={setFirst} />
                {/* <input type="checkbox" name="" id="" checked={task.completed} /> */}
                <span>{task.title}</span>
            </div>

            <div className="todo-task-tags">
                {task.important && (
                    <div
                        className="todo-task-tag"
                        style={{
                            color: "#F4D35E",
                        }}
                    >
                        <i className="ri-alert-line" />
                        {/* <div className="todo-task-tag-icon" /> */}
                        Important
                    </div>
                )}
                <div className="todo-task-tag">
                    <i className="ri-calendar-todo-line" />
                    14-11-2023
                </div>
                <div className="todo-task-tag">
                    <div className="todo-task-tag-icon" />
                    My list
                </div>
            </div>
        </div>
    );
};

export interface ToDoTaskProps {
    task: ITask;
}
