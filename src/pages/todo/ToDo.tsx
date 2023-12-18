import { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import "./ToDo.css";
import "./ToDoContent.css";
import "./ToDoDescription.css";
import { ToDoNavElement } from "./ToDoNavElement";
import { ToDoTask } from "./ToDoTask";
import { ITask } from "../../services/tasks/ITask";
import IconButton from "../../components/IconButton/IconButton";
import Dropdown from "../../components/Dropdown/Dropdown";

const ToDoPage = () => {
    const [newTask, setNewTask] = useState("");
    const [priority, setPriority] = useState(0);
    const [tasks, setTasks] = useState<ITask[]>([
        {
            id: "d3ed5e5a-af41-5809-9fb5-614359aff0cc",
            title: "Create new docs.",
            completed: false,
            important: 3,
        },
        {
            id: "d3ed5e5a-af41-5809-9fb5-614359aff0cc",
            title: "Create new docs.",
            completed: false,
            important: 2,
        },
        {
            id: "d3ed5e5a-af41-5809-9fb5-614359aff0cc",
            title: "Create new docs.",
            completed: false,
            important: 1,
        },
        {
            id: "7c45609a-e1af-52f2-b4b5-33b2b9d6bc81",
            title: "Don't be so lazy.",
            completed: true,
        },
    ]);

    const totalCount = tasks.length;
    const completedCount = tasks.filter((task) => task.completed).length;
    const notCompletedCount = tasks.length - completedCount;
    const importantCount = tasks.filter((task) => task.important).length;

    const addNewTask = () => {
        if (!newTask) {
            return;
        }
        setTasks([
            ...tasks,
            {
                id: "d3ed5e5a-af41-5809-9fb5-614359aff0cc",
                title: newTask,
                completed: false,
            },
        ]);
        setNewTask("");
    };

    return (
        <div className="screen" id="todo-screen">
            <div id="todo-nav">
                <div id="todo-nav-header">
                    <span id="todo-nav-title">Menu</span>
                </div>
                <span className="todo-nav-subtitle">Tasks</span>
                <ToDoNavElement
                    className="active"
                    name="Today"
                    count={0}
                    icon={<i className="ri-calendar-todo-line" />}
                />
                <ToDoNavElement
                    name="Upcoming"
                    count={0}
                    icon={<i className="ri-arrow-right-double-line" />}
                />
                <ToDoNavElement
                    name="Important"
                    count={importantCount}
                    icon={<i className="ri-flag-2-line" />}
                />
                <ToDoNavElement
                    name="Waiting"
                    count={notCompletedCount}
                    icon={<i className="ri-time-line" />}
                />
                <ToDoNavElement
                    name="Completed"
                    count={completedCount}
                    icon={<i className="ri-list-check-3" />}
                />
                <span className="todo-nav-subtitle">Lists</span>
                <ToDoNavElement name="My list" color="#6C91C2" count={0} />
                <ToDoNavElement name="My work" count={0} />

                <div id="todo-nav-actions">
                    <ToDoNavElement
                        name="Settings"
                        icon={<i className="ri-settings-line" />}
                    />
                    <ToDoNavElement
                        name="Sign Out"
                        id="todo-nav-sign-out"
                        icon={<i className="ri-logout-box-line" />}
                    />
                </div>
            </div>
            <div id="todo-content">
                <div id="todo-content-header">
                    <span id="todo-content-title">Today</span>
                    <span id="todo-content-count">{totalCount}</span>
                </div>
                <div id="todo-content-body">
                    {/* <input type="text" /> */}

                    <TextInput
                        leadingIcon={
                            <IconButton
                                antiPropagation
                                onClick={addNewTask}
                                icon={<i className="ri-add-line" />}
                            />
                        }
                        label="Add new task"
                        value={newTask}
                        onTextChange={setNewTask}
                        // onSubmit={addNewTask}
                        onKeyDown={(e) => {
                            if (e.key == "Enter") {
                                e.preventDefault();
                                addNewTask();
                            }
                        }}
                    />

                    {/* <ToDoTask />
                    <ToDoTask /> */}
                    <div id="todo-content-tasks-wrapper">
                        <div id="todo-content-tasks">
                            {tasks.map((task, index) => (
                                <ToDoTask task={task} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div id="todo-description">
                <div id="todo-nav-header">
                    <span id="todo-nav-title">Selected item</span>
                </div>
                <div id="todo-description-body">
                    <TextInput label="Item Title" />
                    <TextInput label="Item Description" />{" "}
                    <span>Item Date</span>
                    <span>Item Tags</span>
                    <span>Priority</span>
                    <Dropdown
                        selected={priority}
                        setSelected={setPriority}
                        label="Priority"
                        options={[
                            {
                                value: 3,
                                label: "High",
                            },
                            {
                                value: 2,
                                label: "Med",
                            },
                            {
                                value: 1,
                                label: "Low",
                            },
                            {
                                value: 0,
                                label: "None",
                            },
                        ]}
                    />
                    {/* <select name="" id="">
                        <option value="">High</option>
                        <option value="">Med</option>
                        <option value="">Low</option>
                        <option value="">None</option>
                    </select> */}
                </div>
                <div id="todo-description-actions">
                    <IconButton
                        // id="todo-description-delete"
                        icon={<i className="ri-save-line" />}
                        onClick={() => {}}
                    />
                    <IconButton
                        id="todo-description-delete"
                        icon={<i className="ri-delete-bin-7-line" />}
                        onClick={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};

export default ToDoPage;
