import {auth} from "@/auth";
import {redirect} from "next/navigation";
import CreateStartupForm from "@/components/CreateStartupForm";

const Page = async () => {
    const session = await auth();

    if(!session){
        redirect("/")
    }

    return (
        <section className={"pt-10 px-20"}>
            <div className="heading flex justify-center">
                Publish Your Startup
            </div>
            <CreateStartupForm/>

        </section>
    );
};

export default Page;