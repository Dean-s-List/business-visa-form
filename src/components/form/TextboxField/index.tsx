import { forwardRef } from "react";

import { cn } from "@/src/utils/general";

type Props = React.InputHTMLAttributes<HTMLTextAreaElement>;

const TextboxField = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
    const { className, ...restProps } = props;

    return (
        <textarea
            ref={ref}
            className={cn(
                "rounded-xl border-2 px-3 py-2 text-black outline-none focus:border-primary-1",
                className
            )}
            {...restProps}
            rows={4}
        />
    );
});

export default TextboxField;
