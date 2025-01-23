import React from 'react';
import {formatDate} from "@/lib/utils";
import {Eye} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const StartupCard = ({ post }) => {
    

    return (
        <li className={"startup-card"}>
            <Link
                className={"startup-card_title duration-250 hover:text-gray-600 !text-[1rem] !leading-3"}
                href={`/?query=${post.category}`}
            >
                {post.category}
            </Link>
            <Link
                className={"startup-card_title duration-250 hover:text-gray-600"}
                href={`/startup/${post._id}`}
            >
                {post.title}
            </Link>
            <Link
                className={"startup-card_description duration-250 hover:text-gray-600"}
                href={`/startup/${post._id}`}
            >
                {post.description}
            </Link>

            <Link href={`/startup/${post._id}`}>
                <img
                    className={"startup-card_image"}
                    src={post.image}
                    alt={"Startup Image"}
                />
            </Link>


            <div className="flex justify-between text-sm font-normal">
                <p className={"leading-3"}>
                    {formatDate(post._createdAt)}
                </p>
                <div className={"flex items-center gap-1 leading-1"}>
                    <span><Eye width={15}/></span>
                    <p>{post.views}</p>
                </div>
            </div>
            <p className={"font-bold flex justify-start items-center"}>
                <Link className={""}
                    href={`/authors/${post._author?._id}`}>
                    <Image

                        src={"https://placehold.co/48x48"}
                        width={48}
                        height={48}
                        alt={"author"}
                    />
                </Link>
                <Link href={`/authors/${post._author?._id}`}>
                    <span className={"duration-250 hover:text-gray-600"}>
                        {post._author?.name}
                    </span>
                </Link>
            </p>
        </li>
    );
};

export default StartupCard;