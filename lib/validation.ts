import z from 'zod'

export const startupSchema = z.object({
    title: z.string().min(5).max(99),
    description: z.string().min(15).max(550),
    category: z.string().min(2).max(29),
    pitch: z.string().min(12),
    link: z.string().url({ message: "Invalid URL" }).refine(
        async (url) => {
            try {
                const res = await fetch(`/api/validate-image?url=${encodeURIComponent(url)}`);
                if (!res.ok) {
                    return false;
                }
                return true;
            } catch (error) {
                return false;
            }
        },
        {
            message: "URL validation failed",
            path: ["link"],
        }
    ),
})