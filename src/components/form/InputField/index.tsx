import { forwardRef } from "react";

import { cn } from "@/src/utils/general";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { className, ...restProps } = props;

    return (
        <input
            ref={ref}
            className={cn(
                "rounded-xl border-2 border-white px-3 py-2 text-black outline-none focus:border-primary-1",
                className
            )}
            {...restProps}
        />
    );
});

export default InputField;
