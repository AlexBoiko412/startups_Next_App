import {client} from "@/sanity/lib/client";
import {STARTUPS_BY_AUTHOR_ID_QUERY} from "@/sanity/lib/queries";
import StartupCard, {StartupCardType} from "@/components/StartupCard";

const UserStartupsList = async ({id}: {id: string}) => {

    const startups = await client.fetch(STARTUPS_BY_AUTHOR_ID_QUERY, {id})

    return (
        <ul className={"cards-grid"}>
            {startups?.length > 0 ?
                (startups.map((startup: StartupCardType) => {
                    return <StartupCard post={startup} key={startup._id}/>
                }))
                :
                <h2 className={"title"}>No Startups</h2>
            }
        </ul>
    )
}

export default UserStartupsList