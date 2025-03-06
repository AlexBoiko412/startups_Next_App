import {defineQuery} from "groq";

export const STARTUPS_QUERY =
    defineQuery(
    `*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search ]  | order(_createdAt desc) {
    _id,
    image,
    title,
    author -> {_id, name, image, bio},
    views,
    category,
    slug,
    description,
    _createdAt,
}`)
export const STARTUP_BY_ID_QUERY =
    defineQuery(
        `*[_type == "startup" && _id == $id ][0] {
    _id,
    image,
    title,
    author -> {_id, name, image, bio},
    views,
    pitch,
    category,
    slug,
    description,
    pitch,
    _createdAt,
}`)

export const STARTUP_VIEWS =
    defineQuery(
        `*[_type == "startup" && !defined($id) || _id == $id][0]{
    _id,
    views
}`)

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
    *[_type == "author" && !defined($id) || id == $id][0] {
        _id,
        id,
        name,
        email,
        username,
        image,
        bio\ 
    }
`)
export const AUTHOR_BY_ID_QUERY = defineQuery(`
    *[_type == "author" && !defined($id) || _id == $id][0] {
        _id,
        id,
        name,
        email,
        username,
        image,
        bio\ 
    }
`)

export const STARTUPS_BY_AUTHOR_ID_QUERY =
    defineQuery(
        `*[_type == "startup" && defined($id) && author._ref == $id]  | order(_createdAt desc) {
    _id,
    image,
    title,
    author -> {_id, name, image, bio},
    views,
    category,
    slug,
    description,
    _createdAt,
}`)