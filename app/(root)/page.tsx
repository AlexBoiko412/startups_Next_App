import SearchForm from "@/components/SearchForm";
import StartupCard, {StartupCardType} from "@/components/StartupCard";
import {client} from "@/sanity/lib/client";
import {STARTUPS_QUERY} from "@/sanity/lib/queries";

 const Home = async ({searchParams}: {searchParams: Promise<{query?: string}>}) => {
    const query = (await searchParams).query;


    const posts = await client.fetch(STARTUPS_QUERY);

     console.log(query)

    return (
        <>
            <section className={"poster-section"}>
                <div className={"poster-content" }>
                    <div>
                        <div className="heading !text-white !text-center">
                            Pitch your Startup, connect with entrepreneurs
                        </div>
                        <div className={"sub-heading !text-white !opacity-80 !text-center"}>
                            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
                        </div>
                    </div>
                    <SearchForm query={query}></SearchForm>
                </div>
            </section>
            <section className={"main-section text-black"}>
                <h2 className={"title"}>
                    {query ? "Search results for " + query : "All startups"}
                </h2>
                <ul className={"cards-grid"}>
                    {posts?.length > 0 ?
                        (posts.map((post: StartupCardType) => {
                            return <StartupCard post={post} key={post._id}/>
                        }))
                        :
                        <h2 className={"title"}>There is no such startups</h2>
                    }
                </ul>
            </section>
        </>
    )
}

export default Home;