import {defineQuery} from "groq";

export const STARTUPS_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current)]  | order(_createdAt desc) {
  _id,
    image,
    title,
    author -> {_id, name, image, bio},
    views,
    pitch,
    category,
    slug,
    description
}`)
