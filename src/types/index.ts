import type { UseFormRegister } from "react-hook-form";
import type { IconType } from "react-icons";

export type ApiResponseType = {
    success: boolean;
    message: string;
    result: unknown;
};

export type Register = UseFormRegister<Record<string, unknown>>;

export interface Option {
    value: string;
    label: string;
    icon?: IconType;
    logo_url?: string;
}
