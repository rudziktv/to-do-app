import "./DropdownItem.css";

const DropdownItem = ({ label, onClick }: DropdownItemProps) => {
    return (
        <div className="dropdown-item hover-element" onClick={onClick}>
            {label}
        </div>
    );
};

export interface DropdownItemProps {
    label?: string;
    value?: number;

    onClick?: () => void;
}

export default DropdownItem;
