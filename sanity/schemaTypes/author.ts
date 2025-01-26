import {defineField, defineType} from "sanity";
import {UserIcon} from "@sanity/icons";

export const author = defineType({
    name: "author",
    title: "Author",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: "id",
            type: "number",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "name",
            type: "string",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "email",
            type: "string",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "username",
            type: "string",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "image",
            type: "url",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "bio",
            type: "text",
            validation: (rule) => rule.required()
        })
    ],
    preview: {
        select: {
            title: "name"
        }
    }
})