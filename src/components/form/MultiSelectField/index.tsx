import { useEffect, useRef, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useOnClickOutside } from "usehooks-ts";

import CheckboxInput from "../CheckboxInput";
import type { Option } from "@/src/types";
import { cn, shortenText } from "@/src/utils/general";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
    options: Option[];
    placeholder: string;
    onSelectOption: (option: Option["value"][] | undefined) => void;
    isDisabled?: boolean;
};

function MultiSelectField({
    className,
    options,
    placeholder,
    onSelectOption,
    defaultValue,
    isDisabled,
    ...restProps
}: Props) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const [isOpen, setIsOpen] = useState(false);

    const selectContainerRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(selectContainerRef, () => {
        setIsOpen(false);
    });

    useEffect(() => {
        onSelectOption(selectedOptions);
    }, [selectedOptions]); //eslint-disable-line

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
                <span
                    className={cn(
                        selectedOptions && selectedOptions?.length > 0
                            ? ""
                            : "text-gray-400"
                    )}
                >
                    {selectedOptions && selectedOptions?.length > 0
                        ? shortenText(selectedOptions?.join(", "))
                        : placeholder}
                </span>

                {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
            </button>

            {isOpen && (
                <div className="custom-scrollbar absolute top-14 z-10 max-h-[300px] w-full overflow-y-auto rounded-md border-2 bg-white py-1 text-black">
                    {options?.map((option) => {
                        const isActive = selectedOptions?.includes(
                            option.value
                        );

                        return (
                            <div
                                className={cn(
                                    "flex w-full items-center space-x-3 px-4 py-2 text-left"
                                )}
                                key={option.label}
                            >
                                <CheckboxInput
                                    checked={isActive}
                                    onClick={() => {
                                        if (isActive) {
                                            setSelectedOptions((prevState) => {
                                                return prevState.filter(
                                                    (value) =>
                                                        value !== option.value
                                                );
                                            });
                                        } else {
                                            setSelectedOptions((prevState) => {
                                                return [
                                                    ...prevState,
                                                    option.value,
                                                ];
                                            });
                                        }
                                    }}
                                />

                                <span> {option.label}</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default MultiSelectField;
