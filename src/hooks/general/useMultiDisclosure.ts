import { useState } from "react";

function useMultiDisclosure() {
    const isOpenMap = new Map<string, boolean>();

    const [isOpen, setIsOpen] = useState(isOpenMap);

    const onOpen = (id: string) => {
        setIsOpen((prev) => new Map(prev).set(id, true));
    };

    const onClose = (id: string) => {
        setIsOpen((prev) => new Map(prev).set(id, false));
    };

    return {
        isOpen: (id: string) => {
            return isOpen.get(id) ?? false;
        },
        onOpen,
        onClose,
    };
}

export default useMultiDisclosure;
