import { clsx, type ClassValue } from "clsx";
import format from "date-fns/format";
import { twMerge } from "tailwind-merge";

import {
    showErrorToast,
    showSuccessToast,
} from "../components/common/ToastNotification";

export const isBase64 = (value: string) => {
    try {
        // Convert the string to a Buffer using the Base64 encoding
        const buffer = Buffer.from(value, "base64");

        // Check if the buffer can be encoded back to the original string
        return buffer.toString("base64") === value;
    } catch (error) {
        return false;
    }
};

export const log = (
    message: string,
    data?: string | object | number | undefined | null
) => {
    if (data) {
        // eslint-disable-next-line no-console
        return console.log(message, data);
    }

    // eslint-disable-next-line no-console
    return console.log(message);
};

export const logError = (
    message: string | number | object,
    error?: unknown,
    logFullError = false
) => {
    const errorMessage = error instanceof Error ? error?.message : error;

    // eslint-disable-next-line no-console
    return console.error(message, logFullError ? error : errorMessage);
};

export const sleep = (ms: number) => {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const copyToClipboard = async (text: string, message?: string) => {
    const toastId = "copy-to-clipboard";
    try {
        await navigator.clipboard.writeText(text);
        showSuccessToast({
            id: toastId,
            message: message || "Copied to clipboard!",
        });
    } catch (error) {
        logError("copyToClipboard =>", error);
        showErrorToast({
            id: toastId,
            message: "Failed to copy!",
        });
    }
};

export const capitalizeFirstLetter = (str: string): string => {
    try {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    } catch (error) {
        logError("capitalizeFirstLetter =>", error);
        return str;
    }
};

export const shortenText = (str: string): string => {
    try {
        return `${str.slice(0, 30)}...`;
    } catch (error) {
        logError("shortenText =>", error);
        return str;
    }
};

export const isFieldError = (value?: unknown) => {
    return !!value;
};

export const formatDate = (date?: string | Date, withTime = false) => {
    try {
        if (date) {
            const dateObj = new Date(date);

            return format(
                dateObj,
                withTime ? "MMM dd, yyyy HH:mm a" : "MMM dd, yyyy"
            );
        }

        return "N/A";
    } catch (error) {
        return "N/A";
    }
};
