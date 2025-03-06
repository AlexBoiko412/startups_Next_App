import {client} from "@/sanity/lib/client";
import {STARTUP_BY_ID_QUERY} from "@/sanity/lib/queries";
import {notFound} from "next/navigation";
import {formatDate} from "@/lib/utils";
import React, {Suspense} from "react";
import Link from "next/link";
import Image from "next/image";

import markdown from "markdown-it"
import {Skeleton} from "@/components/ui/skeleton";
import Views from "@/components/ui/Views";

const md = markdown();


export const experimental_ppr = true

export default async function Startup({params}: {params: Promise<{id: string}>}) {
    const id = (await params).id;

    const post = await client.fetch(STARTUP_BY_ID_QUERY, {id})

    if(!post) {
        return notFound();
    }

    const parsedDetails = md.render(post?.pitch || "");

    return (
        <>
            <section className={"pt-10 px-20"}>
                <div className={"flex justify-between"}>
                    <p className={"category-button"}>
                        {post.category}
                    </p>
                    <Suspense fallback={<Skeleton/>}>
                        <Views id={post._id}/>
                    </Suspense>
                </div>

                <p className={"heading"}>
                    {post.title}
                </p>

                <div>
                    <div className={"flex justify-between items-center"}>
                        <div className={"font-bold flex justify-start gap-4  items-center"}>
                            <Link className={""}
                                  href={`/user/${post.author?._id}`}>
                                <Image
                                    className={"rounded-full"}
                                    src={post.author.image}
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

                <Image
                    src={post?.image}
                    alt={post?.title}
                    width={1000}
                    height={1000}
                    className={"py-4"}
                />
                {
                    parsedDetails
                    ? <article
                        className={"prose text-black"}
                            dangerouslySetInnerHTML={{__html: parsedDetails}}

                        />
                        : <p>
                        No Details
                        </p>
                }
            </section>

            <section className={"pt-10 px-20"}>

            </section>
         </>
    )
}