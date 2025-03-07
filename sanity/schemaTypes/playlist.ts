import {defineField, defineType} from "sanity";

export const playlist = defineType({
    name: "playlist",
    title: "playlist",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title"
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "startups",
            type: "array",
            of: [{ type: "reference", to: [{type: "startup"}] }]
        }),
    ],
    preview: {
        select: {
            title: "name"
        }
    }
})