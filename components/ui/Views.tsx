import {Eye} from "lucide-react";
import React from "react";
import {client} from "@/sanity/lib/client";
import {STARTUP_VIEWS} from "@/sanity/lib/queries";
import {writeClient} from "@/sanity/lib/write-client";
import {after} from "next/server";


export default async function Views({id}: {id: string}) {
    const {views} = await client.withConfig({
        useCdn: false
    }).fetch(STARTUP_VIEWS, { id })

    after(async () => {
        await writeClient.patch(id).set({views: views + 1}).commit()
    })


    return (
        <div className={"flex items-center gap-1 leading-1"}>

            <span><Eye width={15}/></span>
            <p>{views}</p>
            <div className={"live_indicator"}/>
        </div>
    )
}