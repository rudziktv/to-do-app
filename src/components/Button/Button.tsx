const Button = ({ label, ...props }: ButtonProps) => {
    return <button {...props}>Title</button>;
};

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: React.ReactNode;
}

export default Button;
