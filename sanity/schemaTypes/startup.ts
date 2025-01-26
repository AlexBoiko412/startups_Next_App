import {defineField, defineType} from "sanity";

export const startup = defineType({
    name: "startup",
    title: "Startup",
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
            name: "author",
            type: "reference",
            to: {type: "author"}
        }),
        defineField({
            name: "views",
            type: "number",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "description",
            type: "text",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "image",
            type: "url",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "category",
            type: "string",
            validation: (rule) => rule.min(1).max(20),
            options: {
                list: ["AI", "IT", "Software"]
            }
        }),
        defineField({
            name: "pitch",
            type: "markdown",
        })
    ],
    preview: {
        select: {
            title: "name"
        }
    }
})