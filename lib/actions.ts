"use server"

import {auth} from "@/auth";
import {parseServeActionResponse} from "@/lib/utils";
import slugify from "slugify";
import {writeClient} from "@/sanity/lib/write-client";

export const publishStartup = async (state: any, formData : FormData, pitch: string) => {

    const session = await auth()

    if (!session) return parseServeActionResponse({error: "Not Authorized", status: "ERROR"})

    const startup = Object.fromEntries(
        Array.from(formData)
            .filter(([key]) => key !== "pitch")
    )
    const slug = slugify(startup.title as string, {lower: true, strict: true})

    try {
        const newStartup = {
            title: startup.title,
            description: startup.description,
            pitch: pitch,
            slug: {
                _type: "slug",
                current: slug,
            },
            image: startup.link,
            category: startup.category,
            author: {
                _type: "reference",
                _ref: session?.id
            }
        }

        const result = await writeClient.create({_type: "startup", ...newStartup});

        return parseServeActionResponse({
            ...result,
            error: "",
            status: "SUCCESS"})
    } catch (e) {
        return parseServeActionResponse({error: JSON.stringify(e), status: "ERROR"})
    }

}
