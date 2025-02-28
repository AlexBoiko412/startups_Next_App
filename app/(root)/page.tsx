import SearchForm from "@/components/SearchForm";
import StartupCard, {StartupCardType} from "@/components/StartupCard";
import {STARTUPS_QUERY} from "@/sanity/lib/queries";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";
import {auth} from "@/auth";

 const Home = async ({searchParams}: {searchParams: Promise<{query?: string}>}) => {
    const query = (await searchParams).query;
    const params = { search: query || null };

    const session = await auth();
    console.log(session);

    const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params})


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
            <SanityLive/>
        </>
    )
}

export default Home;