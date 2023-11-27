import { cn } from "@/src/utils/general";

type Props = React.HTMLProps<HTMLFieldSetElement> & {
    isError?: boolean;
    errorMessage?: string;
    layout?: "horizontal" | "vertical";
};

function FormControl({
    isError,
    errorMessage,
    children,
    className,
    layout = "vertical",
    ...restProps
}: Props) {
    if (layout === "horizontal") {
        return (
            <fieldset
                className={cn("flex flex-col space-y-2", className)}
                {...restProps}
            >
                <div className="grid grid-cols-2 gap-10">{children}</div>

                {isError && errorMessage && (
                    <p className="text-xs text-red-400">{errorMessage}</p>
                )}
            </fieldset>
        );
    }

    return (
        <fieldset
            className={cn("flex flex-col space-y-2", className)}
            {...restProps}
        >
            {children}
            {isError && errorMessage && (
                <p className="text-xs text-red-400">{errorMessage}</p>
            )}
        </fieldset>
    );
}

export default FormControl;
