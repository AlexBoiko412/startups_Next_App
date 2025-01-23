import React from 'react';
import {formatDate} from "@/lib/utils";
import {Eye} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

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


            <div className="flex justify-between items-center text-sm font-normal">
                <p className={"leading-3"}>
                    {formatDate(post._createdAt)}
                </p>
                <div className={"flex items-center gap-1 leading-1"}>
                    <span><Eye width={15}/></span>
                    <p>{post.views}</p>
                </div>
            </div>
            <div className={"flex justify-between"}>
                <div className={"font-bold flex justify-start gap-4  items-center"}>
                    <Link className={""}
                          href={`/authors/${post._author?._id}`}>
                        <Image
                            className={"rounded-full"}
                            src={"https://placehold.co/48x48"}
                            width={32}
                            height={32}
                            alt={"author"}
                        />
                    </Link>
                    <Link href={`/authors/${post._author?._id}`}>
                    <span className={"text-sm duration-250 hover:text-gray-600"}>
                        {post._author?.name}
                    </span>
                    </Link>
                </div>
                <Button className={""}>
                    <Link href={`/startup/${post._id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    );
};

export default StartupCard;