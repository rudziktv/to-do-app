import { useEffect, useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import "./ToDo.css";
import "./ToDoContent.css";
import "./ToDoDescription.css";
import { ToDoNavElement } from "./ToDoNavElement";
import { ToDoTask } from "./ToDoTask";
import { ITask } from "../../services/tasks/ITask";
import IconButton from "../../components/IconButton/IconButton";
import Dropdown from "../../components/Dropdown/Dropdown";
import { ImportantLevel } from "../../services/tasks/TaskImportant";
import DefaultTasks from "../../services/tasks/DefaultTasks";

const ToDoPage = () => {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState<ITask[]>(
        JSON.parse(localStorage.getItem("tasks") as string) || DefaultTasks
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const [selectedTask, setSelectedTask] = useState(0);

    const totalCount = tasks.length;
    const completedCount = tasks.filter((task) => task.completed).length;
    const notCompletedCount = tasks.length - completedCount;
    const importantCount = tasks.filter((task) => task.important).length;

    const [title, setTitle] = useState(tasks[selectedTask]?.title || "");
    const [description, setDescription] = useState(
        tasks[selectedTask]?.description || ""
    );
    const [priority, setPriority] = useState(
        tasks[selectedTask]?.important || 0
    );
    const [finishDate, setFinishDate] = useState(
        tasks[selectedTask]?.date || ""
    );

    const addNewTask = () => {
        if (!newTask) {
            return;
        }
        setTasks([
            ...tasks,
            {
                id: crypto.randomUUID(),
                title: newTask,
                completed: false,
            },
        ]);
        setNewTask("");
    };

    const editTask = (task: ITask) => {
        setTasks(
            tasks.map((t) => {
                if (t.id === task.id) {
                    return task;
                }
                return t;
            })
        );
    };

    const deleteTask = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index));
        setSelectedTask(-1);
    };

    useEffect(() => {
        setTitle(tasks[selectedTask]?.title || "");
        setDescription(tasks[selectedTask]?.description || "");
        setPriority(tasks[selectedTask]?.important || 0);
        setFinishDate(tasks[selectedTask]?.date || "");
    }, [selectedTask]);

    useEffect(() => {
        if (selectedTask < 0) {
            return;
        }

        editTask({
            ...tasks[selectedTask],
            title: title,
            description: description,
            important: priority as ImportantLevel,
            date: finishDate,
        });
    }, [title, description, priority, finishDate]);

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
                <ToDoNavElement name="Main" color="#6C91C2" count={0} />
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
                        onKeyDown={(e) => {
                            if (e.key == "Enter") {
                                e.preventDefault();
                                addNewTask();
                            }
                        }}
                    />
                    <div id="todo-content-tasks-wrapper">
                        <div id="todo-content-tasks">
                            {tasks.map((task, index) => (
                                <ToDoTask
                                    task={task}
                                    key={index}
                                    index={index}
                                    setSelectedTask={() =>
                                        setSelectedTask(index)
                                    }
                                    editTask={editTask}
                                />
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
                    <TextInput
                        label="Item Title"
                        value={title}
                        onTextChange={setTitle}
                    />
                    <TextInput
                        label="Item Description"
                        value={description}
                        onTextChange={setDescription}
                    />

                    <TextInput
                        type="date"
                        label="Item Finish Date"
                        value={finishDate}
                        onTextChange={setFinishDate}
                    />

                    <span>Item Tags</span>
                    <Dropdown
                        selected={priority}
                        setSelected={setPriority}
                        label="Priority"
                        options={ImportanceItems}
                    />
                </div>
                <div id="todo-description-actions">
                    <IconButton
                        icon={<i className="ri-save-line" />}
                        onClick={() => {}}
                    />
                    <IconButton
                        id="todo-description-delete"
                        icon={<i className="ri-delete-bin-7-line" />}
                        onClick={() => {
                            deleteTask(selectedTask);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

const ImportanceItems: { value: ImportantLevel; label: string }[] = [
    {
        value: 0,
        label: "None",
    },
    {
        value: 1,
        label: "Low",
    },
    {
        value: 2,
        label: "Med",
    },
    {
        value: 3,
        label: "High",
    },
];

export default ToDoPage;
