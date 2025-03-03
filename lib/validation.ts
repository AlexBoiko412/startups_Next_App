import z from 'zod'

export const startupSchema = z.object({
    title: z.string().min(5).max(99),
    description: z.string().min(15).max(550),
    category: z.string().min(3).max(19),
    link: z.string().url().refine(async (url) => {
        try {
            const res = await fetch(url, {method: "HEAD"})
            const type = res.headers.get("content-type")

            if(type?.startsWith("image/")) {
                return true
            } else {
                return false
            }
        } catch (error) {
            return false
        }
    }),
    pitch: z.string().min(12)
})