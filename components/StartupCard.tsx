import React from 'react';
import {formatDate} from "@/lib/utils";
import {Eye} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "./ui/Button"
import {Author, Startup} from "@/sanity.types";

export type StartupCardType = Omit<Startup, "author"> & {author?: Author}

const StartupCard = ({ post }: {post: StartupCardType}) => {
    const {
        _id,
        category,
        description,
        author,
        image,
        title,
        views,
        _createdAt
    } = post;

    return (
        <li className={"startup-card"}>
            <Link
                className={"startup-card_title duration-250 hover:text-gray-600 !text-[1rem] !leading-3"}
                href={`/?query=${category?.toLowerCase()}`}
            >
                {category}
            </Link>
            <Link
                className={"startup-card_title duration-250 hover:text-gray-600"}
                href={`/startup/${_id}`}
            >
                {title}
            </Link>
            <Link
                className={"startup-card_description duration-250 hover:text-gray-600"}
                href={`/startup/${_id}`}
            >
                {description}
            </Link>

            <Link href={`/startup/${_id}`}>
                <img
                    className={"startup-card_image"}
                    src={image}
                    alt={"Startup Image"}
                />
            </Link>


            <div className="flex justify-between items-center text-sm font-normal">
                <p className={"leading-3"}>
                    {formatDate(_createdAt)}
                </p>
                <div className={"flex items-center gap-1 leading-1"}>
                    <span><Eye width={15}/></span>
                    <p>{views}</p>
                </div>
            </div>
            <div className={"flex justify-between"}>
                <div className={"font-bold flex justify-start gap-4  items-center"}>
                    <Link className={""}
                          href={`/user/${author?._id}`}>
                        <Image
                            className={"rounded-full"}
                            src={"https://placehold.co/48x48"}
                            width={32}
                            height={32}
                            alt={"author"}
                        />
                    </Link>
                    <Link href={`/user/${author?._id}`}>
                    <span className={"text-sm duration-250 hover:text-gray-600"}>
                        {author?.name}
                    </span>
                    </Link>
                </div>
                <Button className={""}>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    );
};

export default StartupCard;