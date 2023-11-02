import { z } from 'zod';

const envSchema = z.object({
    REACT_APP_API_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
