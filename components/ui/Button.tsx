import {ReactNode} from "react";

const Button = ({ children, className, ...props}: { children: ReactNode, className: string}) => {
    return (
        <button
            className={"startup-card_button " + className}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button