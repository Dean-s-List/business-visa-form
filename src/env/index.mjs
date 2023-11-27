import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
    server: {
        NODE_ENV: z.union([z.literal("development"), z.literal("production")]),
    },
    client: {
        // app
        NEXT_PUBLIC_API_URL: z.string().url(),
    },
    runtimeEnv: {
        // app
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
});

export default env;
