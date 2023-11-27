import { PublicKey } from "@solana/web3.js";

import { logError } from "./general";

export const isValidSolanaAddress = (address: string) => {
    try {
        if (address?.length !== 44) {
            return false;
        }

        const pubKey = new PublicKey(address);

        return !!pubKey;
    } catch (error) {
        logError("isValidSolanaAddress =>", error);
        return false;
    }
};
