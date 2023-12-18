import { useState } from "react";
import "./Dropdown.css";
import DropdownItem from "./DropdownItem";
import { IDropdownItem } from "./IDropdownItem";

const Dropdown = ({ label, options, selected, setSelected }: DropdownProps) => {
    const [focused, setFocused] = useState(false);

    return (
        <div
            className={`dropdown ${focused && "focused"} selected`}
            onClick={() => setFocused(!focused)}
        >
            <div className="dropdown-face">
                <span className="dropdown-label">{label}</span>
                <span className="dropdown-selected">
                    {options?.filter((o) => o.value === selected)[0].label}
                </span>
                <i className="ri-arrow-drop-down-line dropdown-icon dropdown-down-icon" />
            </div>
            <div className="dropdown-options">
                {options?.map((option, index) => (
                    <DropdownItem
                        key={index}
                        label={option.label}
                        onClick={() => {
                            console.log(option.value);
                            setSelected?.(option.value);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export interface DropdownProps {
    // options?:
    label?: string;

    selected?: number;
    setSelected?: (value: number) => void;

    options?: IDropdownItem[];
}

export default Dropdown;
