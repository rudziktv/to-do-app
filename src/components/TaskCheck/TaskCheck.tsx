import "./TaskCheck.css";

const TaskCheck = ({ checked, onChange, antiPropagation }: TaskCheckProps) => {
    return (
        <div
            className={`task-check ${checked && "checked"}`}
            onClick={(e) => {
                if (antiPropagation) e.stopPropagation();
                onChange?.(!checked);
            }}
        >
            <i className={`ri-check-line task-check-icon`} />
        </div>
    );
};

export interface TaskCheckProps {
    checked?: boolean;
    onChange?: (value: boolean) => void;

    antiPropagation?: boolean;
}

export default TaskCheck;
