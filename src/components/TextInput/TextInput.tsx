import { useRef } from "react";
import "./TextInput.css";

const TextInput = ({
    label,
    leadingIcon,
    onTextChange,
    ...props
}: TextInputProps) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className="input-container" onClick={() => ref.current?.focus()}>
            {leadingIcon && <div className="input-leading">{leadingIcon}</div>}
            <div className="input-main">
                <input
                    {...props}
                    className="input-input"
                    // id="input"
                    placeholder="placeholder"
                    // type="text"
                    onChange={(e) => {
                        onTextChange?.(e.target.value);
                        props.onChange?.(e);
                    }}
                    ref={ref}
                />
                <span className="input-label">{label}</span>
            </div>
        </div>
    );
};

export interface TextInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    leadingIcon?: React.ReactNode;

    onTextChange?: (text: string) => void;
}

export default TextInput;
