import { cn } from "@/src/utils/general";

type Props = React.HTMLAttributes<HTMLDivElement> & {
    noPadding?: boolean;
};

function Container({
    children,
    className,
    noPadding = false,
    ...restProps
}: Props) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-6xl",
                noPadding ? "p-0" : "p-4",
                className
            )}
            {...restProps}
        >
            {children}
        </div>
    );
}

export default Container;
