import Form from "next/form";
import {Search} from "lucide-react";
import SearchInputReset from "@/components/SearchInputReset";
import Link from "next/link";

const SearchForm = ({query}: {query?: string}) => {


    return (
        <Form action={"/"} scroll={false} className={"search-form"} >
            <input
                name="query"
                defaultValue={query}
                className={"border-2 border-black focus:outline-none px-4 py-2 min-w-[400px]"}
                placeholder={"Search for startups"}
            />

            <div className={"relative flex h-[100%] items-center"}>
                {query && (<SearchInputReset className={"absolute  transform -translate-x-10"} />)}
                <button type={"submit"} className={"search-button"}>
                    <Search/>
                </button>
            </div>



        </Form>
    )
}

export default SearchForm