import { useEffect, useRef, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useOnClickOutside } from "usehooks-ts";

import type { Option } from "@/src/types";
import { cn } from "@/src/utils/general";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
    options: Option[];
    placeholder: string;
    onSelectOption: (option: Option | undefined) => void;
    isDisabled?: boolean;
};

function SelectField({
    className,
    options,
    placeholder,
    onSelectOption,
    defaultValue,
    isDisabled,
    ...restProps
}: Props) {
    const defaultOption = options.find(
        (option) => option.value === defaultValue
    );

    const [selectedOption, setSelectedOption] = useState<Option | undefined>(
        defaultOption
    );

    useEffect(() => {
        if (defaultOption) {
            setSelectedOption(defaultOption);
        }
    }, [defaultOption]);

    const [isOpen, setIsOpen] = useState(false);

    const selectContainerRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(selectContainerRef, () => {
        setIsOpen(false);
    });

    useEffect(() => {
        onSelectOption(selectedOption);
    }, [selectedOption]); //eslint-disable-line

    return (
        <div className="relative" ref={selectContainerRef}>
            <button
                type="button"
                className={cn(
                    "flex w-full items-center justify-between space-x-4 rounded-xl border-2 bg-white px-3 py-2 text-black outline-none focus:border-primary-1",
                    className
                )}
                onClick={() => setIsOpen((prev) => !prev)}
                disabled={isDisabled}
                {...restProps}
            >
                <span className={cn(selectedOption ? "" : "text-gray-400")}>
                    {selectedOption ? selectedOption?.label : placeholder}
                </span>

                {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
            </button>

            {isOpen && (
                <div className="custom-scrollbar absolute top-14 z-10 max-h-[300px] w-full overflow-y-auto rounded-md border-2 bg-white py-1 text-black">
                    {options?.map((option) => {
                        const isActive = option.label === selectedOption?.label;

                        return (
                            <button
                                className={cn(
                                    "w-full px-4 py-2 text-left",
                                    isActive
                                        ? "bg-primary-1 bg-opacity-70"
                                        : "hover:bg-primary-1"
                                )}
                                type="button"
                                key={option.label}
                                onClick={() => {
                                    setSelectedOption(option);
                                    setIsOpen(false);
                                }}
                            >
                                {option.label}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SelectField;
