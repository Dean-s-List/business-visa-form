import axios from "axios";

import env from "@/src/env/index.mjs";

export const apiInstance = axios.create({
    baseURL: env.NEXT_PUBLIC_API_URL,
    validateStatus: () => true,
});
