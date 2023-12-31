import { z } from "zod";

import { isValidSolanaAddress } from "../utils/solana";

export const visaFormSchema = z.object({
    name: z
        .string({
            required_error: "Name is required!",
            invalid_type_error: "Name is invalid!",
        })
        .min(3, { message: "Name must be at least 3 characters long!" })
        .max(50, { message: "Name must be at most 50 characters long!" })
        .trim(),
    email: z
        .string({
            required_error: "Email is required!",
            invalid_type_error: "Email is invalid!",
        })
        .email({ message: "Email is invalid!" })
        .trim(),
    walletAddress: z
        .string({
            required_error: "Wallet address is required!",
            invalid_type_error: "Wallet address is invalid!",
        })
        .refine((value) => isValidSolanaAddress(value), {
            message: "Wallet address is invalid!",
        }),
    discordId: z
        .string({
            required_error: "Discord ID is required!",
            invalid_type_error: "Discord ID is invalid!",
        })
        .min(3, { message: "Discord ID must be at least 3 characters long!" }),
    discovery: z.string(),
    country: z.string({
        required_error: "Country is required!",
        invalid_type_error: "Country is invalid!",
    }),
    projectDetails: z.string().nullish(),
    expectation: z.string(),
    skills: z.string().array().min(1, { message: "Required!" }),
    expectationDetails: z
        .string()
        .min(1, { message: "Required!" })
        .max(500, { message: "Max 500 characters!" }),
});

export type VisaForm = z.infer<typeof visaFormSchema>;
