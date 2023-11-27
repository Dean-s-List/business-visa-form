import { cn } from "@/src/utils/general";

type Props = React.HTMLProps<HTMLLabelElement> & { helperText?: string };

function Label({ htmlFor, className, helperText, ...restProps }: Props) {
    if (helperText) {
        return (
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor={htmlFor}
                    className={cn("text-white", className)}
                    {...restProps}
                />
                <span className="text-white">{helperText}</span>
            </div>
        );
    }

    return (
        <label
            htmlFor={htmlFor}
            className={cn("text-white", className)}
            {...restProps}
        />
    );
}

export default Label;
