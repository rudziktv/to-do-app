import "./IconButton.css";

const IconButton = ({
    icon,
    buttonType = "transparent",
    antiPropagation,
    ...props
}: IconButtonProps) => {
    return (
        <button
            {...props}
            onClick={(e) => {
                if (antiPropagation) e.stopPropagation();
                props.onClick?.(e);
            }}
            className={`icon-button ${buttonType} ${props.className}`}
        >
            {icon}
        </button>
    );
};

export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;

    buttonType?: IconButtonType;

    antiPropagation?: boolean;
}

export type IconButtonType = "transparent" | "primary";

export default IconButton;
