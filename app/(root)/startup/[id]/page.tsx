import {client} from "@/sanity/lib/client";
import {STARTUPS_BY_ID_QUERY} from "@/sanity/lib/queries";
import {notFound} from "next/navigation";
import {StartupCardType} from "@/components/StartupCard";
import {formatDate} from "@/lib/utils";
import React from "react";
import Link from "next/link";
import Image from "next/image";


export const experimental_ppr = true

export default async function Startup({params}: {params: Promise<{id: string}>}) {
    const id = (await params).id;

    const post: StartupCardType = await client.fetch(STARTUPS_BY_ID_QUERY, {id})

    if(!post) {
        return notFound();
    }

    return (
        <>
            <section className={"pt-10 px-20"}>
                <p className={"category-button"}>
                    {post.category}
                </p>
                <p className={"heading"}>
                    {post.title}
                </p>

                <div>
                    <div className={"flex justify-between items-center"}>
                        <div className={"font-bold flex justify-start gap-4  items-center"}>
                            <Link className={""}
                                  href={`/authors/${post.author?._id}`}>
                                <Image
                                    className={"rounded-full"}
                                    src={"https://placehold.co/48x48"}
                                    width={32}
                                    height={32}
                                    alt={"author"}
                                />
                            </Link>
                            <Link href={`/authors/${post.author?._id}`}>
                                <span className={"text-sm text-black duration-250 hover:text-gray-600"}>
                                    {post.author?.name}
                                </span>
                            </Link>

                        </div>
                        <p className={"leading-3 text-black-200"}>
                            {formatDate(post._createdAt)}
                        </p>
                    </div>
                </div>

            </section>
         </>
    )
}