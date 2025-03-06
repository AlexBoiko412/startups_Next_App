import {auth} from "@/auth";
import {redirect} from "next/navigation";
import {client} from "@/sanity/lib/client";
import {AUTHOR_BY_ID_QUERY} from "@/sanity/lib/queries";
import {notFound} from "next/navigation";
import Image from "next/image";
import {StartupCardSkeleton} from "@/components/StartupCard";
import UserStartupsList from "@/components/UserStartupsList";
import {Suspense} from "react";

export const experimental_ppr = true

const Page = async ({ params}: {params: Promise<{id: string}>}) => {
    const id = (await params).id
    const session = await auth()

    if(!session){
        redirect("/")
    }

    const user = await client.fetch(AUTHOR_BY_ID_QUERY, {id })
    if(!user) return notFound()

    return (
            <section className={"main-section text-black"}>
                <h1>{user?.name}</h1>
                <Image
                    src={user.image}
                    alt={user.name}
                    width={100}
                    height={100}
                />
                <h1 className={"heading"}>{user?.username}</h1>
                <h1 className={"heading !text-2xl"}>{
                    session?.id === id
                        ? "Your"
                        : "User's"
                } Startups: </h1>
                <Suspense fallback={<StartupCardSkeleton/>}>
                    <UserStartupsList id={id}/>
                </Suspense>
            </section>
    );
};

export default Page;