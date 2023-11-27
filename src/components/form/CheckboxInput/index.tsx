import * as Checkbox from "@radix-ui/react-checkbox";
import { forwardRef } from "react";
import { FaCheck } from "react-icons/fa6";

import { cn } from "@/src/utils/general";

type Props = Checkbox.CheckboxProps & { isDisabled?: boolean };

const CheckboxInput = forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const { className, isDisabled, ...restProps } = props;

    return (
        <Checkbox.Root
            ref={ref}
            className={cn(
                "h-5 w-5 rounded data-[state=unchecked]:border-2 data-[state=unchecked]:border-black data-[state=checked]:bg-primary-1",
                className,
                isDisabled && "cursor-not-allowed bg-gray-200 opacity-60"
            )}
            disabled={isDisabled}
            {...restProps}
        >
            <Checkbox.Indicator className="flex items-center justify-center p-0.5 text-black">
                <FaCheck />
            </Checkbox.Indicator>
        </Checkbox.Root>
    );
});

export default CheckboxInput;
