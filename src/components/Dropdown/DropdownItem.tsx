import "./DropdownItem.css";

const DropdownItem = ({ label }: DropdownItemProps) => {
    return <div className="dropdown-item hover-element">{label}</div>;
};

export interface DropdownItemProps {
    label?: string;
    value?: number;

    onClick?: () => void;
}

export default DropdownItem;
