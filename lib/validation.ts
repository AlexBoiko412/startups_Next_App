import z from 'zod'

export const startupSchema = z.object({
    title: z.string().min(5).max(99),
    description: z.string().min(15).max(550),
    category: z.string().min(2).max(29),
    pitch: z.string().min(12),
    link: z.string().url({ message: "Invalid url" }).superRefine(async (url, ctx) => {
        try {
            const res = await fetch(`/api/validate-image?url=${encodeURIComponent(url)}`);

            if (!res.ok) {
                const errorData = await res.json();
                ctx.addIssue({
                    path: ["link"],
                    message: errorData.error || "Invalid URL",
                    code: z.ZodIssueCode.custom,
                });
            }
        } catch (error) {
            ctx.addIssue({
                path: ["link"],
                message: "Validation error",
                code: z.ZodIssueCode.custom,
            });
        }
    })
})