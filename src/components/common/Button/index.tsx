import { useRouter } from "next/router";

import LoadingSpinner from "../LoadingSpinner";
import { cn } from "@/src/utils/general";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonStyle?: "solid" | "outline";
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    loadingText?: string;
    isDisabled?: boolean;
    link?: string;
};

// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
function Button({
    size = "md",
    children,
    type = "button",
    className,
    isDisabled,
    isLoading,
    loadingText,
    onClick,
    link,
    ...restProps
}: Props) {
    const router = useRouter();

    let loadingSpinnerHeight = 20;
    let loadingSpinnerWidth = 20;

    if (size === "sm") {
        loadingSpinnerHeight = 15;
        loadingSpinnerWidth = 15;
    }

    return (
        <button
            // eslint-disable-next-line react/button-has-type
            type={type}
            className={cn(
                "rounded-xl bg-primary-1 bg-opacity-90 px-4 py-2 text-center text-base font-medium text-white hover:bg-opacity-80",
                isDisabled &&
                    "cursor-not-allowed bg-gray-300 text-gray-500 hover:bg-gray-300",
                isLoading && "cursor-progress bg-opacity-80",
                size === "sm" && "text-sm",
                size === "lg" && "py-3 text-base",
                className
            )}
            disabled={isLoading || isDisabled}
            onClick={async (e) => {
                if (link) {
                    await router.push(link);
                } else {
                    onClick?.(e);
                }
            }}
            {...restProps}
        >
            {isLoading ? (
                <LoadingSpinner
                    direction="horizontal"
                    loadingText={loadingText}
                    height={loadingSpinnerHeight}
                    width={loadingSpinnerWidth}
                    color="white"
                    secondaryColor="white"
                />
            ) : (
                children
            )}
        </button>
    );
}

export default Button;
